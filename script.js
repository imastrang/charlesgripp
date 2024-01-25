document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-frame');

    // Smooth scroll and frame appearance
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.style.opacity = '1'; // Show the target frame
            target.scrollIntoView({ behavior: 'smooth' });
            hideOtherFrames(target);
        });
    });

    // Hide other frames not in view
    function hideOtherFrames(activeFrame) {
        sections.forEach(section => {
            if (section !== activeFrame) {
                section.style.opacity = '0';
            }
        });
    }

    // Landing Page Interaction
    const landingPage = document.getElementById('landingPage');
    landingPage.addEventListener('click', () => {
        landingPage.style.opacity = '0';
        setTimeout(() => {
            landingPage.remove();
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
            hideOtherFrames(document.getElementById('about'));
        }, 1000);
    });

    // Full-page scroll snap with frame appearance/disappearance
    let currentSectionIndex = 0;
    window.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY < 0 && currentSectionIndex > 0) {
            currentSectionIndex--;
        } else if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
        }
        sections[currentSectionIndex].style.opacity = '1'; // Show the current frame
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
        hideOtherFrames(sections[currentSectionIndex]);
    });
});
