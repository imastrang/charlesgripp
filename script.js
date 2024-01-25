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

    // Full-page scroll snap
    const sections = document.querySelectorAll('.main-content section');
    let currentSectionIndex = 0;

    window.addEventListener('wheel', (e) => {
        e.preventDefault();

        if (e.deltaY < 0 && currentSectionIndex > 0) {
            // Scrolling up
            currentSectionIndex--;
        } else if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
            // Scrolling down
            currentSectionIndex++;
        }

        sections[currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    // Sidebar Toggle for Mobile View
    const sidebarToggle = document.getElementById('navbarToggle');
    const mobileNav = document.getElementById('mobileNav');

    sidebarToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
    });
});
