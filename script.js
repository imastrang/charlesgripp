document.addEventListener('DOMContentLoaded', () => {
    // Landing Page Interaction
    const landingPage = document.querySelector('.landing');
    const topBar = document.querySelector('.top-bar');

    landingPage.addEventListener('click', () => {
        landingPage.style.opacity = '0';
        setTimeout(() => {
            landingPage.style.display = 'none';
            topBar.style.display = 'flex'; // Revealing the top bar
        }, 1000); // Delay for the fade-out effect
    });

    // Smooth Scrolling for Top Bar Links
    document.querySelectorAll('.top-bar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Section-specific Animations for Image Placeholders
    const sections = document.querySelectorAll('main section');
    window.addEventListener('scroll', () => {
        sections.forEach((section) => {
            const imagePlaceholder = section.querySelector('.image-placeholder');
            if (imagePlaceholder && isElementInViewPort(section)) {
                imagePlaceholder.style.opacity = '1'; // Triggering the fade-in effect
            }
        });
    });

    // Helper Function to Check if Element is in Viewport
    function isElementInViewPort(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
