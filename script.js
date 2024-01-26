document.addEventListener('DOMContentLoaded', function() {

    // Navigation Bar Interaction
    const navLinks = document.querySelectorAll('.top-bar nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#d9534f'; // Change color on hover
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '#fff'; // Revert color on mouseout
        });
    });

    // Portfolio Gallery (Placeholder for dynamic content loading)
    // This could be further implemented with AJAX requests or fetching data from a CMS
    function loadPortfolioItems() {
        // Placeholder for loading portfolio items
    }

    // Testimonials Carousel
    // Placeholder for carousel functionality (could use a library like Slick or Swiper)
    function initializeTestimonialsCarousel() {
        // Placeholder for initializing testimonials carousel
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Form validation logic here
            // For example, check if email is valid, message is not empty, etc.
            // If validation passes, send form data using AJAX or similar method
        });
    }

    // Initialize functions on load
    loadPortfolioItems();
    initializeTestimonialsCarousel();

});

// Dark Mode Toggle (Example Implementation)
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        // Additional logic to toggle dark mode styles
    });
}
