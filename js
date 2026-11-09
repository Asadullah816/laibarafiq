/**
 * LAIBA RAFIQ PORTFOLIO — MAIN CONTROLLER (PHASE 2)
 * Sticky Navigation, Active Scroll-Spy, Mobile Drawer & Resume Handler
 */

(function () {
  'use strict';

  console.log(
    '%c[SYSTEM]%c Laiba Rafiq Futuristic Cybersecurity Portfolio Initialized.\n' +
    'Color Palette Verified: Midnight Navy (#05091F) | Dark Blue (#0B1535) | Deep Purple (#21164D) | Electric Purple (#5935A6)',
    'background: #5935A6; color: #FFFFFF; font-weight: bold; padding: 3px 6px; border-radius: 4px;',
    'color: #AAB4D0; font-family: monospace;'
  );

  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollSpy();
    initResumeModal();
  });

  /**
   * Sticky Navbar, Hamburger Drawer & Smooth Anchor Scrolling
   */
  function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky shadow on scroll
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }, { passive: true });
    }

    // Mobile Hamburger Menu Toggle
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('is-active');
        navToggle.classList.toggle('is-open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen.toString());
      });

      // Close menu when clicking any nav link
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('is-active');
          navToggle.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Smooth Scroll with sticky header offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const navOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navOffset,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * Active Section Highlighting using IntersectionObserver (Scroll-Spy)
   */
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      root: null,
      threshold: 0.35,
      rootMargin: '-80px 0px -40% 0px'
    });

    sections.forEach(section => observer.observe(section));
  }

  /**
   * Download Resume Handler
   * Does NOT generate a fake file. Triggers a sleek cyber toast notification
   * informing the visitor that official credentials/resume are provided upon direct contact.
   */
  function initResumeModal() {
    const resumeBtn = document.getElementById('btnResumeRequest');
    if (!resumeBtn) return;

    resumeBtn.addEventListener('click', () => {
      showCyberToast('CREDENTIAL ACCESS', 'Direct resume verification available on request. Connecting to contact gateway...');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1400);
    });
  }

  /**
   * Cyber Toast Notification Utility
   */
  window.showCyberToast = function (title, message) {
    const toast = document.getElementById('cyberToast');
    const toastTitle = document.getElementById('toastTitle');
    const toastMsg = document.getElementById('toastMessage');

    if (!toast || !toastTitle || !toastMsg) return;

    toastTitle.textContent = title;
    toastMsg.textContent = message;
    toast.classList.add('is-active');

    setTimeout(() => {
      toast.classList.remove('is-active');
    }, 4500);
  };

})();