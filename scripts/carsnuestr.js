document.addEventListener("DOMContentLoaded", function () {
    // Obtener todas las instancias de los carruseles
    var slideshows = document.querySelectorAll(".slideshow-container");

    // Iterar sobre cada carrusel
    slideshows.forEach(function (slideshow) {
        // Obtener todas las imágenes dentro del carrusel
        var slides = slideshow.querySelectorAll(".mySlides");

        var slideIndex = 0;

        // Función para mostrar la siguiente imagen en el carrusel
        function showNextSlide() {
            slides.forEach(function (slide) {
                slide.style.display = "none";  // Ocultar todas las imágenes
            });

            // Incrementar el índice y volver al principio si es necesario
            slideIndex = (slideIndex + 1) % slides.length;

            // Mostrar la imagen actual
            slides[slideIndex].style.display = "block";

            // Llamar a la función recursivamente después de 3 segundos
            setTimeout(showNextSlide, 3000);
        }

        // Iniciar la rotación automática del carrusel
        showNextSlide();
    });
});
