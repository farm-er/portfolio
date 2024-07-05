

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    // Toggle menu visibility when the menu toggle icon is clicked
    menuToggle.addEventListener('click', function() {
        // Check if the menu is currently hidden
        if (menu.style.display === 'none') {
            // Display the menu
            menu.style.display = 'block';
        } else {
            // Hide the menu
            menu.style.display = 'none';
        }
    });
});