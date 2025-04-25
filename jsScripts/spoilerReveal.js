function toggleSpoilerById(id) {
    const element = document.getElementById(id);
    if (element) {
        element.style.visibility = element.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }
}