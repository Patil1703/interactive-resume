/**
 * Portfolio v2.0 — script.js
 * Vanilla JS | No dependencies
 */

'use strict';

/* =========================================
   1. LOADER
   ========================================= */
const loader = document.getElementById('loader');

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
    // Kick off entrance animations
    triggerHeroReveal();
  }, 1400);
});

document.body.style.overflow = 'hidden'; // prevent scroll during load

/* =========================================
   2. THEME TOGGLE
   ========================================= */
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Respect OS preference on first visit
const savedTheme = localStorage.getItem('portfolio-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
html.setAttribute('data-theme', savedTheme || (prefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
});

/* =========================================
   3. NAVBAR — scroll behaviour + active link
   ========================================= */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
const sections = document.querySelectorAll('main section[id]');

let lastScroll = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Add scrolled class for backdrop
  navbar.classList.toggle('scrolled', scrollY > 50);

  // Show/hide back-to-top button
  const btt = document.getElementById('back-to-top');
  btt.classList.toggle('visible', scrollY > 400);

  // Active nav link highlighting
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });

  lastScroll = scrollY;
}, { passive: true });

/* =========================================
   4. MOBILE MENU
   ========================================= */
const hamburger = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('nav-links-mobile');
const mobileLinks = mobileMenu.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* =========================================
   5. SMOOTH SCROLL
   ========================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* =========================================
   6. BACK TO TOP
   ========================================= */
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =========================================
   7. TYPING ANIMATION (Hero)
   ========================================= */
const typedEl = document.getElementById('typed-text');
const phrases = [
  'Security Engineer Intern',
  'Ethical Hacking Enthusiast',
  'Full-Stack Developer',
  'OWASP & GRC Practitioner',
  'Cybersecurity Blogger',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

function type() {
  const current = phrases[phraseIndex];
  const speed = isDeleting ? 50 : 90;

  typedEl.textContent = current.substring(0, charIndex);

  if (!isDeleting && charIndex === current.length) {
    // Pause at end of phrase
    typingTimeout = setTimeout(() => {
      isDeleting = true;
      type();
    }, 2000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  charIndex += isDeleting ? -1 : 1;
  typingTimeout = setTimeout(type, speed);
}

// Start typing after loader
function startTyping() {
  clearTimeout(typingTimeout);
  type();
}

/* =========================================
   8. SCROLL REVEAL
   ========================================= */
const revealElements = document.querySelectorAll('.reveal-up');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

/* =========================================
   9. HERO REVEAL (on load)
   ========================================= */
function triggerHeroReveal() {
  const heroEls = document.querySelectorAll('#hero .reveal-up');
  heroEls.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 80);
  });
  setTimeout(startTyping, 400);
}

/* =========================================
   10. SKILL BARS ANIMATION
   ========================================= */
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const width = fill.getAttribute('data-width');
      fill.style.width = `${width}%`;
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));

/* =========================================
   11. COUNT-UP ANIMATION (About Stats)
   ========================================= */
const counters = document.querySelectorAll('.stat-number');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 1500;
    const start = performance.now();

    function update(time) {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    }

    requestAnimationFrame(update);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));

/* =========================================
   12. CONTACT FORM VALIDATION
   ========================================= */
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const submitBtn = document.getElementById('form-submit');

const validators = {
  name: (v) => v.trim().length >= 2 ? '' : 'Please enter your name (min 2 characters).',
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Please enter a valid email address.',
  subject: (v) => v.trim().length >= 3 ? '' : 'Please enter a subject (min 3 characters).',
  message: (v) => v.trim().length >= 10 ? '' : 'Please enter a message (min 10 characters).',
};

function getField(name) {
  return contactForm.querySelector(`[name="${name}"]`);
}

function getError(field) {
  return field.parentElement.querySelector('.field-error');
}

function validateField(field) {
  const name = field.getAttribute('name');
  const validate = validators[name];
  if (!validate) return true;
  const error = validate(field.value);
  const errorEl = getError(field);
  errorEl.textContent = error;
  field.classList.toggle('error', !!error);
  return !error;
}

// Real-time validation on blur
Object.keys(validators).forEach(name => {
  const field = getField(name);
  if (!field) return;
  field.addEventListener('blur', () => validateField(field));
  field.addEventListener('input', () => {
    if (field.classList.contains('error')) validateField(field);
  });
});

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Validate all fields
  let valid = true;
  Object.keys(validators).forEach(name => {
    const field = getField(name);
    if (field && !validateField(field)) valid = false;
  });

  if (!valid) return;

  // Simulate sending (replace with your backend/Formspree/Netlify Forms)
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;

  try {
    await new Promise(resolve => setTimeout(resolve, 1800)); // simulate API call

    // SUCCESS STATE
    contactForm.reset();
    formSuccess.classList.add('show');
    setTimeout(() => formSuccess.classList.remove('show'), 5000);
  } catch (err) {
    console.error('Form error:', err);
    // You can add an error message here
  } finally {
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
  }
});

/* =========================================
   13. PROJECT CARD TILT (optional subtle effect)
   ========================================= */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* =========================================
   14. ACTIVE SECTION INDICATOR (progress line)
   ========================================= */
// Optional: reading progress bar
const progressBar = document.createElement('div');
progressBar.style.cssText = `
  position: fixed; top: 0; left: 0; height: 2px; z-index: 200;
  background: var(--color-accent); width: 0%; transition: width 0.1s;
  pointer-events: none;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;
  progressBar.style.width = `${progress}%`;
}, { passive: true });