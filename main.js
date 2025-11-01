 function loadContent(url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text(); // Get the response as plain text (HTML)
            })
            .then(html => {
                document.getElementById('content-container').innerHTML = html; // Insert the fetched HTML
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                document.getElementById('content-container').innerHTML = '<p>Error loading content.</p>';
            });
    }