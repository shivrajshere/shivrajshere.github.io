document.addEventListener('DOMContentLoaded', () => {

    /* ── THEME TOGGLE ──────────────────────────────────────── */
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle';

    const navContainer = document.querySelector('.navbar .container');
    if (navContainer) navContainer.appendChild(themeBtn);

    // Apply saved theme on load
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
    updateLabel(savedTheme);

    themeBtn.addEventListener('click', () => {
        const current = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem('theme', next);
        updateLabel(next);
    });

    function applyTheme(t) {
        document.body.classList.remove('dark-theme', 'light-theme');
        document.body.classList.add(t === 'light' ? 'light-theme' : 'dark-theme');
    }

    function updateLabel(t) {
        themeBtn.textContent = t === 'dark' ? '☀️  Light' : '🌙  Dark';
    }

    /* ── MOUSE-FOLLOWING RADIAL GLOW ───────────────────────── */
    document.addEventListener('mousemove', e => {
        const x = (e.clientX / window.innerWidth  * 100).toFixed(1) + '%';
        const y = (e.clientY / window.innerHeight * 100).toFixed(1) + '%';
        document.body.style.setProperty('--mouse-x', x);
        document.body.style.setProperty('--mouse-y', y);
    });

    /* ── PARTICLE CANVAS ───────────────────────────────────── */
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const PARTICLE_COUNT = 60;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => mkParticle());

    function mkParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.5 + 0.3,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            alpha: Math.random() * 0.6 + 0.1,
        };
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const accent = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#4fb1ba';

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = accent;
            ctx.globalAlpha = p.alpha;
            ctx.fill();
        });

        // Draw connecting lines between close particles
        ctx.globalAlpha = 1;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = accent;
                    ctx.globalAlpha = (1 - dist / 120) * 0.1;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        ctx.globalAlpha = 1;

        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    /* ── TYPEWRITER EFFECT ─────────────────────────────────── */
    const typeEl = document.getElementById('typewriter-text');
    if (typeEl) {
        const phrases = [
            'Robotics Engineer',
            'Product Designer',
            'IoT Systems Specialist',
            'Medical Robotics Researcher',
        ];
        let pi = 0, ci = 0, deleting = false;

        function type() {
            const current = phrases[pi];
            typeEl.textContent = deleting
                ? current.slice(0, ci--)
                : current.slice(0, ci++);

            let delay = deleting ? 50 : 90;
            if (!deleting && ci > current.length) { delay = 1800; deleting = true; }
            if (deleting && ci < 0)               { deleting = false; pi = (pi + 1) % phrases.length; delay = 400; }
            setTimeout(type, delay);
        }
        type();
    }

    /* ── SCROLL ANIMATIONS ─────────────────────────────────── */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
            .forEach(el => observer.observe(el));

    /* ── ACTIVE NAV LINK TRACKING ──────────────────────────── */
    const sections = document.querySelectorAll('[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(a => {
                    a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
                });
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(s => navObserver.observe(s));

    /* ── SMOOTH SCROLL ─────────────────────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
            }
        });
    });

    /* ── NAVBAR SHRINK ON SCROLL ───────────────────────────── */
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.style.padding = window.scrollY > 60 ? '0.4rem 0' : '0.85rem 0';
    }, { passive: true });

    /* ── COUNT-UP ANIMATION ────────────────────────────────── */
    document.querySelectorAll('.count-up').forEach(el => {
        const target = +el.dataset.target;
        const statObs = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            statObs.unobserve(el);
            let start = 0;
            const step = target / 50;
            const interval = setInterval(() => {
                start = Math.min(start + step, target);
                el.textContent = Number.isInteger(target) ? Math.round(start) : start.toFixed(1);
                if (start >= target) clearInterval(interval);
            }, 30);
        }, { threshold: 0.5 });
        statObs.observe(el);
    });

});
