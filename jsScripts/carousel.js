document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel').forEach(carousel => {
        const imagesContainer = carousel.querySelector('.carousel-images');
        const images = carousel.querySelectorAll('.carousel-images img');
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const nextButton = carousel.querySelector('.carousel-button.next');

        let currentIndex = 0;

        // Create and append the image count display
        const imageCountDisplay = document.createElement('div');
        imageCountDisplay.classList.add('image-count-display');
        imageCountDisplay.style.position = 'absolute';
        imageCountDisplay.style.bottom = '10px';
        imageCountDisplay.style.right = '10px';
        imageCountDisplay.style.background = 'linear-gradient(60deg, #999 5%, #fff 10%, #ccc 30%, #ddd 50%, #ccc 70%, #fff 80%, #999 95%)';
        imageCountDisplay.style.textShadow = '1px 1px 2px rgba(255, 255, 255, 0.5)';
        imageCountDisplay.style.padding = '5px 10px';
        imageCountDisplay.style.borderRadius = '5px';
        imageCountDisplay.style.fontSize = '14px';
        imageCountDisplay.style.zIndex = '10';
        carousel.appendChild(imageCountDisplay);

        function updateCarousel() {
            imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            imageCountDisplay.textContent = `${currentIndex + 1} / ${images.length}`;
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