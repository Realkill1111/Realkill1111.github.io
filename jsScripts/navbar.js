document.addEventListener('DOMContentLoaded', () => { 
    const navbar = document.getElementById('navigation');
    const headerMain = document.getElementById("headerMain");

    if (navbar) {
        const placeholder = document.createElement('div');
        placeholder.style.height = `${navbar.offsetHeight}px`;
        placeholder.style.display = 'none';
        navbar.parentNode.insertBefore(placeholder, navbar);

        window.addEventListener('scroll', () => {
            if (window.scrollY > headerMain.clientHeight + 25) {
                navbar.classList.add('sticky');
                placeholder.style.display = 'block';
            } else {
                navbar.classList.remove('sticky');
                placeholder.style.display = 'none';
            }
        });
    } else {
        console.error("Element with ID 'navigation' not found.");
    }
});
