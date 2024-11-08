const images = document.querySelectorAll('.image');

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.75; // Trigger at 75% of viewport height

    images.forEach(image => {
        const imageTop = image.getBoundingClientRect().top;

        if (imageTop < triggerBottom) {
            image.classList.add('visible'); // Add visible class when in view
        } else {
            image.classList.remove('visible'); // Remove class when out of view
        }
    });
}

window.addEventListener('scroll', checkScroll);
