document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Landing Page Interaction
    const landingPage = document.getElementById('landingPage');
    landingPage.addEventListener('click', () => {
        landingPage.style.opacity = '0';
        setTimeout(() => {
            landingPage.remove();
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        }, 1000);
    });

    // Full-page scroll snap (enhanced with slower transition)
    const sections = document.querySelectorAll('.main-content section');
    let currentSectionIndex = 0;
    let isScrolling;

    window.addEventListener('wheel', (e) => {
        e.preventDefault();
        clearTimeout(isScrolling);

        isScrolling = setTimeout(() => {
            if (e.deltaY < 0 && currentSectionIndex > 0) {
                currentSectionIndex--;
            } else if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
                currentSectionIndex++;
            }

            sections[currentSectionIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 150);
    });
});
