document.addEventListener('DOMContentLoaded', function() {
    var preloader = document.getElementById('preloader');
    var content = document.getElementById('content');

    // Hide the preloader and show the main content after 2 seconds
    setTimeout(function() {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }, 2000);
});