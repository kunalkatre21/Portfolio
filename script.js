document.addEventListener('DOMContentLoaded', () => {

    // --- Smoothed Custom Cursor Logic ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');

    // Store current and target positions
    let mouse = { x: -100, y: -100 }; // Current mouse position
    let pos = { x: -100, y: -100 };   // Smoothed cursor position
    const speed = 0.1; // Smoothing factor (lower = smoother)

    // Update mouse position
    document.addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    // Smoothing animation loop
    const updateCursor = () => {
        // Interpolate the cursor position towards the mouse position
        pos.x += (mouse.x - pos.x) * speed;
        pos.y += (mouse.y - pos.y) * speed;

        // Apply the transform. Using `will-change` in CSS helps performance.
        cursorDot.style.transform = `translate(${pos.x - 4}px, ${pos.y - 4}px)`;
        cursorCircle.style.transform = `translate(${pos.x - 20}px, ${pos.y - 20}px)`;

        // Keep the loop going
        requestAnimationFrame(updateCursor);
    };

    // Start the animation loop
    updateCursor();

    // Only run this on devices that are not touch-based
    if (window.matchMedia("(pointer: fine)").matches) {
        // Add hover effect to the cursor
        document.querySelectorAll('a, button, .project-card-link').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorCircle.style.transform += ' scale(1.5)';
            });
            el.addEventListener('mouseleave', () => {
                // We re-set the transform directly from the 'pos' variable to avoid conflicts
                cursorCircle.style.transform = `translate(${pos.x - 20}px, ${pos.y - 20}px)`;
            });
        });
    }

    // --- Intersection Observer for Scroll Animations ---
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    revealElements.forEach(el => observer.observe(el));
});