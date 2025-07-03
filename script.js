document.addEventListener('DOMContentLoaded', () => {

    // --- INTERSECTION OBSERVER SETUP ---
    // A single, efficient observer for all animated elements
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                // --- Handle Chart Animations ---
                if (entry.target.classList.contains('impact-chart-container')) {
                    animateChart(entry.target);
                }
                
                // --- Handle Case Study TOC Highlighting ---
                if (entry.target.matches('.case-study__content section[id]')) {
                    updateActiveTOCLink(entry.target.getAttribute('id'));
                }

                // --- Generic "reveal on scroll" can be added here if needed ---

                // Unobserve after animation/action to save resources
                // observerInstance.unobserve(entry.target); // Keep observing for TOC
            });
        }, {
            threshold: 0.5, // 50% of the element in view
            rootMargin: '-10% 0px -10% 0px' // Adjust viewport for TOC
        });

        // Observe all chart containers
        document.querySelectorAll('.impact-chart-container').forEach(el => observer.observe(el));
        
        // Observe all case study sections for TOC
        document.querySelectorAll('.case-study__content section[id]').forEach(el => observer.observe(el));

    }

    // --- CHART ANIMATION LOGIC ---
    function animateChart(chart) {
        if (chart.classList.contains('is-visible')) return; // Animate only once

        chart.classList.add('is-visible');

        const beforeBar = chart.querySelector('.bar--before .bar-inner');
        const afterBar = chart.querySelector('.bar--after .bar-inner');

        if (beforeBar && afterBar) {
            // Data is now read from the CSS for easier maintenance
            beforeBar.style.height = '62%';
            afterBar.style.height = '75%';
        }
    }

    // --- CASE STUDY TOC LOGIC ---
    const tocLinks = document.querySelectorAll('.case-study__toc-links a');

    function updateActiveTOCLink(id) {
        tocLinks.forEach(link => {
            link.classList.remove('is-active');
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('is-active');
            }
        });
    }

});