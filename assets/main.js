/*===== MENU SHOW Y HIDDEN =====*/ 
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

window.onload = function() {
    // Simulate a click on menuItem1 when the page loads
    document.getElementById('homemenu').click(); 
};

document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById('content-container');
    const navLinks = document.querySelectorAll('nav a');
    // Function to load content dynamically
    async function loadContent(event) {
        event.preventDefault(); // Prevent default link behavior (full page reload)
        const file = event.target.getAttribute('data-file');
        const sectionId = event.target.getAttribute('data-section');
        try {
            const response = await fetch(file);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const htmlText = await response.text();

            // Use DOMParser to convert the HTML string into a usable DOM object
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, 'text/html');

            // Find the specific section within the fetched document
            const contentSection = doc.getElementById(sectionId);

            if (contentSection) {
                // Inject only the found section into the main container
                contentContainer.innerHTML = ''; // Clear previous content
                contentContainer.appendChild(contentSection);
            } else {
                contentContainer.innerHTML = `<p>Error: Section "${sectionId}" not found in ${file}</p>`;
            }

        } catch (error) {
            console.error('Error loading content:', error);
            contentContainer.innerHTML = '<p>Error loading requested content.</p>';
        }
    }
        // Add click event listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', loadContent);
    });
});