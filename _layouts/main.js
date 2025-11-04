// Get all links with the class "nav-link"
const navLinks = document.querySelectorAll('.menu-item');

// Add a click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Prevent default link behavior if you are staying on the same page
        // e.preventDefault(); 

        // Find the currently active link and remove the 'active' class
        const currentActive = document.querySelector('.menu-item.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }

        // Add the 'active' class to the newly clicked link
        this.classList.add('active');
    });
});