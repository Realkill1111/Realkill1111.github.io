document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel').forEach(carousel => {
        const imagesContainer = carousel.querySelector('.carousel-images');
        const images = carousel.querySelectorAll('.carousel-images img');
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const nextButton = carousel.querySelector('.carousel-button.next');

        let currentIndex = 0;

        function updateCarousel() {
            imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        });

        // Initialize carousel state
        updateCarousel();
    });
});