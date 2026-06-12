/* =========================================
   ABDUL QADEER PORTFOLIO v3 — Single Page JS
   ========================================= */

// ===== PRELOADER =====
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => preloader.classList.add('hidden'), 600);
    }
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
        document.body.style.transition = 'opacity .5s ease';
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
        fx += (cx - fx) * 0.12;
        fy += (cy - fy) * 0.12;
        cursor.style.left = cx + 'px';
        cursor.style.top = cy + 'px';
        follower.style.left = fx + 'px';
        follower.style.top = fy + 'px';
        requestAnimationFrame(animCursor);
    }
    animCursor();
    document.querySelectorAll('a,button,.work-card,.svc-card,.arrow-btn,.tilt-card,.toolkit-category,.toolkit-pill,.social-link,.contact-email-link').forEach(el => {
        el.addEventListener('mouseenter', () => { follower.style.width = '54px'; follower.style.height = '54px'; follower.style.borderColor = 'rgba(124,111,255,0.7)'; });
        el.addEventListener('mouseleave', () => { follower.style.width = '36px'; follower.style.height = '36px'; follower.style.borderColor = 'rgba(124,111,255,0.5)'; });
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
    const scrollPos = window.scrollY + 120;
    document.querySelectorAll('section[id]').forEach(section => {
        if (section.offsetTop <= scrollPos) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('is-active');
        if (link.dataset.section === currentSection) {
            link.classList.add('is-active');
        }
    });
}
window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
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
        constructor() { this.x = Math.random() * w; this.y = Math.random() * h; this.vx = (Math.random() - 0.5) * 0.4; this.vy = (Math.random() - 0.5) * 0.4; this.r = Math.random() * 2 + 0.5; }
        update() { this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > w) this.vx *= -1; if (this.y < 0 || this.y > h) this.vy *= -1; }
        draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fillStyle = 'rgba(124,111,255,0.25)'; ctx.fill(); }
    }
    const count = Math.min(80, Math.floor(w * h / 15000));
    for (let i = 0; i < count; i++) particles.push(new Particle());
    function animParticles() {
        ctx.clearRect(0, 0, w, h);
        particles.forEach(p => { p.update(); p.draw(); });
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 140) { ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.strokeStyle = `rgba(124,111,255,${0.08 * (1 - dist / 140)})`; ctx.lineWidth = 0.5; ctx.stroke(); }
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
            const increment = target / 80;
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
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateX = ((y - cy) / cy) * -6;
        const rotateY = ((x - cx) / cx) * 6;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; card.style.transition = 'transform .5s ease'; setTimeout(() => card.style.transition = '', 500); });
    card.addEventListener('mouseenter', () => { card.style.transition = 'none'; });
});

// ===== HERO IMAGE 3D TILT (desktop only) =====
if (window.innerWidth > 900 && window.matchMedia('(hover:hover)').matches) {
    const heroImgWrap = document.querySelector('.hero-img-wrap');
    const heroVisual = document.querySelector('.hero-visual');
    if (heroImgWrap && heroVisual) {
        heroVisual.addEventListener('mousemove', e => {
            const rect = heroVisual.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rotX = ((y - cy) / cy) * -8;
            const rotY = ((x - cx) / cx) * 8;
            heroImgWrap.style.transition = 'none';
            heroImgWrap.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.025)`;
        });
        heroVisual.addEventListener('mouseleave', () => {
            heroImgWrap.style.transition = 'transform .6s cubic-bezier(.16,1,.3,1)';
            heroImgWrap.style.transform = '';
        });
    }
}

// ===== CAROUSEL =====
function initCarousels() {
    document.querySelectorAll('.carousel-track').forEach(track => {
        const viewport = track.closest('.carousel-viewport');
        if (!viewport) return;
        let isDragging = false, startX = 0, curTrans = 0, prevTrans = 0;

        function getCardW() { const c = track.querySelector('.work-card'); return c ? c.offsetWidth + 20 : 320; }
        function getMaxScroll() { return Math.max(0, track.scrollWidth - viewport.offsetWidth); }
        function move(dir) {
            const step = getCardW() * 2;
            const max = getMaxScroll();
            curTrans = dir === 'next' ? Math.max(curTrans - step, -max) : Math.min(curTrans + step, 0);
            track.style.transform = `translateX(${curTrans}px)`;
        }

        // Arrow buttons
        const wrap = track.closest('.carousel-wrap');
        if (wrap) {
            wrap.querySelectorAll('.arrow-btn').forEach(btn => {
                btn.addEventListener('click', () => move(btn.dataset.dir));
            });
        }

        // Drag
        track.addEventListener('mousedown', e => { isDragging = true; startX = e.pageX; prevTrans = curTrans; track.classList.add('dragging'); });
        track.addEventListener('mousemove', e => { if (!isDragging) return; curTrans = Math.max(Math.min(prevTrans + e.pageX - startX, 0), -getMaxScroll()); track.style.transform = `translateX(${curTrans}px)`; });
        track.addEventListener('mouseup', () => { isDragging = false; track.classList.remove('dragging'); });
        track.addEventListener('mouseleave', () => { isDragging = false; track.classList.remove('dragging'); });

        // Touch
        track.addEventListener('touchstart', e => { isDragging = true; startX = e.touches[0].pageX; prevTrans = curTrans; }, { passive: true });
        track.addEventListener('touchmove', e => { if (!isDragging) return; curTrans = Math.max(Math.min(prevTrans + e.touches[0].pageX - startX, 0), -getMaxScroll()); track.style.transform = `translateX(${curTrans}px)`; }, { passive: true });
        track.addEventListener('touchend', () => { isDragging = false; });

        // Keyboard
        const section = track.closest('.carousel-wrap');
        if (section) { section.setAttribute('tabindex', '0'); section.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') move('prev'); if (e.key === 'ArrowRight') move('next'); }); }
    });
}
initCarousels();

// ===== CONTACT FORM (mailto:) =====
function initForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        const name = form.querySelector('[name="name"]').value.trim();
        const email = form.querySelector('[name="email"]').value.trim();
        const service = form.querySelector('[name="service"]').value;
        const message = form.querySelector('[name="message"]').value.trim();
        const subject = encodeURIComponent(`Portfolio Inquiry from ${name} regarding ${service || 'General'}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service || 'Not specified'}\n\nMessage:\n${message}`);
        window.location.href = `mailto:work.abdul.qadeer@gmail.com?subject=${subject}&body=${body}`;
    });
}
initForm('homeContactForm');

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('[data-animate]');
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay) || 0;
            setTimeout(() => entry.target.classList.add('revealed'), delay);
            revealObs.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
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

// ===== @keyframes fadeUp =====
const style = document.createElement('style');
style.textContent = '@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}';
document.head.appendChild(style);
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
