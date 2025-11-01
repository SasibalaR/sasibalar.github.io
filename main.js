function loadContent(url, event) {
    event.preventDefault(); // Prevent default link behavior

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('content-container').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
            document.getElementById('content-container').innerHTML = '<p>Error loading content.</p>';
        });
}