document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Top Bar Links
    document.querySelectorAll('.top-bar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Image Transition Effects in Sections
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    if (imagePlaceholders.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                } else {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'scale(0)';
                }
            });
        }, { threshold: 0.5 });

        imagePlaceholders.forEach(image => observer.observe(image));
    }

    // Additional Interactive Features
    // Placeholder for future enhancements like animations, modals, etc.

});
