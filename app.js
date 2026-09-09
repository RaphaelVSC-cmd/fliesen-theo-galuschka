/**
 * Fliesen Theo Galuschka – Master Application Engine
 * Version: 6.1 (Resilient Execution Engine Standard)
 * Motion Budget: 7 Active Primitives + Bespoke Signature Inspector
 */

'use strict';

/* === LENIS SMOOTH SCROLL (Touchpad-safe & GSAP Synchronized) === */
let lenis;
if (typeof Lenis !== 'undefined') {
  lenis = new Lenis({
    duration: 0.9,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
    smoothTouch: false, /* WICHTIG: natives Touch auf Smartphones */
    autoResize: true,
  });

  if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  /* Lenis Scroll fuer interne Anker-Links */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id && id !== '#') {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: -80, duration: 1.0 });
        }
      }
    });
  });
}

/* === TAGESZEIT-PERSONALISIERUNG (NEU v6.1 - Immer aktiv) === */
function initTimeGreeting() {
  const el = document.querySelector('[data-time-greeting]');
  if (!el) return;
  const h = new Date().getHours();
  let greeting;
  if (h >= 6 && h < 12) {
    greeting = 'Guten Morgen';
  } else if (h >= 12 && h < 18) {
    greeting = 'Guten Tag';
  } else {
    greeting = 'Guten Abend';
  }
  const isOffHours = h < 7 || h >= 19;
  el.textContent = greeting + (isOffHours ? ' — Schnellanfrage möglich' : '');
  if (isOffHours) {
    el.style.color = 'var(--sc-accent)';
  }
}

/* === DSGVO & TDDDG CONSENT MANAGER (Two-Click Maps) === */
function initConsent() {
  const KEY = 'consent_v1';
  const banner = document.getElementById('consentBanner');
  const placeholder = document.getElementById('mapsPlaceholder');
  const iframe = document.getElementById('googleMapsIframe');
  const stored = localStorage.getItem(KEY);

  function applyConsent(accepted) {
    if (accepted) {
      if (iframe && iframe.dataset.src) {
        iframe.src = iframe.dataset.src;
        delete iframe.dataset.src;
      }
      if (placeholder) {
        placeholder.classList.add('is-hidden');
      }
    }
    if (banner) {
      banner.hidden = true;
    }
  }

  if (stored === 'accepted') {
    applyConsent(true);
  } else if (stored === 'rejected') {
    applyConsent(false);
  } else if (banner) {
    banner.hidden = false;
  }

  document.getElementById('consentAccept')?.addEventListener('click', () => {
    localStorage.setItem(KEY, 'accepted');
    applyConsent(true);
  });

  document.getElementById('consentReject')?.addEventListener('click', () => {
    localStorage.setItem(KEY, 'rejected');
    applyConsent(false);
  });

  /* Direkter Klick auf "Karte aktivieren" im Placeholder */
  document.getElementById('btnLoadMapDirect')?.addEventListener('click', () => {
    localStorage.setItem(KEY, 'accepted');
    applyConsent(true);
  });

  /* Re-Open Link im Footer */
  document.getElementById('cookieSettingsLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem(KEY);
    if (banner) {
      banner.hidden = false;
    }
  });
}

/* === MOBILE NAVIGATION (Deadlock-Safe mit sicherem Scroll-Target) === */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('mobileCloseBtn');
  if (!hamburger || !menu) return;

  const open = () => {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    menu.removeAttribute('hidden');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (typeof lenis !== 'undefined' && lenis) lenis.stop();
  };

  const close = () => {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    menu.setAttribute('hidden', '');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (typeof lenis !== 'undefined' && lenis) lenis.start();
  };

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    isOpen ? close() : open();
  });

  closeBtn?.addEventListener('click', close);

  /* Menülink-Klick schließt Menü UND scrollt sauber */
  menu.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      close();
      if (targetId && targetId !== '#') {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          setTimeout(() => {
            if (typeof lenis !== 'undefined' && lenis && lenis.scrollTo) {
              lenis.scrollTo(target, { offset: -70 });
            } else {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 80);
        }
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) close();
  });
}

