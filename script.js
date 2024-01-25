document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-frame');

    // Smooth scroll and frame appearance
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScrollToFrame(document.querySelector(this.getAttribute('href')));
        });
    });

    // Gradual appearance of text as you scroll to each frame
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = window.innerHeight;
            if (sectionTop <= sectionHeight / 2) {
                section.style.opacity = '1';
            } else {
                section.style.opacity = '0';
            }
        });
    });

    // Landing Page Interaction
    const landingPage = document.getElementById('landingPage');
    landingPage.addEventListener('click', () => {
        landingPage.style.opacity = '0';
        setTimeout(() => {
            landingPage.remove();
            smoothScrollToFrame(document.getElementById('about'));
        }, 1000);
    });

    // Smooth scroll to frame function
    function smoothScrollToFrame(target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            target.style.opacity = '1';
        }, 600); // Slower reveal of content
    }
});
