/**
 * 王飞教授课题组 - 网站交互脚本
 */
(function () {
    'use strict';

    /* ---------- DOM References ---------- */
    const hamburger = document.getElementById('hamburger') || document.querySelector('.navbar .hamburger');
    const navMenu = document.getElementById('navMenu') || document.querySelector('.navbar .nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a, .nav-menu a');
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');
    const themeToggle = document.getElementById('themeToggle');
    const pubTabs = document.querySelectorAll('.pub-tab');
    const pubPanels = document.querySelectorAll('.pub-panel');
    const yearSpan = document.getElementById('currentYear');

    /* ---------- Mobile Menu ---------- */
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            this.classList.toggle('active');
            navMenu.classList.toggle('open');
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
        });

        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navMenu.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('click', function (e) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* ---------- Sticky Navbar Shadow ---------- */
    var lastScrollY = 0;
    window.addEventListener('scroll', function () {
        lastScrollY = window.scrollY;
        if (navbar) {
            navbar.classList.toggle('scrolled', lastScrollY > 50);
        }
    }, { passive: true });

    /* ---------- Active Nav Link on Scroll (仅首页锚点导航) ---------- */
    var sections = document.querySelectorAll('section[id]');
    var firstNavLink = navLinks[0];
    var isHashNav = firstNavLink && firstNavLink.getAttribute('href').charAt(0) === '#';
    if (sections.length > 0 && navLinks.length > 0 && isHashNav) {
        function updateActiveNav() {
            var scrollPos = window.scrollY + 120;
            var current = '';
            sections.forEach(function (section) {
                if (scrollPos >= section.offsetTop) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach(function (link) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        }
        window.addEventListener('scroll', updateActiveNav, { passive: true });
    }

    /* ---------- Back to Top ---------- */
    if (backToTop) {
        window.addEventListener('scroll', function () {
            backToTop.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });

        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---------- Dark Mode ---------- */
    function getPreferredTheme() {
        var stored = localStorage.getItem('theme');
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (themeToggle) {
            themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
            themeToggle.setAttribute('aria-label',
                theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式');
        }
    }

    setTheme(getPreferredTheme());

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            var current = document.documentElement.getAttribute('data-theme');
            setTheme(current === 'dark' ? 'light' : 'dark');
        });
    }

    /* ---------- Publication Tabs ---------- */
    pubTabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            var target = this.getAttribute('data-tab');

            pubTabs.forEach(function (t) { t.classList.remove('active'); });
            pubPanels.forEach(function (p) { p.classList.remove('active'); });

            this.classList.add('active');
            var panel = document.getElementById(target);
            if (panel) panel.classList.add('active');
        });
    });

    /* ---------- Scroll Animations (IntersectionObserver) ---------- */
    var animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    if ('IntersectionObserver' in window && animatedElements.length > 0) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        animatedElements.forEach(function (el) { observer.observe(el); });
    } else {
        animatedElements.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ---------- Dynamic Year ---------- */
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /* ---------- Language Toggle ---------- */
    var langToggle = document.getElementById('langToggle');
    var currentLang = localStorage.getItem('lang') || 'zh';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.querySelectorAll('[data-zh][data-en]').forEach(function (el) {
            el.textContent = el.getAttribute('data-' + lang);
        });
        if (langToggle) {
            langToggle.textContent = lang === 'zh' ? 'EN' : '中文';
            langToggle.setAttribute('aria-label',
                lang === 'zh' ? 'Switch to English' : '切换到中文');
        }
    }

    if (langToggle) {
        setLanguage(currentLang);
        langToggle.addEventListener('click', function () {
            setLanguage(currentLang === 'zh' ? 'en' : 'zh');
        });
    }

})();
