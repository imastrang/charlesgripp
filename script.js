document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for menu links
    document.querySelectorAll('.top-menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScrollToSection(this.getAttribute('href'));
        });
    });

    // Smooth scroll function
    function smoothScrollToSection(href) {
        const targetSection = document.querySelector(href);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        triggerSectionAnimations(href.substring(1));
    }

    // Function to trigger specific animations
    function triggerSectionAnimations(sectionId) {
        if (sectionId === 'portfolio') {
            const image = document.querySelector('#portfolio .image-placeholder');
            image.style.opacity = 1;
        }
        // Additional animations for other sections
    }

    // Section-specific scrolling effects
    window.addEventListener('scroll', () => {
        // Code for gentle and slow section snapping
    });
});
