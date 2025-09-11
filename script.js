/* FINAL PORTFOLIO SCRIPT - Kaito Tanaka */

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
        });

        // Optional: Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav-active');
            });
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {

    // --- Preloader Logic ---
    const preloader = document.querySelector('.preloader');
    const siteWrapper = document.querySelector('.site-wrapper');

    // Hide preloader and show site content after a delay to allow animations to complete.
    window.addEventListener('load', () => {
        setTimeout(() => {
            if(preloader) preloader.classList.add('loaded');
            if(siteWrapper) siteWrapper.classList.add('visible');
        }, 1500); // Duration matches the SVG animation + fade out.
    });
    
    // --- Hero Image Parallax on Mouse Move ---
    // Note: Requires the parallax.js library.
    const parallaxContainer = document.getElementById('hero-parallax');
    if (parallaxContainer && typeof Parallax !== 'undefined') {
        const parallaxInstance = new Parallax(parallaxContainer, {
            relativeInput: true,
            hoverOnly: true,
            scalarX: 5, // Adjust sensitivity
            scalarY: 5,
        });
    }

    // --- Scroll Reveal Animation for Project Cards ---
    const revealElements = document.querySelectorAll('[data-scroll-reveal]');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the card is visible.
        
        revealElements.forEach(el => revealObserver.observe(el));
    }
    
    // --- TOC Scroll-Spy & Chart Animation Observer for Case Study Pages ---
    const navBar = document.querySelector('.main-nav');
    const navBarHeight = navBar ? navBar.offsetHeight : 80; // Get nav height or fallback
    const caseStudySections = document.querySelectorAll('.case-study__content section[id], .impact-chart-container');
    
    if (caseStudySections.length > 0) {
        // This observer triggers when a section is in the "active zone" at the top of the viewport.
        const observerOptions = {
            rootMargin: `-${navBarHeight}px 0px -40% 0px`,
            threshold: 0
        };
        
        const intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Activate TOC link if the intersecting element is a section.
                    const id = entry.target.getAttribute('id');
                    const tocLink = document.querySelector(`.case-study-toc-sidebar a[href="#${id}"]`);
                    if (tocLink) {
                        document.querySelectorAll('.case-study-toc-sidebar a').forEach(link => link.classList.remove('is-active'));
                        tocLink.classList.add('is-active');
                    }
    
                    // Animate Chart if it's the target and becomes visible.
                    if (entry.target.classList.contains('impact-chart-container')) {
                        entry.target.classList.add('is-visible');
                    }
                }
            });
        }, observerOptions);
    
        caseStudySections.forEach(section => {
            intersectionObserver.observe(section);
        });
    }


    // --- Iteration Explorer Logic for Case Study Pages ---
    const explorers = document.querySelectorAll('.iteration-explorer');
    explorers.forEach(explorer => {
        const controls = explorer.querySelector('.explorer-controls');
        if (!controls) return;

        controls.addEventListener('click', (e) => {
            const button = e.target.closest('button');
            if (!button) return; // Ignore clicks not on a button

            const iteration = button.dataset.iteration;
            
            // Update active state on buttons
            controls.querySelectorAll('button').forEach(btn => btn.classList.remove('is-active'));
            button.classList.add('is-active');

            // Toggle visibility for visuals
            const visualContainer = explorer.querySelector('.explorer-visuals');
            visualContainer.querySelectorAll('.iteration-image').forEach(img => img.classList.remove('is-active'));
            visualContainer.querySelector(`.iteration-image[data-iteration="${iteration}"]`).classList.add('is-active');

            // Toggle visibility for rationale text
            const rationaleContainer = explorer.querySelector('.explorer-rationale');
            rationaleContainer.querySelectorAll('.rationale-text').forEach(text => text.classList.remove('is-active'));
            rationaleContainer.querySelector(`.rationale-text[data-iteration="${iteration}"]`).classList.add('is-active');
        });
    });

    // --- Smooth Scroll with Offset for Sticky Nav ---
    // This handles all on-page anchor links (e.g., #contact, #section-id)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ensure it's a valid on-page link and not just "#"
            if (href.length > 1 && href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    // Calculate final scroll position: current scroll + element's top - nav height
                    const offsetPosition = elementPosition + window.pageYOffset - navBarHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
    
    // --- Intervention Tabs Logic ---
    const interventionContainers = document.querySelectorAll('.intervention-container');
    interventionContainers.forEach(container => {
        const tabs = container.querySelector('.intervention-tabs');
        if (!tabs) return;

        tabs.addEventListener('click', (e) => {
            const button = e.target.closest('button.intervention-tab');
            if (!button) return;

            const tabId = button.dataset.tab;

            // Update active state on tabs
            container.querySelectorAll('.intervention-tab').forEach(t => t.classList.remove('is-active'));
            button.classList.add('is-active');

            // Update active state on content panels
            container.querySelectorAll('.intervention-content').forEach(panel => {
                if (panel.dataset.tab === tabId) {
                    panel.classList.add('is-active');
                } else {
                    panel.classList.remove('is-active');
                }
            });
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const playerWrapper = document.getElementById('haptic-audio-player');
        if (playerWrapper) {
            const audioEl = document.getElementById('haptic-audio-file');
            const playBtn = playerWrapper.querySelector('.play-pause-btn');
            const statusText = playerWrapper.querySelector('.audio-status');

            playBtn.addEventListener('click', () => {
                const isPlaying = playerWrapper.classList.contains('is-playing');
                if (isPlaying) {
                    audioEl.pause();
                } else {
                    audioEl.play();
                }
            });

            audioEl.addEventListener('play', () => {
                playerWrapper.classList.add('is-playing');
                statusText.textContent = 'Playing...';
                playBtn.setAttribute('aria-label', 'Pause haptic feedback simulation');
            });

            audioEl.addEventListener('pause', () => {
                playerWrapper.classList.remove('is-playing');
                statusText.textContent = 'Paused';
                playBtn.setAttribute('aria-label', 'Play haptic feedback simulation');
            });

            audioEl.addEventListener('ended', () => {
                playerWrapper.classList.remove('is-playing');
                statusText.textContent = 'Finished. Play again?';
                 playBtn.setAttribute('aria-label', 'Play haptic feedback simulation');
            });
        }
        const scrollContainer = document.getElementById('result-scroll-container');
        const scrollIndicator = document.getElementById('result-scroll-indicator');

        if (scrollContainer && scrollIndicator) {
            scrollContainer.addEventListener('scroll', () => {
                // Hide the indicator after the user scrolls a little bit
                if (scrollContainer.scrollTop > 20) {
                    scrollIndicator.classList.add('is-hidden');
                }
            });
        }

        // Add this inside your existing document.addEventListener('DOMContentLoaded', () => { ... });

        const stickyCta = document.getElementById('sticky-qr-cta');
        if (stickyCta) {
            const closeBtn = stickyCta.querySelector('.sticky-qr__close-btn');
            closeBtn.addEventListener('click', () => {
                stickyCta.classList.add('is-hidden');
            });
        }
    });
});