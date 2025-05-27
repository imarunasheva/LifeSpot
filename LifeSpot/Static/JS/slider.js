let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    }
    if (index < 0) {
        currentSlide = slides.length - 1;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

showSlide(currentSlide);

const slidesContainer = document.querySelector('.slides');

slidesContainer.addEventListener('mousedown', (e) => {
    const startX = e.pageX;

    slidesContainer.addEventListener('mouseup', (e) => {
        const endX = e.pageX;
        if (startX - endX > 50) {
            changeSlide(1);
        } else if (endX - startX > 50) {
            changeSlide(-1);
        }
        slidesContainer.removeEventListener('mouseup', arguments.callee);
    });
});