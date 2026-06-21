/* ============================================
   Abdul Qadeer Portfolio — Vanilla JavaScript
   Converted from React + Framer Motion + Next.js
   ============================================ */

(function() {
  'use strict';

  // ==================== PORTFOLIO DATA ====================
  // ==================== PORTFOLIO DATA ====================
  const PROJECTS = [
    // --- Brand Identity (3) ---
    { title:'Biogen Brand Identity', category:'Brand Identity', count:3, image:'brand-identity/biogen-new.jpg', imgW:900, imgH:900, badge:'Number 1 in Department', description:'A complete visual identity system developed to establish a strong and professional brand image.' },
    { title:'Corporate Business Card Design', category:'Brand Identity', count:3, image:'brand-identity/biogen-cards-new.jpg', imgW:900, imgH:528, description:'Professional print collateral created to maintain brand consistency across customer touchpoints.' },
    { title:'Product Packaging Design', category:'Brand Identity', count:3, image:'brand-identity/biogen-flyer-new.jpg', imgW:900, imgH:1272, description:'Packaging concepts designed to enhance presentation, recognition, and customer appeal.' },

    // --- Graphic Design (19) ---
    { title:'Marketing Campaign Flyer', category:'Graphic Design', count:19, image:'graphic-design/royal-touch.jpg', imgW:900, imgH:1125, description:'Promotional design created to communicate services clearly and drive audience engagement.' },
    { title:'Business Growth Flyer', category:'Graphic Design', count:19, image:'graphic-design/result-focused-1-new.png', imgW:1080, imgH:1080, description:'Conversion focused marketing material designed to highlight value and encourage action.' },
    { title:'Lead Generation Promotion', category:'Graphic Design', count:19, image:'graphic-design/result-focused-2-new.png', imgW:1620, imgH:1620, description:'Professional advertising creative developed to support outreach and client acquisition.' },
    { title:'Service Marketing Design', category:'Graphic Design', count:19, image:'graphic-design/result-focused-3-new.png', imgW:1620, imgH:1620, description:'A clean promotional design created to strengthen brand visibility and awareness.' },
    { title:'Virtual Assistant Promotion', category:'Graphic Design', count:19, image:'graphic-design/va-service-flyer.jpg', imgW:900, imgH:900, description:'Service based marketing material developed to showcase expertise and attract clients.' },
    { title:'Inspirational Social Graphic', category:'Graphic Design', count:19, image:'graphic-design/quote-flyer-devin.jpg', imgW:900, imgH:900, description:'A visually engaging social media design created to increase audience interaction.' },
    { title:'Book Promotion Campaign', category:'Graphic Design', count:19, image:'graphic-design/fasting-with-force-flyer-new.png', imgW:1620, imgH:1620, description:'Creative marketing assets designed to support book awareness and audience engagement.' },
    { title:'Book Cover Design', category:'Graphic Design', count:19, image:'graphic-design/fasting-with-force-book-new.png', imgW:1536, imgH:2304, description:'Creative marketing assets designed to support book awareness and audience engagement.' },
    { title:'Book Review Graphic', category:'Graphic Design', count:19, image:'graphic-design/fasting-with-force-review-new.png', imgW:2121, imgH:3000, description:'Creative marketing assets designed to support book awareness and audience engagement.' },
    { title:'Awareness Campaign Poster', category:'Graphic Design', count:19, image:'graphic-design/amr-poster-new.png', imgW:2592, imgH:3456, badge:'University Event', description:'A professional poster design created to communicate information with clarity and impact.' },
    { title:'University Event Promotion', category:'Graphic Design', count:19, image:'graphic-design/cholistan-university-new.png', imgW:3750, imgH:6000, badge:'University Event', description:'Educational promotional material developed to support events and student engagement.' },
    { title:'Coaching Brand Social Post', category:'Graphic Design', count:19, image:'graphic-design/boss-builder-labs-new.png', imgW:1620, imgH:1620, badge:'International Stage', description:'A visually engaging social media design created to increase audience interaction.' },
    { title:'AI Models Comparison Graphic', category:'Graphic Design', count:19, image:'content-writing/ai-comparison.jpg', imgW:900, imgH:506, description:'A clean promotional design created to strengthen brand visibility and awareness.' },
    { title:'Latest AI Comparison Graphic', category:'Graphic Design', count:19, image:'content-writing/latest-ai-comparison.jpg', imgW:900, imgH:506, description:'A clean promotional design created to strengthen brand visibility and awareness.' },
    { title:'AI Video Generator Thumbnail', category:'Graphic Design', count:19, image:'content-writing/best-ai-video-generator.webp', imgW:1200, imgH:675, description:'A visually engaging social media design created to increase audience interaction.' },
    { title:'Midjourney Alternatives Thumbnail', category:'Graphic Design', count:19, image:'content-writing/midjourney-alternatives.webp', imgW:1672, imgH:941, description:'A visually engaging social media design created to increase audience interaction.' },
    { title:'Luxury Cars Thumbnail', category:'Graphic Design', count:19, image:'content-writing/luxury-cars-thumbnail.jpg', imgW:900, imgH:501, description:'A clean promotional design created to strengthen brand visibility and awareness.' },
    { title:'YouTube Intro Thumbnail', category:'Graphic Design', count:19, image:'content-writing/intro-thumbnail.jpg', imgW:900, imgH:506, description:'A clean promotional design created to strengthen brand visibility and awareness.' },
    { title:'Virtual Assistant Service Flyer', category:'Graphic Design', count:19, image:'fiverr-gigs/va-service-new.png', imgW:1410, imgH:1182, description:'Service based marketing material developed to showcase expertise and attract clients.' },

    // --- Lead Generation (6) ---
    { title:'B2B Lead Research System', category:'Lead Generation', count:6, image:'lead-generation/preview-0.webp', imgW:1366, imgH:654, description:'Targeted prospect research and database development for effective outreach campaigns.' },
    { title:'Qualified Prospect Database', category:'Lead Generation', count:6, image:'lead-generation/preview-1.webp', imgW:1366, imgH:649, description:'Organized lead lists created to support business development and client acquisition.' },
    { title:'LinkedIn Prospecting Campaign', category:'Lead Generation', count:6, image:'lead-generation/preview-4.webp', imgW:1200, imgH:571, description:'Strategic decision maker research conducted through advanced prospecting methods.' },
    { title:'CRM Lead Management', category:'Lead Generation', count:6, image:'lead-generation/preview-6.webp', imgW:1200, imgH:551, description:'Structured lead tracking systems designed to improve workflow efficiency and follow up.' },
    { title:'Outbound Lead Strategy', category:'Lead Generation', count:6, image:'lead-generation/preview-new-2.webp', imgW:1200, imgH:600, description:'Research driven lead generation process focused on business growth and outreach success.' },
    { title:'Prospect Acquisition Workflow', category:'Lead Generation', count:6, image:'lead-generation/preview-new-3.webp', imgW:1200, imgH:600, description:'A scalable lead sourcing system developed to support consistent business opportunities.' },

    // --- Web Development (5) ---
    { title:'FindBestAI Platform', category:'Web Development', count:5, image:'content-writing/findbestai.jpg', imgW:800, imgH:450, badge:'Live Site', description:'A custom AI tools directory designed to help users discover, compare, and explore the latest artificial intelligence solutions.', link:'https://findbestai.app/' },
    { title:'Personal Portfolio Website', category:'Web Development', count:5, image:'content-writing/66ghz-portfolio.jpg', imgW:1364, imgH:624, badge:'Live Site', description:'A modern portfolio website built to showcase professional services, projects, and digital expertise.', link:'https://abdulqadeer.66ghz.com' },
    { title:'Transcendence Skincare Website', category:'Web Development', count:5, image:'web-design/transcendence-skin-products.png', imgW:1353, imgH:653, badge:'Wix Store', description:'A responsive business website developed to strengthen brand credibility and improve online visibility.', link:'https://www.transcendenceskin.com/category/all-products' },
    { title:'SEO Focused WordPress Blog', category:'Web Development', count:5, image:'web-design/wordpress-blog-1.jpg', imgW:720, imgH:1447, badge:'WordPress', description:'A content driven website optimized for user experience, search visibility, and long term growth.' },
    { title:'Content Publishing Platform', category:'Web Development', count:5, image:'web-design/wordpress-blog-2.jpg', imgW:714, imgH:1351, badge:'WordPress', description:'A professionally structured blog designed for content management and audience engagement.' },

    // --- Video Editing (4) ---
    { title:'Short Form Video Editing', category:'Video Editing', count:4, image:'video-editing/preview-0.webp', imgW:1366, imgH:647, description:'Engaging video content edited for social media platforms with a focus on retention.' },
    { title:'Social Media Video Production', category:'Video Editing', count:4, image:'video-editing/preview-1.webp', imgW:1366, imgH:649, description:'Creative video editing designed to improve audience engagement and content performance.' },
    { title:'Marketing Video Project', category:'Video Editing', count:4, image:'video-editing/preview-7.webp', imgW:1366, imgH:768, description:'Professional promotional video editing focused on clear communication and visual impact.' },
    { title:'Promotional Ad Video Edit', category:'Video Editing', count:4, image:'lead-generation/preview-new-1.webp', imgW:1366, imgH:649, description:'Engaging video content edited for social media platforms with a focus on retention.' },

    // --- Fiverr Projects (7) ---
    { title:'Freelance Design Project', category:'Fiverr Projects', count:7, image:'fiverr-gigs/flyer-gig-1-new.png', imgW:2112, imgH:1152, description:'Client work successfully delivered through Fiverr with a focus on quality and results.' },
    { title:'Freelance Design Project', category:'Fiverr Projects', count:7, image:'fiverr-gigs/flyer-gig-2-new.png', imgW:2112, imgH:1152, description:'Client work successfully delivered through Fiverr with a focus on quality and results.' },
    { title:'Client Service Showcase', category:'Fiverr Projects', count:7, image:'fiverr-gigs/va-gig-cover.jpg', imgW:900, imgH:506, description:'A collection of freelance projects completed for businesses across multiple industries.' },
    { title:'Client Service Showcase', category:'Fiverr Projects', count:7, image:'fiverr-gigs/service-gig-1-new.png', imgW:1920, imgH:1080, description:'A collection of freelance projects completed for businesses across multiple industries.' },
    { title:'Client Service Showcase', category:'Fiverr Projects', count:7, image:'fiverr-gigs/service-gig-2-new.png', imgW:1920, imgH:1080, description:'A collection of freelance projects completed for businesses across multiple industries.' },
    { title:'Client Service Showcase', category:'Fiverr Projects', count:7, image:'fiverr-gigs/service-gig-3-new.png', imgW:1920, imgH:1080, description:'A collection of freelance projects completed for businesses across multiple industries.' },
    { title:'Client Service Showcase', category:'Fiverr Projects', count:7, image:'fiverr-gigs/service-gig-1.jpg', imgW:900, imgH:490, description:'A collection of freelance projects completed for businesses across multiple industries.' },
  ];

  // ArrowUpRight SVG for portfolio items
  const arrowSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>';

  // ==================== THEME TOGGLE ====================
  function initTheme() {
    const html = document.documentElement;
    const toggle = document.getElementById('themeToggle');
    const sunIcon = toggle.querySelector('.sun-icon');
    const moonIcon = toggle.querySelector('.moon-icon');

    // Load saved theme
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      html.classList.remove('dark');
      html.classList.add('light');
    }

    function updateIcons() {
      const isDark = html.classList.contains('dark');
      sunIcon.style.display = isDark ? '' : 'none';
      moonIcon.style.display = isDark ? 'none' : '';
    }
    updateIcons();

    toggle.addEventListener('click', function() {
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('light');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.remove('light');
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
      updateIcons();
    });
  }

  // ==================== SCROLL REVEAL ====================
  function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '-60px' });

    reveals.forEach(function(el) {
      observer.observe(el);
    });
  }

  // ==================== NAV SCROLL EFFECT ====================
  function initNavScroll() {
    const nav = document.getElementById('mainNav');
    function onScroll() {
      if (window.scrollY > 24) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ==================== MOBILE MENU ====================
  function initMobileMenu() {
    const btn = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');
    const menuIcon = btn.querySelector('.menu-icon');
    const closeIcon = btn.querySelector('.close-icon');

    btn.addEventListener('click', function() {
      const isOpen = menu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        menu.classList.add('open');
        menuIcon.style.display = 'none';
        closeIcon.style.display = '';
      }
    });
  }

  window.closeMobileMenu = function() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('menuToggle');
    const menuIcon = btn.querySelector('.menu-icon');
    const closeIcon = btn.querySelector('.close-icon');
    menu.classList.remove('open');
    menuIcon.style.display = '';
    closeIcon.style.display = 'none';
  };

  // ==================== ANIMATED COUNTER ====================
  function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const animated = new Set();

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !animated.has(entry.target)) {
          animated.add(entry.target);
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function(el) {
      observer.observe(el);
    });

    // Also check if already visible
    counters.forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && !animated.has(el)) {
        animated.add(el);
        animateCounter(el);
      }
    });
  }

  function animateCounter(el) {
    var target = parseInt(el.dataset.target);
    var suffix = '+';
    var current = 0;
    var increment = target / 150;

    function count() {
      current += increment;
      if (current < target) {
        el.textContent = Math.floor(current) + suffix;
        requestAnimationFrame(count);
      } else {
        el.textContent = target + suffix;
      }
    }
    count();
  }

  // ==================== FLOATING PARTICLES ====================
  function initParticles() {
    var container = document.getElementById('particles');
    if (!container) return;

    var particlesData = [
      { size:4, left:'5%', top:'8%', delay:0, duration:15, opacity:0.6 },
      { size:3, left:'12%', top:'22%', delay:1.2, duration:18, opacity:0.5 },
      { size:5, left:'8%', top:'45%', delay:0.5, duration:20, opacity:0.7 },
      { size:3, left:'15%', top:'70%', delay:2, duration:16, opacity:0.4 },
      { size:4, left:'22%', top:'90%', delay:3, duration:22, opacity:0.5 },
      { size:6, left:'30%', top:'5%', delay:0.8, duration:19, opacity:0.8 },
      { size:3, left:'35%', top:'35%', delay:1.5, duration:17, opacity:0.4 },
      { size:4, left:'28%', top:'55%', delay:2.5, duration:21, opacity:0.6 },
      { size:5, left:'40%', top:'80%', delay:0.3, duration:14, opacity:0.7 },
      { size:3, left:'48%', top:'15%', delay:3.5, duration:23, opacity:0.5 },
      { size:4, left:'52%', top:'50%', delay:1, duration:16, opacity:0.6 },
      { size:5, left:'45%', top:'72%', delay:2.8, duration:20, opacity:0.7 },
      { size:3, left:'58%', top:'30%', delay:0.2, duration:18, opacity:0.4 },
      { size:4, left:'62%', top:'65%', delay:1.8, duration:15, opacity:0.5 },
      { size:6, left:'70%', top:'10%', delay:0.6, duration:22, opacity:0.8 },
      { size:3, left:'75%', top:'42%', delay:3.2, duration:17, opacity:0.5 },
      { size:4, left:'72%', top:'75%', delay:2.2, duration:19, opacity:0.6 },
      { size:5, left:'80%', top:'20%', delay:1.5, duration:14, opacity:0.7 },
      { size:3, left:'85%', top:'55%', delay:0.4, duration:21, opacity:0.4 },
      { size:4, left:'88%', top:'85%', delay:2.8, duration:18, opacity:0.6 },
      { size:5, left:'92%', top:'12%', delay:1.2, duration:16, opacity:0.7 },
      { size:3, left:'95%', top:'48%', delay:3.5, duration:23, opacity:0.5 },
      { size:4, left:'18%', top:'38%', delay:0.9, duration:20, opacity:0.6 },
      { size:3, left:'55%', top:'92%', delay:2.5, duration:15, opacity:0.4 },
      { size:5, left:'65%', top:'88%', delay:1.8, duration:17, opacity:0.7 },
      { size:3, left:'38%', top:'12%', delay:0.3, duration:19, opacity:0.5 },
      { size:4, left:'82%', top:'68%', delay:4, duration:22, opacity:0.6 },
      { size:3, left:'25%', top:'60%', delay:1.7, duration:16, opacity:0.4 }
    ];

    particlesData.forEach(function(p, i) {
      var el = document.createElement('div');
      el.className = 'particle';
      el.style.cssText =
        'width:' + p.size + 'px;' +
        'height:' + p.size + 'px;' +
        'left:' + p.left + ';' +
        'top:' + p.top + ';' +
        'opacity:' + p.opacity + ';' +
        'background:radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9), rgba(124,77,255,0.6) 60%, rgba(124,77,255,0.3) 100%);' +
        'box-shadow:0 0 ' + (p.size*2) + 'px rgba(124,77,255,' + (p.opacity*0.5) + '), 0 0 ' + (p.size*4) + 'px rgba(124,77,255,' + (p.opacity*0.2) + ');' +
        'animation:particleFloat' + (i % 4) + ' ' + p.duration + 's ease-in-out ' + p.delay + 's infinite;';

      container.appendChild(el);
    });

    // Create unique keyframes for 4 float variations
    var style = document.createElement('style');
    style.textContent =
      '@keyframes particleFloat0 { 0%,100% { transform:translate(0,0); } 25% { transform:translate(20px,-40px); } 50% { transform:translate(-15px,20px); } 75% { transform:translate(10px,-30px); } }' +
      '@keyframes particleFloat1 { 0%,100% { transform:translate(0,0); } 25% { transform:translate(-20px,30px); } 50% { transform:translate(15px,-25px); } 75% { transform:translate(-10px,15px); } }' +
      '@keyframes particleFloat2 { 0%,100% { transform:translate(0,0); } 25% { transform:translate(15px,-35px); } 50% { transform:translate(-20px,10px); } 75% { transform:translate(8px,-20px); } }' +
      '@keyframes particleFloat3 { 0%,100% { transform:translate(0,0); } 25% { transform:translate(-10px,25px); } 50% { transform:translate(20px,-15px); } 75% { transform:translate(-15px,30px); } }';
    document.head.appendChild(style);
  }

  // ==================== 3D TILT EFFECT ====================
  function init3DTilt() {
    // Hero image tilt
    var visual = document.getElementById('heroVisual');
    var imgWrap = document.getElementById('heroImageTilt');

    if (visual && imgWrap) {
      visual.addEventListener('mousemove', function(e) {
        var rect = visual.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var cx = rect.width / 2;
        var cy = rect.height / 2;
        var rotX = ((y - cy) / cy) * -6;
        var rotY = ((x - cx) / cx) * 6;
        imgWrap.style.transition = 'none';
        imgWrap.style.transform = 'perspective(900px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) scale(1.02)';
      });

      visual.addEventListener('mouseleave', function() {
        imgWrap.style.transition = 'transform .6s cubic-bezier(.16,1,.3,1)';
        imgWrap.style.transform = '';
      });
    }

    // About tilt card
    var aboutCard = document.getElementById('aboutTiltCard');
    if (aboutCard) {
      initTiltOnElement(aboutCard, 10, 12, 1000);
    }

    // Skill cards (square) — slower 3D response
    var skillTiltElements = document.querySelectorAll('.skill-card-outer[data-tilt]');
    skillTiltElements.forEach(function(el) {
      initTiltOnElement(el, 12, 12, 800, 0.05);
    });

    // Toolkit cards (rectangular) — faster, more responsive
    var toolkitTiltElements = document.querySelectorAll('.toolkit-grid [data-tilt]');
    toolkitTiltElements.forEach(function(el) {
      initTiltOnElement(el, 15, 15, 800, 0.12);
    });
  }

  function initTiltOnElement(el, maxRotX, maxRotY, perspective, lerpSpeed) {
    var currentRotX = 0;
    var currentRotY = 0;
    var targetRotX = 0;
    var targetRotY = 0;
    var targetScale = 1;
    var currentScale = 1;
    var animating = false;
    var isHovering = false;
    var lerp = lerpSpeed || 0.12;

    el.addEventListener('mouseenter', function() {
      isHovering = true;
      targetScale = 1.04;
      // Disable CSS transitions so they don't fight with JS-driven transform
      el.style.transition = 'none';
      if (!animating) {
        animating = true;
        animateTilt();
      }
    });

    el.addEventListener('mousemove', function(e) {
      var rect = el.getBoundingClientRect();
      var nx = (e.clientX - rect.left) / rect.width - 0.5;
      var ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotX = ny * -maxRotX;
      targetRotY = nx * maxRotY;

      // Update border glow position
      var glowEl = el.querySelector('.border-glow');
      if (glowEl) {
        glowEl.style.background = 'radial-gradient(circle at ' + ((nx + 0.5) * 100) + '% ' + ((ny + 0.5) * 100) + '%, var(--primary) 0%, transparent 65%)';
      }

      if (!animating) {
        animating = true;
        animateTilt();
      }
    });

    el.addEventListener('mouseleave', function() {
      isHovering = false;
      targetRotX = 0;
      targetRotY = 0;
      targetScale = 1;
      if (!animating) {
        animating = true;
        animateTilt();
      }
    });

    function animateTilt() {
      currentRotX += (targetRotX - currentRotX) * lerp;
      currentRotY += (targetRotY - currentRotY) * lerp;
      currentScale += (targetScale - currentScale) * lerp;

      el.style.transform = 'perspective(' + perspective + 'px) rotateX(' + currentRotX + 'deg) rotateY(' + currentRotY + 'deg) scale(' + currentScale + ')';

      if (Math.abs(targetRotX - currentRotX) > 0.01 || Math.abs(targetRotY - currentRotY) > 0.01 || Math.abs(targetScale - currentScale) > 0.001) {
        requestAnimationFrame(animateTilt);
      } else {
        currentRotX = targetRotX;
        currentRotY = targetRotY;
        currentScale = targetScale;
        if (targetRotX === 0 && targetRotY === 0 && targetScale === 1) {
          // Clear inline transform so CSS classes take over again
          el.style.transform = '';
          el.style.transition = '';
        }
        animating = false;
      }
    }
  }

  // ==================== MAGNETIC BUTTON ====================
  function initMagnetic() {
    var elements = document.querySelectorAll('[data-magnetic]');

    elements.forEach(function(el) {
      var currentX = 0;
      var currentY = 0;
      var targetX = 0;
      var targetY = 0;
      var animating = false;

      el.addEventListener('mousemove', function(e) {
        var rect = el.getBoundingClientRect();
        targetX = (e.clientX - rect.left - rect.width / 2) * 0.25;
        targetY = (e.clientY - rect.top - rect.height / 2) * 0.25;
        if (!animating) {
          animating = true;
          animateMagnetic();
        }
      });

      el.addEventListener('mouseleave', function() {
        targetX = 0;
        targetY = 0;
        if (!animating) {
          animating = true;
          animateMagnetic();
        }
      });

      function animateMagnetic() {
        currentX += (targetX - currentX) * 0.15;
        currentY += (targetY - currentY) * 0.15;
        el.style.transform = 'translate(' + currentX + 'px, ' + currentY + 'px)';

        if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
          requestAnimationFrame(animateMagnetic);
        } else {
          currentX = targetX;
          currentY = targetY;
          el.style.transform = targetX === 0 && targetY === 0 ? '' : 'translate(' + currentX + 'px, ' + currentY + 'px)';
          animating = false;
        }
      }
    });
  }

  // ==================== CUSTOM CURSOR ====================
  function initCursor() {
    var cursor = document.getElementById('customCursor');
    if (!cursor) return;

    // Only on devices with hover
    if (window.matchMedia('(hover: none)').matches) return;

    var cursorX = -100;
    var cursorY = -100;
    var currentX = -100;
    var currentY = -100;
    var visible = false;
    var hovering = false;

    document.addEventListener('mousemove', function(e) {
      cursorX = e.clientX;
      cursorY = e.clientY;
      if (!visible) {
        visible = true;
        cursor.style.opacity = '1';
      }
    });

    document.addEventListener('mouseover', function(e) {
      var target = e.target.closest('a, button, [data-magnetic]');
      hovering = !!target;
    });

    function animate() {
      currentX += (cursorX - currentX) * 0.15;
      currentY += (cursorY - currentY) * 0.15;
      cursor.style.left = currentX + 'px';
      cursor.style.top = currentY + 'px';

      var size = hovering ? 48 : 12;
      cursor.style.width = size + 'px';
      cursor.style.height = size + 'px';

      requestAnimationFrame(animate);
    }
    animate();
  }

  // ==================== PORTFOLIO GRID ====================
  function initPortfolio() {
    var grid = document.getElementById('portfolioGrid');
    var filterBtns = document.querySelectorAll('.filter-btn');
    if (!grid) return;

    function renderProjects(filter) {
      grid.innerHTML = '';
      var filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(function(p) { return p.category === filter; });

      filtered.forEach(function(p) {
        var aspectRatio = p.imgW / p.imgH;
        var imgHeight = aspectRatio > 1.6 ? 160 : aspectRatio > 1.2 ? 200 : aspectRatio > 0.9 ? 260 : 320;

        var item = document.createElement('div');
        item.className = 'portfolio-item';
        item.setAttribute('data-category', p.category);

        var badgeHTML = p.badge ? '<span class="card-badge">' + p.badge + '</span>' : '';

        item.innerHTML =
          '<div class="portfolio-card glass gradient-border-hover" data-project=\'' + JSON.stringify(p).replace(/'/g, '&#39;') + '\'>' +
            '<div class="card-img" style="aspect-ratio:' + p.imgW + '/' + p.imgH + ';">' +
              '<img src="' + p.image + '" alt="' + p.title + ' work by Abdul Qadeer" loading="lazy" width="' + p.imgW + '" height="' + p.imgH + '">' +
            '</div>' +
            '<div class="card-hover-overlay">' +
              '<span class="overlay-category">' + p.category + '</span>' +
              '<span class="overlay-title">' + p.title + '</span>' +
            '</div>' +
            '<div class="card-info">' +
              '<span class="card-category">' + p.category + '</span>' +
              '<h3 class="card-title">' + p.title + '</h3>' +
              '<div class="card-meta">' +
                '<span class="card-count">' + p.count + ' projects</span>' +
                badgeHTML +
              '</div>' +
            '</div>' +
            '<div class="card-arrow">' + arrowSVG + '</div>' +
          '</div>';

        grid.appendChild(item);
      });

      // Add click listeners for lightbox
      var cards = grid.querySelectorAll('.portfolio-card');
      cards.forEach(function(card) {
        card.addEventListener('click', function() {
          try {
            var projectData = JSON.parse(card.dataset.project);
            openLightbox(projectData);
          } catch(e) {}
        });
      });
    }

    // Filter buttons
    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        filterBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
      });
    });

    // Initial render
    renderProjects('All');
  }

  // ==================== LIGHTBOX ====================
  function openLightbox(project) {
    var lightbox = document.getElementById('lightbox');
    var img = document.getElementById('lightboxImg');
    var category = document.getElementById('lbCategory');
    var title = document.getElementById('lbTitle');
    var desc = document.getElementById('lbDesc');
    var badge = document.getElementById('lbBadge');
    var link = document.getElementById('lbLink');
    var count = document.getElementById('lbCount');

    img.src = project.image;
    img.alt = project.title + ' work by Abdul Qadeer';
    category.textContent = project.category;
    title.textContent = project.title;
    desc.textContent = project.description || '';
    count.textContent = project.count + ' projects';

    if (project.badge) {
      badge.textContent = project.badge;
      badge.style.display = '';
    } else {
      badge.style.display = 'none';
    }

    if (project.link) {
      link.href = project.link;
      link.style.display = '';
    } else {
      link.style.display = 'none';
    }

    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function initLightbox() {
    var lightbox = document.getElementById('lightbox');
    var closeBtn = document.getElementById('lightboxClose');

    lightbox.addEventListener('click', closeLightbox);
    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeLightbox();
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // ==================== TIMELINE SCROLL PROGRESS ====================
  function initTimelineProgress() {
    var container = document.getElementById('timelineContainer');
    var progress = document.getElementById('timelineProgress');
    if (!container || !progress) return;

    function updateProgress() {
      var rect = container.getBoundingClientRect();
      var containerTop = rect.top;
      var containerHeight = rect.height;
      var viewportHeight = window.innerHeight;

      var start = viewportHeight * 0.7;
      var end = viewportHeight * 0.4;

      var progressValue;
      if (containerTop > start) {
        progressValue = 0;
      } else if (containerTop + containerHeight < end) {
        progressValue = 1;
      } else {
        progressValue = Math.min(1, Math.max(0, (start - containerTop) / (containerHeight + start - end)));
      }

      progress.style.height = (progressValue * 100) + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // ==================== SMOOTH SCROLL (LENIS-LIKE) ====================
  function initSmoothScroll() {
    // Use native smooth scroll for simplicity - it works well
    // Lenis would add a CDN dependency; native scroll is sufficient
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href === '#') return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Late-loading images (portfolio grid, hero photo, etc.) can
          // shift page height after the scroll starts, leaving the
          // target slightly out of place. Re-sync once shortly after
          // the animation would normally finish so one click is enough.
          setTimeout(function() {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 500);
        }
      });
    });
  }

  // ==================== EMAIL CTA: SMART GMAIL FALLBACK ====================
  // Desktop browsers run mailto: against whatever the OS has set as the
  // default mail handler — which is often nothing, so clicking silently
  // does nothing. Browsers only allow window.open() to bypass the popup
  // blocker when it's called synchronously inside the click handler, so
  // we open the Gmail compose tab immediately. If a real mail app then
  // opens (detected via the window losing focus), we close that Gmail
  // tab right after — otherwise we leave it open as the fallback.
  function initEmailSmartFallback() {
    var links = document.querySelectorAll('a[href^="mailto:"]');
    if (!links.length) return;

    links.forEach(function(link) {
      var href = link.getAttribute('href');
      var emailMatch = href.match(/^mailto:([^?]+)/);
      if (!emailMatch) return;
      var email = emailMatch[1];
      var gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(email) +
        '&su=' + encodeURIComponent('Let\'s work together') +
        '&body=' + encodeURIComponent('Hi Abdul,\n\n');

      link.addEventListener('click', function(e) {
        var isDesktop = window.matchMedia && window.matchMedia('(min-width: 768px)').matches;
        if (!isDesktop) return;

        // Open the Gmail tab synchronously (required to dodge popup
        // blockers). Keep the mailto: navigation happening alongside it.
        var gmailTab = window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');

        var blurred = false;
        function onBlur() { blurred = true; }
        window.addEventListener('blur', onBlur, { once: true });

        setTimeout(function() {
          window.removeEventListener('blur', onBlur);
          // A real mail app opened and stole focus — we don't need the
          // Gmail fallback tab, so close it.
          if (blurred && gmailTab && !gmailTab.closed) {
            gmailTab.close();
          }
        }, 1000);
      });
    });
  }

  // ==================== INITIALIZE EVERYTHING ====================
  function init() {
    initTheme();
    initNavScroll();
    initMobileMenu();
    initReveal();
    initCounters();
    initParticles();
    init3DTilt();
    initMagnetic();
    initCursor();
    initPortfolio();
    initLightbox();
    initTimelineProgress();
    initSmoothScroll();
    initEmailSmartFallback();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
