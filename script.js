document.addEventListener('DOMContentLoaded', () => {

    // --- Intersection Observer for Scroll Animations ---
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        revealElements.forEach(el => observer.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('is-visible'));
    }

    // --- [NEW] Case Study TOC Active State Logic ---
    const tocLinks = document.querySelectorAll('.case-study__toc-links a');
    const sections = document.querySelectorAll('.case-study__content section[id]');

    if (tocLinks.length > 0 && sections.length > 0) {
        const tocObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    const activeLink = document.querySelector(`.case-study__toc-links a[href="#${id}"]`);
                    
                    // Remove active from all links
                    tocLinks.forEach(link => link.classList.remove('is-active'));
                    
                    // Add active to the current one
                    if (activeLink) {
                        activeLink.classList.add('is-active');
                    }
                }
            });
        }, { 
            rootMargin: '-30% 0px -60% 0px', // Trigger when section is in the middle of the screen
            threshold: 0 
        });

        sections.forEach(section => {
            tocObserver.observe(section);
        });
    }
});