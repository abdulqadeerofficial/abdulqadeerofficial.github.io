/* =========================================
ABDUL QADEER PORTFOLIO v4 — ADVANCED JS
========================================= */

// ===== PRELOADER =====
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => preloader.classList.add('hidden'), 800);
    }
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
        document.body.style.transition = 'opacity .6s ease';
        document.body.style.opacity = '1';
    });
});

// ===== CUSTOM CURSOR =====
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
if (cursor && follower && window.innerWidth > 900) {
    let cx = 0, cy = 0, fx = 0, fy = 0;
    document.addEventListener('mousemove', e => { cx = e.clientX; cy = e.clientY; });
    function animCursor() {
        fx += (cx - fx) * 0.15;
        fy += (cy - fy) * 0.15;
        cursor.style.left = cx + 'px';
        cursor.style.top = cy + 'px';
        follower.style.left = fx + 'px';
        follower.style.top = fy + 'px';
        requestAnimationFrame(animCursor);
    }
    animCursor();
    
    const hoverElements = document.querySelectorAll('a, button, .work-card, .arrow-btn, .tilt-card, .toolkit-category, .toolkit-pill, .social-link, .contact-email-link, .skill-tag');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => follower.classList.add('hover'));
        el.addEventListener('mouseleave', () => follower.classList.remove('hover'));
    });
}

// ===== NAVBAR =====
const nav = document.getElementById('nav');
const burger = document.getElementById('navBurger');
const menu = document.getElementById('navMenu');
window.addEventListener('scroll', () => { if (nav) nav.classList.toggle('scrolled', scrollY > 50); });
if (burger && menu) {
    burger.addEventListener('click', () => { burger.classList.toggle('active'); menu.classList.toggle('open'); });
    menu.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => { burger.classList.remove('active'); menu.classList.remove('open'); }));
}

// ===== ACTIVE NAV LINK ON SCROLL =====
const navLinks = document.querySelectorAll('.nav-link[data-section]');
function updateActiveNav() {
    let currentSection = '';
    const scrollPos = window.scrollY + 150;
    document.querySelectorAll('section[id]').forEach(section => {
        if (section.offsetTop <= scrollPos) currentSection = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('is-active');
        if (link.dataset.section === currentSection) link.classList.add('is-active');
    });
}
window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ===== HERO CANVAS (Particle Network) =====
const canvas = document.getElementById('heroCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];
    function resize() { w = canvas.width = canvas.parentElement.offsetWidth; h = canvas.height = canvas.parentElement.offsetHeight; }
    resize(); window.addEventListener('resize', resize);
    class Particle {
        constructor() { this.x = Math.random() * w; this.y = Math.random() * h; this.vx = (Math.random() - 0.5) * 0.3; this.vy = (Math.random() - 0.5) * 0.3; this.r = Math.random() * 1.5 + 0.5; }
        update() { this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > w) this.vx *= -1; if (this.y < 0 || this.y > h) this.vy *= -1; }
        draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fillStyle = 'rgba(124,111,255,0.3)'; ctx.fill(); }
    }
    const count = Math.min(60, Math.floor(w * h / 20000));
    for (let i = 0; i < count; i++) particles.push(new Particle());
    function animParticles() {
        ctx.clearRect(0, 0, w, h);
        particles.forEach(p => { p.update(); p.draw(); });
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) { ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.strokeStyle = `rgba(124,111,255,${0.1 * (1 - dist / 120)})`; ctx.lineWidth = 0.5; ctx.stroke(); }
            }
        }
        requestAnimationFrame(animParticles);
    }
    animParticles();
}

// ===== COUNTER ANIMATION =====
const metrics = document.querySelectorAll('.metric-val');
const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-count'));
            let current = 0;
            const increment = target / 60;
            function count() {
                current += increment;
                if (current < target) { el.textContent = Math.floor(current); requestAnimationFrame(count); }
                else el.textContent = target;
            }
            count();
            counterObs.unobserve(el);
        }
    });
}, { threshold: 0.5 });
metrics.forEach(m => counterObs.observe(m));

