/* ============================================================
   UMANAH SYSTEMS GROUP — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  // ── NAV SCROLL BEHAVIOR ──────────────────────────────────
  const navbar = document.getElementById('navbar');

  function updateNav() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ── HAMBURGER MENU ───────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    const isOpen = mobileMenu.classList.contains('open');
    spans[0].style.transform = isOpen ? 'translateY(7px) rotate(45deg)' : '';
    spans[1].style.opacity   = isOpen ? '0' : '';
    spans[2].style.transform = isOpen ? 'translateY(-7px) rotate(-45deg)' : '';
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      const spans = hamburger.querySelectorAll('span');
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });

  // ── REVEAL ON SCROLL ────────────────────────────────────
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          // Stagger sibling reveals
          const siblings = Array.from(
            entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')
          );
          const delay = siblings.indexOf(entry.target) * 80;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, Math.max(delay, 0));
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach(el => revealObserver.observe(el));

  // ── SMOOTH SCROLL ────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const navHeight = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ── ACTIVE NAV LINK ──────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach(a => {
            a.style.color = '';
            a.style.background = '';
            if (a.getAttribute('href') === `#${id}`) {
              a.style.color = '#f0f2f5';
            }
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(s => sectionObserver.observe(s));

  // ── CONTACT FORM ─────────────────────────────────────────
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending…';
      btn.disabled = true;

      // Simulate send delay
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        form.reset();
        formSuccess.classList.add('show');
        setTimeout(() => formSuccess.classList.remove('show'), 5000);
      }, 1200);
    });
  }

  // ── HERO PARALLAX (subtle) ───────────────────────────────
  const heroGlow1 = document.querySelector('.hero-glow-1');
  const heroGlow2 = document.querySelector('.hero-glow-2');

  if (heroGlow1 && heroGlow2) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroGlow1.style.transform = `translateY(${y * 0.15}px)`;
      heroGlow2.style.transform = `translateY(${-y * 0.1}px)`;
    }, { passive: true });
  }

  // ── ORBS / ABOUT CARD HOVER FLOAT ───────────────────────
  const accentCards = document.querySelectorAll('.about-accent-card');
  accentCards.forEach((card, i) => {
    card.style.animation = `float ${3 + i * 0.5}s ease-in-out ${i * 0.4}s infinite alternate`;
  });

  // Inject float keyframe if not already present
  if (!document.getElementById('floatKeyframes')) {
    const style = document.createElement('style');
    style.id = 'floatKeyframes';
    style.textContent = `
      @keyframes float {
        from { transform: translateY(-50%) translateX(0); }
        to   { transform: translateY(-50%) translateX(0) translateY(-8px); }
      }
      .ac-1 { animation-name: floatV !important; }
      .ac-3 { animation-name: floatV !important; }
      .ac-2 { animation-name: floatH !important; }
      .ac-4 { animation-name: floatH !important; }
      @keyframes floatV {
        from { transform: translateX(-50%) translateY(0); }
        to   { transform: translateX(-50%) translateY(-8px); }
      }
      @keyframes floatH {
        from { transform: translateY(-50%) translateX(0); }
        to   { transform: translateY(-50%) translateX(-6px); }
      }
    `;
    document.head.appendChild(style);
  }

})();
