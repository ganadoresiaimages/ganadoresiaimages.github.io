document.addEventListener('DOMContentLoaded', function () {
    var backToTopButton = document.getElementById('backToTopButton');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    var peliculaLinks = document.querySelectorAll('.pelicula-link');
    peliculaLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var imageTarget = this.getAttribute('data-image-target');
            document.getElementById(imageTarget).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
