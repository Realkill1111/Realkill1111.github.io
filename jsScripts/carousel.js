document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel').forEach(carousel => {
        const imagesContainer = carousel.querySelector('.carousel-images');
        const images = carousel.querySelectorAll('.carousel-images img');
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const nextButton = carousel.querySelector('.carousel-button.next');

        let currentIndex = 0;
        let autoMoveInterval;
        let autoMoveTimeout;
        let progressBarInterval;
        const autoMoveDuration = 5000; // 5 seconds

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

        // Create and append the progress bar
        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        progressBar.style.position = 'absolute';
        progressBar.style.bottom = '0';
        progressBar.style.left = '20px';
        progressBar.style.height = '5px';
        progressBar.style.border = 'solid';
        progressBar.style.borderRadius = '5px';
        progressBar.style.borderWidth = "2px";
        progressBar.style.background = 'linear-gradient(60deg, #ffcc00 5%, #fff8e1 10%, #ffe066 30%, #ffeb99 50%, #ffe066 70%, #fff8e1 80%, #ffcc00 95%)';
        progressBar.style.transition = 'width 0.1s linear';
        progressBar.style.width = '0%';
        carousel.appendChild(progressBar);

        function updateCarousel() {
            imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            imageCountDisplay.textContent = `${currentIndex + 1} / ${images.length}`;
        }

        function startProgressBar() {
            clearInterval(progressBarInterval); // Clear any existing interval
            progressBar.style.transition = 'none'; // Disable transition for immediate reset
            progressBar.style.width = '0%'; // Reset width
            setTimeout(() => {
                progressBar.style.transition = 'width 0.1s linear'; // Re-enable transition
            }, 0);

            let elapsedTime = 0;
            progressBarInterval = setInterval(() => {
                elapsedTime += 100;
                const progress = (elapsedTime / autoMoveDuration) * 100;
                progressBar.style.width = `${progress}%`;
                if (elapsedTime >= autoMoveDuration) {
                    clearInterval(progressBarInterval);
                }
            }, 100);
        }

        function startAutoMove() {
            clearInterval(autoMoveInterval); // Clear any existing interval
            startProgressBar();
            autoMoveInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                updateCarousel();
                startProgressBar();
            }, autoMoveDuration);
        }

        function resetAutoMove() {
            clearInterval(autoMoveInterval);
            clearTimeout(autoMoveTimeout);
            clearInterval(progressBarInterval);
            progressBar.style.width = '0%'; // Reset progress bar immediately
            autoMoveTimeout = setTimeout(() => {
                startAutoMove();
            }, 5000);
        }

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
            resetAutoMove();
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
            resetAutoMove();
        });

        images.forEach(image => {
            image.addEventListener('click', () => {
                resetAutoMove();
            });
        });

        // Initialize carousel state
        updateCarousel();
        startAutoMove();
    });
});