/* === MODAL MANAGEMENT (Impressum & Datenschutz mit Focus-Trap) === */
function initModals() {
  document.querySelectorAll('[data-modal-open]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal-open');
      const modal = document.getElementById(modalId);
      if (!modal) return;
      modal.removeAttribute('hidden');
      modal.setAttribute('aria-hidden', 'false');
      if (typeof lenis !== 'undefined' && lenis) lenis.stop();
      document.body.style.overflow = 'hidden';
      const focusable = modal.querySelector('button, [href], input');
      if (focusable) focusable.focus();
    });
  });

  const closeAll = () => {
    document.querySelectorAll('.modal:not([hidden])').forEach(modal => {
      modal.setAttribute('hidden', '');
      modal.setAttribute('aria-hidden', 'true');
    });
    if (typeof lenis !== 'undefined' && lenis) lenis.start();
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-modal-close]').forEach(el => {
    el.addEventListener('click', closeAll);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });
}

/* === HEADER SCROLL BEHAVIOR === */
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 25);
  }, { passive: true });
}

/* === FORMSPREE KONTAKTFORMULAR MIT RESILIENTEM FALLBACK === */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const fallback = document.getElementById('formFallback');
  const status = document.getElementById('formStatus');
  const submitBtn = document.getElementById('btnSubmitForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Wird übermittelt...';
    }

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        if (status) {
          status.textContent = 'Vielen Dank! Ihre Anfrage ist eingegangen. Herr Galuschka meldet sich innerhalb von 24 Stunden.';
          status.style.color = '#1b4b3e';
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Anfrage erfolgreich versendet ✓';
        }
      } else if (res.status === 429) {
        /* Formspree Free-Tier Limit erreicht -> Fallback sofort einblenden */
        if (fallback) fallback.style.display = 'block';
        form.style.display = 'none';
      } else {
        if (status) {
          status.textContent = 'Hinweis: Bitte kontaktieren Sie uns direkt unter 0841 57321.';
          status.style.color = 'var(--sc-accent)';
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Jetzt Anfrage absenden';
        }
      }
    } catch {
      /* Netzwerkfehler oder Baustellennetz */
      if (fallback) fallback.style.display = 'block';
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Jetzt Anfrage absenden';
      }
    }
  });
}

/* === MOTION-PRIMITIV 1: HERO KINETIC TYPOGRAPHY === */
function initKineticTypography() {
  if (typeof SplitType === 'undefined' || typeof gsap === 'undefined') return;
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const split = new SplitType(heroTitle, { types: 'words,chars' });
    gsap.from(split.chars, {
      opacity: 0,
      y: 60,
      rotateX: -25,
      stagger: 0.02,
      duration: 0.9,
      ease: 'power3.out',
      delay: 0.15,
    });
  }

  document.querySelectorAll('.section-title').forEach(el => {
    const split = new SplitType(el, { types: 'lines' });
    gsap.from(split.lines, {
      opacity: 0,
      y: 45,
      duration: 0.85,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none'
      }
    });
  });
}

/* === MOTION-PRIMITIV 2: SCROLL REVEAL (Fade-Up & Blur) === */
function initScrollAnimations() {
  if (typeof gsap === 'undefined') return;
  gsap.utils.toArray('[data-animate="fade-up"]').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 40, filter: 'blur(4px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
}

