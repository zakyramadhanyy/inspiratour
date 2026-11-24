(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');

  // Header: gain a solid edge once the page scrolls under it.
  const header = $('[data-header]');
  const onScroll = () => header.classList.toggle('is-stuck', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Desktop submenus: hover is CSS, the chevron covers click and keyboard.
  const toggles = $$('.nav__toggle');
  const closeSubs = (except) => toggles.forEach((t) => t !== except && t.setAttribute('aria-expanded', 'false'));
  toggles.forEach((t) => {
    t.addEventListener('click', () => {
      closeSubs(t);
      t.setAttribute('aria-expanded', String(t.getAttribute('aria-expanded') !== 'true'));
    });
    t.parentElement.addEventListener('focusout', (e) => {
      if (!t.parentElement.contains(e.relatedTarget)) t.setAttribute('aria-expanded', 'false');
    });
    t.parentElement.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && t.getAttribute('aria-expanded') === 'true') {
        t.setAttribute('aria-expanded', 'false');
        t.focus();
      }
    });
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('.nav__item--sub')) closeSubs(); });

  // Mobile menu: native <dialog> supplies focus trapping and Escape.
  const menu = $('#mobile-menu');
  const opener = $('[data-menu-open]');
  opener.addEventListener('click', () => { menu.showModal(); opener.setAttribute('aria-expanded', 'true'); });
  $('[data-menu-close]').addEventListener('click', () => menu.close());
  menu.addEventListener('click', (e) => { if (e.target.closest('a[href^="#"]')) menu.close(); });
  menu.addEventListener('close', () => opener.setAttribute('aria-expanded', 'false'));
  matchMedia('(min-width: 1024px)').addEventListener('change', (e) => { if (e.matches && menu.open) menu.close(); });

  // Hero slideshow: base photo and cut-out switch together.
  const hero = $('[data-hero]');
  const imgs = $$('.hero__img', hero);
  const thumbs = $$('[data-go]', hero);
  const pause = $('[data-pause]', hero);
  let current = 1;
  let playing = !reduced.matches;
  let timer;
  const show = (n) => {
    current = n;
    hero.dataset.current = n;
    imgs.forEach((i) => i.classList.toggle('is-active', Number(i.dataset.slide) === n));
    thumbs.forEach((t) => t.setAttribute('aria-pressed', String(Number(t.dataset.go) === n)));
  };
  const schedule = () => {
    clearInterval(timer);
    if (playing) timer = setInterval(() => { if (!document.hidden) show((current % 4) + 1); }, 6000);
    pause.setAttribute('aria-label', playing ? 'Pause slideshow' : 'Play slideshow');
    pause.classList.toggle('is-paused', !playing);
  };
  thumbs.forEach((t) => t.addEventListener('click', () => { show(Number(t.dataset.go)); playing = false; schedule(); }));
  pause.addEventListener('click', () => { playing = !playing; schedule(); });
  schedule();

  // Activities rail: buttons, meter, and mouse drag on top of native scrolling.
  const rail = $('[data-rail]');
  const meter = $('[data-rail-meter]');
  const prev = $('[data-rail-prev]');
  const next = $('[data-rail-next]');
  const syncRail = () => {
    const max = rail.scrollWidth - rail.clientWidth;
    const size = rail.clientWidth / rail.scrollWidth;
    meter.style.width = `${size * 100}%`;
    meter.style.left = `${(max ? rail.scrollLeft / max : 0) * (1 - size) * 100}%`;
    prev.disabled = rail.scrollLeft <= 2;
    next.disabled = rail.scrollLeft >= max - 2;
  };
  const step = (dir) => rail.scrollBy({ left: dir * rail.clientWidth * 0.7, behavior: reduced.matches ? 'auto' : 'smooth' });
  prev.addEventListener('click', () => step(-1));
  next.addEventListener('click', () => step(1));
  rail.addEventListener('scroll', syncRail, { passive: true });
  new ResizeObserver(syncRail).observe(rail);
  let drag = null;
  rail.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    drag = { x: e.clientX, left: rail.scrollLeft };
    rail.setPointerCapture(e.pointerId);
    rail.classList.add('is-dragging');
  });
  rail.addEventListener('pointermove', (e) => { if (drag) rail.scrollLeft = drag.left - (e.clientX - drag.x); });
  const endDrag = () => { drag = null; rail.classList.remove('is-dragging'); };
  rail.addEventListener('pointerup', endDrag);
  rail.addEventListener('pointercancel', endDrag);

  // Places: the hovered or focused continent opens and stays open.
  const places = $$('[data-places] > li');
  places.forEach((li) => {
    const open = () => places.forEach((p) => p.classList.toggle('is-open', p === li));
    li.addEventListener('pointerenter', open);
    li.addEventListener('focusin', open);
  });

  // Testimonials: standard tabs with arrow keys.
  const tabs = $$('[role="tab"]');
  const select = (tab, focus) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).classList.toggle('is-active', on);
    });
    if (focus) tab.focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', (e) => {
      const move = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (!move) return;
      e.preventDefault();
      select(tabs[(i + move + tabs.length) % tabs.length], true);
    });
  });
  select(tabs[0]);

  // Scroll reveals and the one-time count on Achievements.
  const count = (el) => {
    const end = Number(el.dataset.count);
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / 900, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    e.target.classList.add('is-in');
    if (e.target.dataset.count && !reduced.matches) count(e.target);
  }), { threshold: 0.25 });
  $$('[data-reveal], [data-count], .tag, .moment__figure').forEach((el) => io.observe(el));
})();
