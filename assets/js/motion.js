// Motion layer: Lenis smooth scroll, GSAP + ScrollTrigger word reveals and card entrances.
// Everything here is optional. Without the libraries, or with reduced motion, the page is static.
(() => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // Smooth scroll, driven by the GSAP ticker so ScrollTrigger stays in sync.
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({ lerp: 0.1, anchors: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);

    // The mobile menu is a modal dialog: freeze the page behind it.
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.setAttribute('data-lenis-prevent', '');
      new MutationObserver(() => (menu.open ? lenis.stop() : lenis.start())).observe(menu, { attributes: true, attributeFilter: ['open'] });
      menu.addEventListener('click', (e) => { if (e.target.closest('a[href^="#"]')) lenis.start(); });
    }
  }

  // Headings: split into words, each word rises out of its own mask.
  const splitWords = (el) => {
    const walk = (node) => [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.append(' '); return; }
          const mask = document.createElement('span');
          const word = document.createElement('span');
          mask.className = 'w';
          word.className = 'w__i';
          word.textContent = part;
          mask.append(word);
          frag.append(mask);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) walk(n);
    });
    walk(el);
    return el.querySelectorAll('.w__i');
  };
  $$('.h-section, .ready__text p').forEach((el) => {
    const words = splitWords(el);
    gsap.set(words, { yPercent: 115 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => gsap.to(words, { yPercent: 0, duration: 0.8, ease: 'power3.out', stagger: 0.055, clearProps: 'transform' }),
    });
  });

  // Cards: each group rises in together with a short stagger.
  const group = (els, trigger, { y = 36, stagger = 0.09, start = 'top 85%' } = {}) => {
    if (!els.length || !trigger) return;
    gsap.set(els, { opacity: 0, y });
    ScrollTrigger.create({
      trigger,
      start,
      once: true,
      onEnter: () => gsap.to(els, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', stagger, clearProps: 'transform,opacity' }),
    });
  };
  const one = (s) => document.querySelector(s);
  group($$('.rail__list > li'), one('.rail'), { stagger: 0.07, start: 'top 90%' });
  group($$('.places__list > li'), one('.places__list'), { stagger: 0.1, y: 48 });
  group($$('.facts__list > div'), one('.facts__list'), { stagger: 0.12, y: 28 });
  $$('.moment__list article').forEach((a) => group([a], a, { y: 28, start: 'top 90%' }));
  group($$('.voices__body'), one('.voices__body'), { y: 32, start: 'top 90%' });

  // Images may change layout height after load.
  addEventListener('load', () => ScrollTrigger.refresh());
})();