/* === MOTION-PRIMITIV 3: NATIVE CSS-3D PERSPECTIVE TILT (0 KB Zusatz-Payload) === */
function init3DTilt() {
  const isTouch = window.matchMedia('(hover: none)').matches;
  document.querySelectorAll('.card-3d').forEach(card => {
    if (!isTouch) {
      /* Feinfühliger Maus-Tilt auf Desktop */
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = -(y / (rect.height / 2)) * 6;
        const rotateY = (x / (rect.width / 2)) * 6;
        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
      });
    } else if (typeof gsap !== 'undefined') {
      /* Sanfter Scroll-Tilt mobil */
      gsap.fromTo(card,
        { transform: 'perspective(1000px) rotateX(4deg) translateY(15px)' },
        {
          transform: 'perspective(1000px) rotateX(0deg) translateY(0px)',
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 92%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  });
}

/* === MOTION-PRIMITIV 4: DYNAMIC STAT & RATING COUNTERS === */
function initCounters() {
  if (typeof gsap === 'undefined') return;
  document.querySelectorAll('.stat-counter').forEach(el => {
    const target = parseFloat(el.dataset.target || '0');
    const isDecimal = String(el.dataset.target || '').includes('.');

    gsap.fromTo({ val: 0 }, { val: target }, {
      duration: 1.8,
      ease: 'power2.out',
      onUpdate: function() {
        const current = this.targets()[0].val;
        el.textContent = isDecimal ? current.toFixed(1).replace('.', ',') : Math.round(current).toString();
      },
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });
  });
}

/* === MOTION-PRIMITIV 5: EDITORIAL TEXT SCRUBBING (Apple-Style Dim-to-Reveal) === */
function initTextScrub() {
  if (typeof gsap === 'undefined') return;
  document.querySelectorAll('[data-text-scrub]').forEach(container => {
    const rawText = container.textContent.trim();
    container.innerHTML = rawText.split(' ').map(word => `<span class="text-scrub-word">${word}</span> `).join('');
    const words = container.querySelectorAll('.text-scrub-word');

    gsap.to(words, {
      opacity: 1.0,
      stagger: 0.04,
      scrollTrigger: {
        trigger: container,
        start: 'top 78%',
        end: 'bottom 45%',
        scrub: 0.6
      }
    });
  });
}

/* === MOTION-PRIMITIV 6: INTERACTIVE BEFORE/AFTER SLIDER === */
function initBeforeAfter() {
  document.querySelectorAll('[data-before-after]').forEach(container => {
    const handle = container.querySelector('.before-after-handle');
    const afterWrap = container.querySelector('.after-image-wrap');
    if (!handle || !afterWrap) return;

    let isDragging = false;

    const setPosition = (clientX) => {
      const rect = container.getBoundingClientRect();
      const pos = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const pct = (pos / rect.width) * 100;
      handle.style.left = `${pct}%`;
      handle.setAttribute('aria-valuenow', Math.round(pct));
      afterWrap.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    };

    handle.addEventListener('mousedown', () => isDragging = true);
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('mousemove', (e) => {
      if (isDragging) setPosition(e.clientX);
    });

    /* Touch Support */
    container.addEventListener('touchstart', (e) => {
      if (e.touches.length) isDragging = true;
    }, { passive: true });
    window.addEventListener('touchend', () => isDragging = false);
    window.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches.length) setPosition(e.touches[0].clientX);
    }, { passive: true });

    /* Keyboard Support (Arrow Keys) */
    handle.addEventListener('keydown', (e) => {
      let currentVal = parseFloat(handle.getAttribute('aria-valuenow') || '50');
      if (e.key === 'ArrowLeft') {
        currentVal = Math.max(0, currentVal - 5);
        handle.style.left = `${currentVal}%`;
        handle.setAttribute('aria-valuenow', currentVal);
        afterWrap.style.clipPath = `inset(0 ${100 - currentVal}% 0 0)`;
      } else if (e.key === 'ArrowRight') {
        currentVal = Math.min(100, currentVal + 5);
        handle.style.left = `${currentVal}%`;
        handle.setAttribute('aria-valuenow', currentVal);
        afterWrap.style.clipPath = `inset(0 ${100 - currentVal}% 0 0)`;
      }
    });
  });
}

/* === MOTION-PRIMITIV 7: ROTATING BADGE SCROLL SYNC === */
function initRotatingBadge() {
  if (typeof gsap === 'undefined') return;
  const seal = document.querySelector('[data-rotating-seal]');
  if (seal) {
    gsap.to(seal, {
      rotation: 360,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2.5
      }
    });
  }
}

/* === MOTION-PRIMITIV 8: NAVBAR HOVER MICRO-INTERACTIONS === */
function initNavHover() {
  if (window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      if (typeof gsap !== 'undefined') gsap.to(link, { y: -1, duration: 0.2, ease: 'power1.out' });
    });
    link.addEventListener('mouseleave', () => {
      if (typeof gsap !== 'undefined') gsap.to(link, { y: 0, duration: 0.25, ease: 'power1.out' });
    });
  });
}

