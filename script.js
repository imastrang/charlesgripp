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
            if (imagePlaceholder) {
                const sectionPos = section.getBoundingClientRect();
                const imagePos = imagePlaceholder.getBoundingClientRect();
                // Check if the section is within the viewport
                if (sectionPos.top < window.innerHeight && sectionPos.bottom >= 0) {
                    section.style.opacity = '1'; // Fade in text
                    // Check if the image is within the viewport
                    if (imagePos.top < window.innerHeight && imagePos.bottom >= 0) {
                        imagePlaceholder.style.opacity = '1'; // Fade in image
                        imagePlaceholder.style.transform = 'scale(1)'; // Scale up image
                    }
                } else {
                    section.style.opacity = '0'; // Fade out text
                    imagePlaceholder.style.opacity = '0'; // Fade out image
                    imagePlaceholder.style.transform = 'scale(0)'; // Scale down image
                }
            }
        });
    });
});
