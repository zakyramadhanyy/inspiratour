// Shared behaviour for every page. Each block runs only when its markup is on the page.
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const still = matchMedia('(prefers-reduced-motion: reduce)');

  /* Navigation */
  const toggles = $$('.nav__t');
  const closeSubs = (but) => toggles.forEach((t) => t !== but && t.setAttribute('aria-expanded', 'false'));
  toggles.forEach((t) => {
    const item = t.parentElement;
    t.addEventListener('click', () => { closeSubs(t); t.setAttribute('aria-expanded', String(t.getAttribute('aria-expanded') !== 'true')); });
    item.addEventListener('focusout', (e) => { if (!item.contains(e.relatedTarget)) t.setAttribute('aria-expanded', 'false'); });
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && t.getAttribute('aria-expanded') === 'true') { t.setAttribute('aria-expanded', 'false'); t.focus(); }
    });
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('.has-sub')) closeSubs(); });

  const menu = $('#menu');
  const opener = $('[data-menu-open]');
  if (menu && opener) {
    opener.addEventListener('click', () => { menu.showModal(); opener.setAttribute('aria-expanded', 'true'); });
    $('[data-menu-close]').addEventListener('click', () => menu.close());
    menu.addEventListener('click', (e) => { if (e.target.closest('a[href]')) menu.close(); });
    menu.addEventListener('close', () => opener.setAttribute('aria-expanded', 'false'));
    matchMedia('(min-width: 1080px)').addEventListener('change', (e) => { if (e.matches && menu.open) menu.close(); });
  }

  /* Home: activities list drives the sticky photo */
  const acts = $$('.act');
  const frames = $$('[data-acts-frame] img');
  if (acts.length && frames.length) {
    const setAct = (i) => {
      acts.forEach((a, k) => (k === i ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')));
      frames.forEach((f, k) => f.classList.toggle('is-on', k === i));
    };
    const mid = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) setAct(acts.indexOf(e.target)); }), { rootMargin: '-48% 0px -48% 0px' });
    acts.forEach((a, i) => {
      mid.observe(a);
      ['pointerenter', 'focus', 'click'].forEach((ev) => a.addEventListener(ev, () => setAct(i)));
    });
  }

  /* Home: Inspira moment seats */
  const seats = $$('.seat');
  seats.forEach((s) => $('button', s).addEventListener('click', () => seats.forEach((o) => {
    const on = o === s;
    o.classList.toggle('is-on', on);
    $('button', o).setAttribute('aria-expanded', String(on));
  })));

  /* Home: gallery viewer with region tabs */
  const view = $('[data-view]');
  if (view) {
    const tabs = $$('[data-gal-tabs] [role="tab"]');
    const shots = (id) => $$(`#${id} [data-trip]`);
    let region = 'asia';
    const show = (btn) => {
      const [title, ...rest] = btn.getAttribute('aria-label').split(', ');
      shots(region).forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      view.src = `assets/img/trips/${btn.dataset.trip}.webp`;
      view.alt = `${title} group, ${rest.join(', ')}`;
      $('[data-view-t]').textContent = title;
      $('[data-view-s]').textContent = rest.join(', ');
    };
    const pick = (id, focus) => {
      region = id;
      tabs.forEach((t) => {
        const on = t.getAttribute('aria-controls') === id;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        $(`#${t.getAttribute('aria-controls')}`).hidden = !on;
        if (on && focus) t.focus();
      });
      show(shots(id)[0]);
    };
    const step = (d) => {
      const list = shots(region);
      const i = list.findIndex((b) => b.getAttribute('aria-pressed') === 'true');
      show(list[(i + d + list.length) % list.length]);
    };
    view.addEventListener('error', () => { $('[data-view-s]').textContent = 'This photo could not be loaded. Check your connection and try again.'; });
    $$('[data-trip]').forEach((b) => b.addEventListener('click', () => show(b)));
    $('[data-view-prev]').addEventListener('click', () => step(-1));
    $('[data-view-next]').addEventListener('click', () => step(1));
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => pick(t.getAttribute('aria-controls')));
      t.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        e.preventDefault();
        pick(tabs[(i + 1) % tabs.length].getAttribute('aria-controls'), true);
      });
    });
    $$('[data-open-tab]').forEach((a) => a.addEventListener('click', () => pick(a.dataset.openTab)));
  }

  /* Gallery page: lightbox over each region's photos */
  const box = $('#lightbox');
  if (box) {
    const img = $('[data-box-img]', box);
    let list = [];
    let at = 0;
    const show = (i) => {
      at = (i + list.length) % list.length;
      const b = list[at];
      img.src = b.dataset.full;
      img.alt = b.dataset.alt;
      $('[data-box-t]', box).textContent = b.dataset.client;
      $('[data-box-s]', box).textContent = b.dataset.title;
      $('[data-box-n]', box).textContent = `${at + 1} / ${list.length}`;
    };
    img.addEventListener('error', () => { $('[data-box-s]', box).textContent = 'This photo could not be loaded. Check your connection and try again.'; });
    $$('[data-shot]').forEach((b) => b.addEventListener('click', () => {
      list = $$('[data-shot]', b.closest('[data-shots]'));
      show(list.indexOf(b));
      box.showModal();
    }));
    $('[data-box-prev]', box).addEventListener('click', () => show(at - 1));
    $('[data-box-next]', box).addEventListener('click', () => show(at + 1));
    $('[data-box-close]', box).addEventListener('click', () => box.close());
    box.addEventListener('click', (e) => { if (e.target === box) box.close(); });
    box.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') show(at - 1);
      if (e.key === 'ArrowRight') show(at + 1);
    });
    box.addEventListener('close', () => { if (list[at]) list[at].focus(); });
  }

  /* Filter chips: testimonials by company, destinations by region */
  $$('[data-filter]').forEach((bar) => {
    const items = $$(`[data-group="${bar.dataset.filter}"] [data-tags]`);
    const status = $(`[data-filter-status="${bar.dataset.filter}"]`);
    const chips = $$('button', bar);
    chips.forEach((chip) => chip.addEventListener('click', () => {
      const key = chip.dataset.key;
      chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      let shown = 0;
      items.forEach((it) => {
        const on = key === 'all' || it.dataset.tags.split(' ').includes(key);
        it.hidden = !on;
        if (on) shown += 1;
      });
      if (status) status.textContent = `Showing ${shown} of ${items.length}`;
    }));
  });

  /* Inspiration page: a video loads only when asked for */
  const player = $('#player');
  if (player) {
    const frame = $('[data-player-frame]', player);
    const open = (btn) => {
      frame.innerHTML = '';
      const f = document.createElement('iframe');
      f.src = `https://www.youtube-nocookie.com/embed/${btn.dataset.video}?autoplay=1&rel=0`;
      f.title = btn.dataset.title;
      f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      f.allowFullscreen = true;
      frame.append(f);
      $('[data-player-t]', player).textContent = btn.dataset.title;
      $('[data-player-yt]', player).href = `https://youtu.be/${btn.dataset.video}`;
      player.showModal();
    };
    let last = null;
    $$('[data-video]').forEach((b) => b.addEventListener('click', () => { last = b; open(b); }));
    $('[data-player-close]', player).addEventListener('click', () => player.close());
    player.addEventListener('click', (e) => { if (e.target === player) player.close(); });
    player.addEventListener('close', () => { frame.innerHTML = ''; if (last) last.focus(); });
  }

  /* Contact page: validate, then hand the message to the visitor's email app */
  const form = $('[data-contact-form]');
  if (form) {
    const done = $('[data-sent]');
    const fields = $$('input, textarea', form);
    const message = (f) => {
      if (f.validity.valueMissing) return f.dataset.empty;
      if (f.validity.typeMismatch) return 'Please enter an email address like name@company.com.';
      return '';
    };
    const check = (f) => {
      const msg = message(f);
      const out = $(`#${f.id}-err`);
      f.setAttribute('aria-invalid', String(Boolean(msg)));
      if (out) out.textContent = msg;
      return !msg;
    };
    fields.forEach((f) => {
      f.addEventListener('blur', () => { if (f.value || f.getAttribute('aria-invalid') === 'true') check(f); });
      f.addEventListener('input', () => { if (f.getAttribute('aria-invalid') === 'true') check(f); });
    });
    const count = $('[data-count-of="msg"]');
    const msgField = $('#msg');
    if (count && msgField) msgField.addEventListener('input', () => { count.textContent = `${msgField.value.length} / ${msgField.maxLength}`; });
    $$('[data-subject]').forEach((b) => b.addEventListener('click', () => {
      const s = $('#subject');
      s.value = b.dataset.subject;
      check(s);
      s.focus();
    }));
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const bad = fields.filter((f) => !check(f));
      if (bad.length) { bad[0].focus(); return; }
      const v = (id) => $(`#${id}`).value.trim();
      const subject = v('subject') || 'Question for Inspira Tour';
      const body = [v('msg'), '', `${v('name')}`, v('company'), v('email')].filter((x, i) => x || i === 1).join('\n');
      const href = `mailto:info@inspiratour.co.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      $('[data-copy-text]').textContent = `To: info@inspiratour.co.id\nSubject: ${subject}\n\n${body}`;
      $('[data-mail-again]').href = href;
      done.hidden = false;
      done.focus();
      window.location.href = href;
    });
    $('[data-copy]').addEventListener('click', async (e) => {
      const btn = e.currentTarget;
      try {
        await navigator.clipboard.writeText($('[data-copy-text]').textContent);
        btn.textContent = 'Copied';
      } catch {
        btn.textContent = 'Select the text above and copy it';
      }
    });
    $('[data-edit]').addEventListener('click', () => { done.hidden = true; $('#name').focus(); });
  }

  /* Motion: GSAP and Lenis, skipped entirely under reduced motion */
  addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined' || still.matches) return;
    gsap.registerPlugin(ScrollTrigger);

    // Wheel smoothing only; touch keeps native scrolling.
    if (typeof Lenis !== 'undefined' && matchMedia('(pointer: fine)').matches) {
      const lenis = new Lenis({ lerp: 0.11, anchors: true });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
      $$('dialog').forEach((d) => new MutationObserver(() => (d.open ? lenis.stop() : lenis.start())).observe(d, { attributes: true, attributeFilter: ['open'] }));
    }

    gsap.matchMedia().add('(min-width: 901px)', () => {
      document.documentElement.classList.add('parallax');

      const hero = $('[data-hero]');
      if (hero) {
        gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } })
          .to('[data-layer="back"]', { y: () => hero.offsetHeight * 0.22 }, 0)
          .to('[data-layer="title"]', { y: () => hero.offsetHeight * 0.3 }, 0)
          .to('[data-layer="text"]', { y: () => hero.offsetHeight * 0.3 }, 0);
      }

      const photo = $('.open__photo');
      if (photo) {
        gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: '[data-open]', start: 'top top', end: 'bottom bottom', scrub: true } })
          .fromTo(photo, { clipPath: 'inset(17% 37.5% 13% 37.5% round 168px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 0.8, ease: 'power1.inOut' }, 0)
          .fromTo($('img', photo), { scale: 1.22 }, { scale: 1.02, duration: 1 }, 0)
          .to('.open__words span:first-child', { x: -60, duration: 0.8 }, 0)
          .to('.open__words span:last-child', { x: 60, duration: 0.8 }, 0);
      }

      // Photos lag behind their frame, so each section edge slides past them.
      $$('.px').forEach((frame) => {
        const p = Number(getComputedStyle(frame).getPropertyValue('--p')) || 12;
        const shift = (p / (100 + 2 * p)) * 100;
        gsap.fromTo($('img', frame), { yPercent: -shift }, { yPercent: shift, ease: 'none', scrollTrigger: { trigger: frame.closest('.vcard, .ready, .band') || frame, start: 'top bottom', end: 'bottom top', scrub: true } });
      });
      $$('[data-drift]').forEach((el) => {
        const d = Number(el.dataset.drift);
        gsap.fromTo(el, { y: d }, { y: -d, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
      });
      $$('[data-col]').forEach((col) => {
        const d = [40, 130, 0][Number(col.dataset.col)];
        gsap.fromTo(col, { y: d }, { y: -d * 0.4, ease: 'none', scrollTrigger: { trigger: col.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
      });
      const cards = $$('.vcard');
      cards.slice(0, -1).forEach((card, i) => {
        gsap.to(card, { scale: 0.95 - (1 - i) * 0.02, ease: 'none', scrollTrigger: { trigger: cards[i + 1], start: 'top 85%', end: 'top 20%', scrub: true } });
      });
      return () => document.documentElement.classList.remove('parallax');
    });

    // The shades come down as the flight ends.
    $$('[data-night] .shade').forEach((s, i) => {
      gsap.fromTo(s, { yPercent: -101 }, { yPercent: [-30, -52, -78, -44, -24][i % 5], ease: 'none', scrollTrigger: { trigger: '[data-night]', start: 'top 70%', end: 'top 8%', scrub: true } });
    });

    const splitWords = (el) => {
      const frag = document.createDocumentFragment();
      el.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (!part.trim()) { frag.append(' '); return; }
        const mask = document.createElement('span');
        const word = document.createElement('span');
        mask.className = 'w';
        word.textContent = part;
        mask.append(word);
        frag.append(mask);
      });
      el.replaceChildren(frag);
      return $$('.w > span', el);
    };
    $$('[data-words]').forEach((el) => {
      const words = splitWords(el);
      gsap.set(words, { yPercent: 118 });
      ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: () => gsap.to(words, { yPercent: 0, duration: 0.6, ease: 'power3.out', stagger: 0.04, clearProps: 'transform' }) });
    });
    $$('[data-stagger]').forEach((list) => {
      gsap.from(list.children, { opacity: 0, y: 24, duration: 0.5, ease: 'power3.out', stagger: 0.05, clearProps: 'opacity,transform', scrollTrigger: { trigger: list, start: 'top 86%', once: true } });
    });
    $$('[data-count]').forEach((el) => {
      const n = { v: 0 };
      gsap.to(n, { v: Number(el.dataset.count), duration: 1.1, ease: 'power2.out', onUpdate: () => { el.textContent = Math.round(n.v); }, scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
    });

    addEventListener('load', () => ScrollTrigger.refresh());
  });
})();