/* === SIGNATURE FEATURE: SANIERUNGS-INSPEKTOR BERECHNUNG & WHATSAPP GENERATOR === */
function initSignatureFeature() {
  const slider = document.getElementById('areaSlider');
  const display = document.getElementById('areaValueDisplay');
  const radios = document.querySelectorAll('input[name="projectType"]');
  const checkStaub = document.getElementById('checkStaub');
  const checkUntergrund = document.getElementById('checkUntergrund');
  const resDuration = document.getElementById('resDuration');
  const resTileType = document.getElementById('resTileType');
  const resPriceRange = document.getElementById('resPriceRange');
  const btnWhatsapp = document.getElementById('btnWhatsappCalc');

  if (!slider || !display) return;

  const projectConfig = {
    bad: {
      name: 'Komplettbad & Dusche',
      baseDaysMin: 4,
      baseDaysPerM2: 0.15,
      tile: 'Feinsteinzeug R10B kalibriert (rutschfest Nassbereich)',
      pricePerM2Min: 95,
      pricePerM2Max: 145,
      baseFixed: 800
    },
    boden: {
      name: 'Wohn- / Großformatboden',
      baseDaysMin: 2,
      baseDaysPerM2: 0.08,
      tile: 'Großformat Feinsteinzeug 60x120 oder 120x120 cm',
      pricePerM2Min: 65,
      pricePerM2Max: 95,
      baseFixed: 400
    },
    terrasse: {
      name: 'Terrasse & Außenbereich',
      baseDaysMin: 3,
      baseDaysPerM2: 0.10,
      tile: '2cm Outdoor-Keramikplatten frostfest R11',
      pricePerM2Min: 85,
      pricePerM2Max: 125,
      baseFixed: 600
    }
  };

  function updateCalculation() {
    const area = parseInt(slider.value, 10);
    display.textContent = area;

    let selectedType = 'bad';
    radios.forEach(r => {
      if (r.checked) selectedType = r.value;
      const label = r.closest('.project-radio-label');
      if (label) label.classList.toggle('is-active', r.checked);
    });

    const cfg = projectConfig[selectedType] || projectConfig.bad;
    
    /* Dauer ermitteln */
    const daysMin = Math.max(cfg.baseDaysMin, Math.round(cfg.baseDaysMin + (area * cfg.baseDaysPerM2)));
    const daysMax = daysMin + 2;
    if (resDuration) resDuration.textContent = `${daysMin} bis ${daysMax} Werktage`;

    /* Fliesenempfehlung */
    if (resTileType) resTileType.textContent = cfg.tile;

    /* Richtwert kalkulieren */
    let minPrice = cfg.baseFixed + (area * cfg.pricePerM2Min);
    let maxPrice = cfg.baseFixed + (area * cfg.pricePerM2Max);

    if (checkStaub && checkStaub.checked) {
      minPrice += 150;
      maxPrice += 220;
    }
    if (checkUntergrund && checkUntergrund.checked) {
      minPrice += (area * 18);
      maxPrice += (area * 26);
    }

    /* Runden auf Hunderter */
    const minFormatted = (Math.round(minPrice / 50) * 50).toLocaleString('de-DE');
    const maxFormatted = (Math.round(maxPrice / 50) * 50).toLocaleString('de-DE');
    if (resPriceRange) resPriceRange.textContent = `${minFormatted} € – ${maxFormatted} €`;

    /* WhatsApp Link zusammenstellen */
    if (btnWhatsapp) {
      const staubText = checkStaub?.checked ? 'inkl. Staubschutz' : '';
      const abdichtText = checkUntergrund?.checked ? 'inkl. Untergrundprüfung/Abdichtung' : '';
      const extras = [staubText, abdichtText].filter(Boolean).join(', ');
      const msg = `Hallo Herr Galuschka, ich interessiere mich für ein Sanierungsprojekt in Ingolstadt:
• Bereich: ${cfg.name}
• Fläche: ca. ${area} m²
• Anforderungen: ${extras || 'Standard'}
• Richtzeit: ${daysMin}-${daysMax} Werktage

Können wir einen unverbindlichen Vor-Ort-Besichtigungstermin vereinbaren?`;

      btnWhatsapp.href = `https://wa.me/4915901772970?text=${encodeURIComponent(msg)}`;
    }
  }

  slider.addEventListener('input', updateCalculation);
  radios.forEach(r => r.addEventListener('change', updateCalculation));
  checkStaub?.addEventListener('change', updateCalculation);
  checkUntergrund?.addEventListener('change', updateCalculation);

  updateCalculation();
}

/* === INITIALIZATION (Mit Reduced-Motion Guard) === */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
  /* Immer aktive Funktionen */
  initTimeGreeting();
  initConsent();
  initMobileNav();
  initModals();
  initHeader();
  initContactForm();
  initSignatureFeature();
  initBeforeAfter();

  /* Motion Primitives (nur wenn Bewegung nicht reduziert) */
  if (!prefersReducedMotion) {
    initKineticTypography();
    initScrollAnimations();
    init3DTilt();
    initCounters();
    initTextScrub();
    initRotatingBadge();
    initNavHover();
  }
});
