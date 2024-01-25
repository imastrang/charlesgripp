// script.js
document.addEventListener('DOMContentLoaded', function() {
   document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');
    var sidebarToggle = document.getElementById('sidebarToggle');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('sidebar-active');
        overlay.classList.toggle('overlay-active');
    });

    overlay.addEventListener('click', function() {
        sidebar.classList.remove('sidebar-active');
        overlay.classList.remove('overlay-active');
    });
});
