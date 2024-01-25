document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling and fading effect for the landing page
    const landingPage = document.getElementById('landingPage');
    landingPage.addEventListener('click', () => {
        landingPage.style.opacity = '0';
        setTimeout(() => {
            landingPage.style.display = 'none';
            document.getElementById('about').scrollIntoView({
                behavior: 'smooth'
            });
        }, 1000); // Fade effect duration (1 second)
    });

    // Enhanced full-page scroll snap with slower transition
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
        }, 150); // Delay for initiating scroll to next section
    });
});
