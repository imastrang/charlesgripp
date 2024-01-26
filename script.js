document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.querySelector('.landing');
    const topBar = document.querySelector('.top-bar');

    landingPage.addEventListener('click', () => {
        landingPage.style.opacity = '0';
        setTimeout(() => {
            landingPage.remove();
            topBar.style.display = 'flex';
        }, 1000);
    });

    document.querySelectorAll('.top-bar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const sections = document.querySelectorAll('main section');
    window.addEventListener('scroll', () => {
        sections.forEach((section) => {
            const imagePlaceholder = section.querySelector('.image-placeholder');
            if (imagePlaceholder) {
                const imagePos = imagePlaceholder.getBoundingClientRect();
                if (imagePos.top < window.innerHeight && imagePos.bottom >= 0) {
                    imagePlaceholder.style.opacity = '1';
                    imagePlaceholder.style.transform = 'scale(1)';
                } else {
                    imagePlaceholder.style.opacity = '0';
                    imagePlaceholder.style.transform = 'scale(0)';
                }
            }
        });
    });
});
