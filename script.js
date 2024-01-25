document.addEventListener("DOMContentLoaded", function () {
    // Initialize AOS for animation on scroll
    AOS.init({
        duration: 1200, // Duration of animations
        once: true // Animation only happens once when scrolling
    });

    // Smooth scroll to 'About' section when logo button is clicked
    document.querySelector('#logoButton').addEventListener('click', function() {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });

    // Implementing smooth scrolling with gentle snapping effect
    // This requires a library or custom smooth scroll implementation
    // Example with a hypothetical smoothScroll function
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            smoothScroll(target); // smoothScroll is a custom or library function
        });
    });
});

// Custom smooth scroll function (if not using a library)
function smoothScroll(target) {
    target.scrollIntoView({ behavior: 'smooth' });
}