// ===== 3D TILT EFFECT =====
if (window.innerWidth > 900 && window.matchMedia('(hover:hover)').matches) {
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rotateX = ((y - cy) / cy) * -5;
            const rotateY = ((x - cx) / cx) * 5;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; card.style.transition = 'transform .6s ease'; setTimeout(() => card.style.transition = '', 600); });
        card.addEventListener('mouseenter', () => { card.style.transition = 'none'; });
    });

    const heroImgWrap = document.querySelector('.hero-img-wrap');
    const heroVisual = document.querySelector('.hero-visual');
    if (heroImgWrap && heroVisual) {
        heroVisual.addEventListener('mousemove', e => {
            const rect = heroVisual.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rotX = ((y - cy) / cy) * -10;
            const rotY = ((x - cx) / cx) * 10;
            heroImgWrap.style.transition = 'none';
            heroImgWrap.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
        });
        heroVisual.addEventListener('mouseleave', () => {
            heroImgWrap.style.transition = 'transform .8s cubic-bezier(.16,1,.3,1)';
            heroImgWrap.style.transform = '';
        });
    }
}

// ===== CARD SPOTLIGHT EFFECT =====
if (window.innerWidth > 900) {
    const cards = document.querySelectorAll('.skill-cat, .toolkit-category, .process-step, .timeline-item');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(124,111,255,0.08), var(--bg2) 40%)`;
        });
        card.addEventListener('mouseleave', () => { card.style.background = ''; });
    });
}

// ===== MAGNETIC BUTTONS =====
if (window.innerWidth > 900 && window.matchMedia('(hover:hover)').matches) {
    document.querySelectorAll('.btn, .nav-cta, .arrow-btn').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
}

// ===== CAROUSEL =====
function initCarousels() {
    document.querySelectorAll('.carousel-track').forEach(track => {
        const viewport = track.closest('.carousel-viewport');
        if (!viewport) return;
        let isDragging = false, startX = 0, curTrans = 0, prevTrans = 0;
        function getCardW() { const c = track.querySelector('.work-card'); return c ? c.offsetWidth + 24 : 340; }
        function getMaxScroll() { return Math.max(0, track.scrollWidth - viewport.offsetWidth); }
        function move(dir) {
            const step = getCardW() * 2;
            const max = getMaxScroll();
            curTrans = dir === 'next' ? Math.max(curTrans - step, -max) : Math.min(curTrans + step, 0);
            track.style.transform = `translateX(${curTrans}px)`;
        }
        const wrap = track.closest('.carousel-wrap'); 
        if (wrap) {
            wrap.querySelectorAll('.arrow-btn').forEach(btn => {
                btn.addEventListener('click', () => move(btn.dataset.dir));
            });
        }
        track.addEventListener('mousedown', e => { isDragging = true; startX = e.pageX; prevTrans = curTrans; track.classList.add('dragging'); });
        track.addEventListener('mousemove', e => { if (!isDragging) return; curTrans = Math.max(Math.min(prevTrans + e.pageX - startX, 0), -getMaxScroll()); track.style.transform = `translateX(${curTrans}px)`; });
        track.addEventListener('mouseup', () => { isDragging = false; track.classList.remove('dragging'); });
        track.addEventListener('mouseleave', () => { isDragging = false; track.classList.remove('dragging'); });
        track.addEventListener('touchstart', e => { isDragging = true; startX = e.touches[0].pageX; prevTrans = curTrans; }, { passive: true });
        track.addEventListener('touchmove', e => { if (!isDragging) return; curTrans = Math.max(Math.min(prevTrans + e.touches[0].pageX - startX, 0), -getMaxScroll()); track.style.transform = `translateX(${curTrans}px)`; }, { passive: true });
        track.addEventListener('touchend', () => { isDragging = false; });
    });
}
initCarousels();

// ===== SCROLL REVEAL ANIMATIONS =====
const revealEls = document.querySelectorAll('[data-animate]');
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay) || 0;
            setTimeout(() => entry.target.classList.add('revealed'), delay);
            revealObs.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
revealEls.forEach(el => revealObs.observe(el));

// ===== LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
if (lightbox) {
    const lbImg = lightbox.querySelector('img');
    const lbClose = lightbox.querySelector('.lightbox-close');
    document.querySelectorAll('.work-img img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => { lbImg.src = img.src; lbImg.alt = img.alt; lightbox.classList.add('show'); document.body.style.overflow = 'hidden'; });
    });
    lbClose.addEventListener('click', closeLB);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLB(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });
    function closeLB() { lightbox.classList.remove('show'); document.body.style.overflow = ''; }
}

// ===== THEME TOGGLE =====
(function(){
    const t = document.getElementById('themeToggle');
    if(!t) return;
    const saved = localStorage.getItem('theme');
    if(saved === 'light') document.body.classList.add('light');
    t.addEventListener('click', () => {
        document.body.classList.toggle('light');
        localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
    });
})();
