// script.js — elegant entrance animations + mobile menu toggle

// FADE-UP SCROLL OBSERVER
document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fade-up');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // optional: keep visible after first trigger
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -20px 0px' });

  fadeElements.forEach(el => observer.observe(el));

  // MOBILE MENU TOGGLE
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      // change icon (optional)
      const icon = menuToggle.querySelector('i');
      if (mobileMenu.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });

    // close mobile menu on link click (optional)
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
  }

  // add visible class to hero elements immediately (without scroll)
  const heroElements = document.querySelector('.hero-animate') ? document.querySelectorAll('.hero-animate') : [];
  // we manually set hero parts as fade-up? already have classes. 
  // trigger a quick check for elements already in view
  setTimeout(() => {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }, 200);
});
