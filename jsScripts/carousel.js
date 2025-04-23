document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel').forEach(carousel => {
        const imagesContainer = carousel.querySelector('.carousel-images');
        const images = carousel.querySelectorAll('.carousel-images img');
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const nextButton = carousel.querySelector('.carousel-button.next');

        let currentIndex = 0;

        function updateCarousel() {
            imagesContainer.style.transform = `translateX(-${getFinalTranslation(currentIndex)}px)`;
        }

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        });

        function getFinalTranslation(index){
            let translation = 0;
            for (let i = 0; i < index; i++) {
                translation += images[i].clientWidth;
            }
            console.log(translation);
            
            return translation;
        }

        // Initialize carousel state
        updateCarousel();
    });
});