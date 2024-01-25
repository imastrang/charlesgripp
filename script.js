document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Responsive Sidebar Toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Add additional interactive elements as needed
    // For example, button hover effects or dynamic content loading
});
document.addEventListener('DOMContentLoaded', function() {
    const landingPage = document.getElementById('landingPage');
    const landingMessage = document.querySelector('.landing-message');

    landingMessage.addEventListener('click', function() {
        landingPage.style.opacity = '0';
        setTimeout(function() {
            landingPage.style.display = 'none';
        }, 500); // Matches the transition time in CSS
    });

    // Rest of your JavaScript...
});
