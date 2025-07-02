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

    // --- Intersection Observer for Chart Animation ---
    const chart = document.querySelector('.impact-chart-container');

    if (chart) { // Only run if the chart exists on the page
        const chartObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the 'is-visible' class to trigger CSS animations
                    entry.target.classList.add('is-visible');

                    // Set the final height of the bars
                    const beforeBar = entry.target.querySelector('.bar--before .bar-inner');
                    const afterBar = entry.target.querySelector('.bar--after .bar-inner');

                    beforeBar.style.height = '62%';
                    afterBar.style.height = '75%';

                    // Stop observing once the animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of the chart is visible

        chartObserver.observe(chart);
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