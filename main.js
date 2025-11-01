

$(document).ready(function() {
    $('.nav-link').on('click', function(e) {
        e.preventDefault();

        var pageUrl = $(this).attr('href');

        $('#content-container').load(pageUrl);
    });
});