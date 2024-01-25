document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.querySelector('.landing');
    const topBar = document.querySelector('.top-bar');

    // Landing Page Interaction
    landingPage.addEventListener('click', () => {
        landingPage.style.opacity = '0';
        setTimeout(() => {
            landingPage.style.display = 'none';
            topBar.style.display = 'flex';
        }, 1000);
    });

    // Smooth Scrolling for Top Bar Links
    document.querySelectorAll('.top-bar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Additional JS for section-specific effects
    // ...
});
