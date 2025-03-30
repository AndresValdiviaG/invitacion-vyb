// Configurar la cuenta regresiva
const countdownDate = new Date("April 12, 2025 14:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "¡Es el día!";
    }
}

const interval = setInterval(updateCountdown, 1000);

// Función para alternar el estado del audio y cambiar el ícono
function toggleMusic() {
    var music = document.getElementById('background-music');
    var button = document.getElementById('toggle-music');
    var icon = document.getElementById('music-icon');

    // Si la música está en reproducción, la pausamos
    if (music.paused) {
        music.play();
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
    } else {
        music.pause();
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
    }
}


// Mapa
const links = document.querySelectorAll('.btn-map');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevenir el comportamiento por defecto del enlace (evitar que se navegue inmediatamente)
        event.preventDefault();

        // Activar el loader
        link.classList.add('loading');

        // Simulamos una carga antes de navegar
        setTimeout(() => {
            // Navegar al enlace después de la animación
            window.open(link.href, '_blank');
        }, 900); // El tiempo de la animación (en milisegundos)
    });
});



//carrusel 

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;  // Índice de la imagen actual

    const images = carousel.querySelectorAll("img");
    const totalImages = images.length;

    // Función para mostrar la imagen correcta según el índice
    function updateCarousel() {
        const offset = -currentIndex * 100; // Desplazar el carrusel según el índice
        carousel.style.transform = `translateX(${offset}%)`;
    }

    // Botón de la izquierda (prev)
    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Ciclo circular
        updateCarousel();
    });

    // Botón de la derecha (next)
    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalImages; // Ciclo circular
        updateCarousel();
    });

    // Inicializamos el carrusel en la primera imagen
    updateCarousel();
});
