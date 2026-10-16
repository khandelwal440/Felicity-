/* Felicity — shared behaviour for every page.
   Each block only runs when its elements exist on the current page. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const pad = n => String(n).padStart(2, '0');
  const I = n => `images/${n}.jpg`;
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const G = window.gsap, ST = window.ScrollTrigger;
  const D = window.FELICITY;
  const CASES = D.CASES;
  const ICON = {
    events: '<path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 16.9 5.9 20.4l1.5-6.8L2.2 9l6.9-.7z"/>',
    marketing: '<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
    promotion: '<path d="M3 3h18v6H3z"/><path d="M5 9v12h14V9M9 13h6"/>',
    activation: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  };
  const svg = k => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICON[k]}</svg>`;
  const arrow = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>';
  const photoCount = n => `${n} photo${n > 1 ? 's' : ''}`;
  const totalPhotos = CASES.reduce((a, c) => a + c.photos.length, 0);

  /* ================= HOME PAGE ================= */
  const slides = $('#slides');
  if (slides) {
    slides.innerHTML = D.SLIDES.map(([p, c], i) => `<img src="${I(p)}" alt="${c}" ${i ? 'loading="lazy"' : 'fetchpriority="high"'}>`).join('');
    $('#bars').innerHTML = D.SLIDES.map((s, i) => `<button type="button" aria-label="Show slide ${i + 1}: ${s[1]}"><i></i></button>`).join('');
  }
  const svc = $('#svc');
  if (svc) svc.innerHTML = D.SERVICES.map(([ic, t, items]) => `<article data-a><span class="ic">${svg(ic)}</span><h3>${t}</h3><ul>${items.map(s => `<li><a href="#contact" data-type="${s}">${s}</a></li>`).join('')}</ul></article>`).join('');
  const cgrid = $('#cgrid');
  if (cgrid) cgrid.innerHTML = [0, 1, 2, 3].map(i => { const c = CASES[i]; return `<button type="button" class="ccard" data-case="${i}" data-a aria-label="Open ${c.title} photos"><div class="im"><img src="${I(c.photos[0])}" alt="${c.title}" loading="lazy"></div><div class="t"><b>${c.title}</b><small>${c.place}</small></div></button>`; }).join('');

  // project cards (home shows the first six, each opens its photos)
  const cover = c => c.mosaic ? `<div class="mosaic">${c.photos.slice(0, 4).map(p => `<img src="${I(p)}" alt="" loading="lazy">`).join('')}</div>` : `<img src="${I(c.photos[0])}" alt="${c.title}" loading="lazy">`;
  const cases = $('#cases');
  if (cases) {
    const n = +(cases.dataset.limit || CASES.length);
    cases.innerHTML = CASES.slice(0, n).map((c, i) => `<button type="button" class="case" data-f="${c.f}" data-case="${i}" data-a aria-label="Open ${c.title} photos"><div class="im">${cover(c)}<span class="count">${photoCount(c.photos.length)}</span></div><div class="meta"><span>${c.label}</span><span>${c.place}</span></div><h3>${c.title}</h3><p>${c.line}</p></button>`).join('');
  }

  const nums = $('#nums');
  if (nums) nums.innerHTML = D.NUMS.map(([n, s, t]) => `<div data-a><b data-n="${n}" data-s="${s}">${(+n).toLocaleString('en-IN')}${s}</b><span>${t}</span></div>`).join('');
  const steps = $('#steps');
  if (steps) steps.innerHTML = D.STEPS.map(([t, d], i) => `<div class="step" data-a><span class="n">${pad(i + 1)}</span><h3>${t}</h3><p>${d}</p></div>`).join('');
  const why = $('#why');
  if (why) why.innerHTML = D.WHY.map(([t, d]) => `<div data-a><b>${t}</b><span>${d}</span></div>`).join('');
  const sectors = $('#sectors');
  if (sectors) sectors.innerHTML = D.SECTORS.map(s => `<span>${s}</span>`).join('');

  // gallery: photos interleaved across projects so neighbours differ
  const gal = $('#gal');
  if (gal) {
    const pool = CASES.map((c, i) => c.photos.map((p, j) => [i, j, p]));
    const items = [];
    for (let r = 0; pool.some(l => l[r]); r++) pool.forEach(l => l[r] && items.push(l[r]));
    gal.innerHTML = items.map(([i, j, p]) => `<button type="button" data-case="${i}" data-j="${j}" aria-label="View ${CASES[i].title} photo ${j + 1}"><img src="${I(p)}" alt="${CASES[i].title}" loading="lazy"><span>${CASES[i].title}</span></button>`).join('');
    const more = $('#galMore');
    const label = () => more.textContent = gal.classList.contains('short') ? `View all ${items.length} photos` : 'Show fewer photos';
    label();
    more.addEventListener('click', () => { const s = gal.classList.toggle('short'); label(); if (ST) ST.refresh(); if (s) goTo('#gallery'); });
  }

  const films = $('#filmGrid');
  if (films) films.innerHTML = D.FILMS.map(([t, c], i) => `<div class="film" data-a><div class="im"><img src="${I('film-' + (i + 1))}" alt="${t}" width="524" height="218" loading="lazy"></div><b>${t}</b><span>${c}</span></div>`).join('');
  const offices = $('#offices');
  if (offices) offices.innerHTML = D.OFFICES.map(([c, k, a]) => `<div class="office" data-a><span class="pin">${svg('pin')}</span><b>${c}${k ? `<small>${k}</small>` : ''}</b><span>${a}</span></div>`).join('');

  /* ================= WORK PAGE ================= */
  const projects = $('#projects');
  if (projects) {
    $('#statProjects').textContent = CASES.length;
    $('#statPhotos').textContent = totalPhotos;
    $('#statFilms').textContent = D.FILMS.length;

    // slow photo reel under the page title (two copies for a seamless loop)
    const reelPics = CASES.map(c => c.photos[0]).concat(CASES.map(c => c.photos[1]).filter(Boolean));
    const reel = reelPics.map(p => `<img src="${I(p)}" alt="" loading="lazy">`).join('');
    $('#reel').innerHTML = reel + reel;

    projects.innerHTML = CASES.map((c, i) => {
      const shown = c.photos.slice(0, c.photos.length > 1 ? 6 : 1);
      const extra = c.photos.length - shown.length;
      return `<article class="project${i % 2 ? ' alt' : ''}" id="${c.slug}" data-f="${c.f}">
        <div class="info" data-a>
          <div class="idx"><b>${pad(i + 1)}</b><span>${c.label} · ${c.place}</span></div>
          <h2>${c.title}</h2>
          <p class="desc">${c.desc}</p>
          <div class="facts">${c.facts.map(f => `<span>${f}</span>`).join('')}</div>
          <button type="button" class="btn btn-dark" data-case="${i}">${c.photos.length > 1 ? `View all ${c.photos.length} photos` : 'View photo'} ${arrow}</button>
        </div>
        <div class="pgrid${c.photos.length === 1 ? ' single' : ''}" data-a>${shown.map((p, j) => `<button type="button" data-case="${i}" data-j="${j}" aria-label="View ${c.title} photo ${j + 1} of ${c.photos.length}"><img src="${I(p)}" alt="${c.title}" loading="lazy">${j === shown.length - 1 && extra > 0 ? `<span class="plus">+${extra}</span>` : ''}</button>`).join('')}</div>
      </article>`;
    }).join('');
  }

  // filters (used on both pages)
  const filters = $('#filters');
  if (filters) {
    const items = () => $$('[data-f]', $('#cases') || projects);
    filters.innerHTML = D.FILTERS.map(([k, t], i) => `<button type="button" class="${i ? '' : 'on'}" aria-pressed="${!i}" data-k="${k}">${t}</button>`).join('');
    const shown = $('#shown');
    const setShown = () => { if (shown) { const n = items().filter(el => !el.classList.contains('hide')).length; shown.textContent = `Showing ${n} of ${CASES.length}`; } };
    setShown();
    filters.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      $$('button', filters).forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b); });
      items().forEach(el => {
        const show = b.dataset.k === 'all' || el.dataset.f === b.dataset.k;
        el.classList.toggle('hide', !show);
        if (show && G && !RM) G.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .5, ease: 'power2.out', clearProps: 'transform' });
        if (show) $$('[data-a]', el).forEach(x => x.style.opacity = 1);
      });
      setShown();
      if (ST) ST.refresh();
      if (projects) goTo('#projects', true);
    });
  }

  /* ================= SHARED ================= */
  const yr = $('#yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // enquiry form
  const form = $('#form');
  if (form) {
    const type = $('#f-type');
    type.innerHTML = D.TYPES.map(t => `<option>${t}</option>`).join('');
    document.addEventListener('click', e => {
      const a = e.target.closest('[data-type]'); if (!a) return;
      const words = a.dataset.type.toLowerCase().split(/[^a-z]+/).filter(w => w.length > 3);
      const best = D.TYPES.find(t => words.some(w => t.toLowerCase().includes(w)));
      if (best) type.value = best;
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      const d = new FormData(form);
      let first = null;
      ['name', 'contact'].forEach(f => { const el = $('#f-' + f), bad = !String(d.get(f) || '').trim(); el.parentElement.classList.toggle('err', bad); if (bad && !first) first = el; });
      if (first) { first.focus(); return; }
      const body = [`Name: ${d.get('name')}`, `Company: ${d.get('company') || '—'}`, `Contact: ${d.get('contact')}`, `Event type: ${d.get('type')}`, `City: ${d.get('city') || '—'}`, `Guests: ${d.get('guests') || '—'}`, '', 'About the event:', d.get('brief') || '—'].join('\n');
      location.href = `mailto:ruchin@felicity-intg.com?subject=${encodeURIComponent('Event enquiry — ' + d.get('type'))}&body=${encodeURIComponent(body)}`;
      form.classList.add('sent');
    });
    form.addEventListener('input', e => e.target.parentElement.classList.remove('err'));
  }

  // smooth scrolling and same-page links
  let lenis = null;
  if (window.Lenis && G && !RM) {
    lenis = new Lenis({ lerp: .12 });
    if (ST) lenis.on('scroll', ST.update);
    G.ticker.add(t => lenis.raf(t * 1000));
    G.ticker.lagSmoothing(0);
  }
  const hdr = $('#hdr');
  const offsetFor = sel => {
    const fbar = $('.fbar');
    return sel === '#top' ? -hdr.offsetHeight : -hdr.offsetHeight - (fbar && sel !== '#top' ? fbar.offsetHeight : 0) + 1;
  };
  function goTo(sel, quick) {
    const t = document.querySelector(sel); if (!t) return;
    const off = offsetFor(sel);
    if (lenis) lenis.scrollTo(t, { offset: off, duration: quick ? .8 : 1.2 });
    else scrollTo({ top: Math.max(0, t.getBoundingClientRect().top + scrollY + off), behavior: RM ? 'auto' : 'smooth' });
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    const h = a.getAttribute('href'); if (h.length < 2 || !document.querySelector(h)) return;
    e.preventDefault(); setMenu(false); goTo(h);
    history.replaceState(null, '', h === '#top' ? location.pathname : h);
  });
  // arriving with a #hash from another page: land below the fixed header
  if (location.hash && document.querySelector(location.hash)) {
    addEventListener('load', () => setTimeout(() => {
      const t = document.querySelector(location.hash);
      const top = t.getBoundingClientRect().top + scrollY + offsetFor(location.hash);
      if (lenis) lenis.scrollTo(top, { immediate: true }); else scrollTo(0, top);
    }, 60));
  }
  const lockScroll = on => { document.documentElement.style.overflow = on ? 'hidden' : ''; if (lenis) on ? lenis.stop() : lenis.start(); };

  // menu
  const burger = $('#burger'), mnav = $('#mnav');
  let menuOpen = false;
  function setMenu(open) {
    if (menuOpen === open) return;
    menuOpen = open;
    mnav.classList.toggle('open', open); burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open); burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    lockScroll(open);
    if (open && G && !RM) G.fromTo($$('li, .info', mnav), { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: .45, stagger: .04, ease: 'power2.out' });
  }
  burger.addEventListener('click', () => setMenu(!menuOpen));
  addEventListener('resize', () => { if (innerWidth > 1080) setMenu(false); });

  // photo viewer
  const lb = $('#lb'), lbI = $('#lbI'), lbTh = $('#lbTh'), lbB = $('#lbB');
  let cur = null, ci = 0, back = null;
  const show = i => {
    const list = cur.photos; ci = (i + list.length) % list.length;
    lbI.src = I(list[ci]); lbB.style.backgroundImage = `url(${I(list[ci])})`;
    lbI.alt = `${cur.title} — photo ${ci + 1} of ${list.length}`;
    $('#lbC').textContent = `${ci + 1} / ${list.length}`;
    $$('button', lbTh).forEach((b, j) => b.classList.toggle('on', j === ci));
    $('#lbP').hidden = $('#lbN').hidden = list.length < 2;
    if (G && !RM) G.fromTo(lbI, { opacity: 0 }, { opacity: 1, duration: .35 });
  };
  const openLb = (i, j = 0) => {
    cur = CASES[i]; back = document.activeElement;
    $('#lbT').textContent = cur.title; $('#lbD').textContent = `${cur.line} · ${cur.place}`;
    lbTh.innerHTML = cur.photos.map((p, k) => `<button type="button" data-k="${k}" aria-label="Photo ${k + 1}"><img src="${I(p)}" alt=""></button>`).join('');
    show(j); lb.classList.add('open'); lockScroll(true); $('#lbX').focus();
  };
  const closeLb = () => { lb.classList.remove('open'); lockScroll(false); if (back) back.focus({ preventScroll: true }); };
  document.addEventListener('click', e => { const b = e.target.closest('[data-case]'); if (b && !lb.contains(b)) openLb(+b.dataset.case, +(b.dataset.j || 0)); });
  $('#lbX').addEventListener('click', closeLb);
  $('#lbP').addEventListener('click', () => show(ci - 1));
  $('#lbN').addEventListener('click', () => show(ci + 1));
  lbTh.addEventListener('click', e => { const b = e.target.closest('button'); if (b) show(+b.dataset.k); });
  lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('st')) closeLb(); });
  let tx = null;
  lb.addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
  lb.addEventListener('touchend', e => { if (tx == null) return; const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) show(ci + (dx < 0 ? 1 : -1)); tx = null; });
  addEventListener('keydown', e => {
    if (lb.classList.contains('open')) {
      if (e.key === 'Escape') closeLb(); else if (e.key === 'ArrowLeft') show(ci - 1); else if (e.key === 'ArrowRight') show(ci + 1);
      else if (e.key === 'Tab') { const f = $$('button:not([hidden])', lb); const a = f.indexOf(document.activeElement); if (e.shiftKey && a <= 0) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && a === f.length - 1) { e.preventDefault(); f[0].focus(); } }
    } else if (e.key === 'Escape' && menuOpen) { setMenu(false); burger.focus(); }
  });

  // hero slideshow (home)
  if (slides) {
    const imgs = $$('img', slides), bars = $$('button', $('#bars')), cap = $('#cap');
    let si = -1, timer = null;
    const DUR = 6;
    const go = i => {
      si = (i + D.SLIDES.length) % D.SLIDES.length;
      imgs.forEach((im, j) => im.classList.toggle('on', j === si));
      cap.textContent = D.SLIDES[si][1];
      bars.forEach((b, j) => { b.classList.toggle('done', j < si); const bar = b.firstElementChild; if (G) G.killTweensOf(bar); bar.style.transform = j < si ? 'scaleX(1)' : 'scaleX(0)'; });
      if (G && !RM) {
        G.fromTo(imgs[si], { scale: 1.08 }, { scale: 1, duration: DUR + 1.2, ease: 'none' });
        G.fromTo(bars[si].firstElementChild, { scaleX: 0 }, { scaleX: 1, duration: DUR, ease: 'none' });
      }
      clearTimeout(timer);
      if (!RM) timer = setTimeout(() => go(si + 1), DUR * 1000);
    };
    bars.forEach((b, j) => b.addEventListener('click', () => go(j)));
    go(0);
  }

  // header shadow, active link, back to top
  const totop = $('#totop');
  // a link can follow a section on this page via its #href, or via data-spy when it points to another page
  const links = $$('#nav a').filter(a => a.dataset.spy || a.getAttribute('href').startsWith('#'));
  const secs = links.map(a => $(a.dataset.spy || a.getAttribute('href')));
  const onScroll = () => {
    hdr.classList.toggle('scrolled', scrollY > 10);
    totop.classList.toggle('show', scrollY > innerHeight);
    if (links.length) {
      let on = -1; secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * .35) on = i; });
      links.forEach((a, i) => a.classList.toggle('on', i === on));
    }
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  totop.addEventListener('click', () => goTo('#top'));

  /* ================= ANIMATION (GSAP) ================= */
  if (!G || !ST || RM) return; // without GSAP everything is simply shown
  G.registerPlugin(ST);

  const intro = G.timeline({ defaults: { ease: 'power3.out' } }).from(hdr, { yPercent: -100, duration: .8 });
  if ($('h1 .line')) intro.from('h1 .line > span', { yPercent: 110, duration: 1, stagger: .12 }, '-=.4');
  if ($('[data-hero]')) intro.from('[data-hero]', { y: 24, opacity: 0, duration: .8, stagger: .1 }, '-=.7');
  if ($('#slideNav')) intro.from('#slideNav', { opacity: 0, duration: .6 }, '-=.4');

  G.set('[data-a]', { opacity: 0 });
  ST.batch('[data-a]', {
    start: 'top 90%', once: true,
    onEnter: els => G.fromTo(els, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: .8, stagger: .08, ease: 'power3.out', overwrite: true, clearProps: 'transform' }),
  });

  $$('[data-img]').forEach(el => G.fromTo(el, { clipPath: 'inset(12% 0 12% 0 round 12px)', opacity: 0 }, { clipPath: 'inset(0% 0 0% 0 round 12px)', opacity: 1, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
  if ($('.collage .b')) G.to('.collage .b', { yPercent: -10, ease: 'none', scrollTrigger: { trigger: '.collage', start: 'top bottom', end: 'bottom top', scrub: true } });

  $$('[data-n]').forEach(b => {
    const n = +b.dataset.n, s = b.dataset.s || '', o = { v: 0 };
    ST.create({ trigger: b, start: 'top 92%', once: true, onEnter: () => G.to(o, { v: n, duration: 1.6, ease: 'power2.out', onUpdate: () => { b.textContent = Math.round(o.v).toLocaleString('en-IN') + s; } }) });
  });

  if ($('.hero')) G.to('.hero .wrap', { yPercent: -12, opacity: .2, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

  // work page: grid photos tilt in one after another
  $$('.pgrid').forEach(g => G.from($$('button', g), { scale: .92, opacity: 0, duration: .7, stagger: .06, ease: 'power3.out', scrollTrigger: { trigger: g, start: 'top 85%', once: true } }));

  ST.refresh();
  addEventListener('load', () => ST.refresh());
})();
