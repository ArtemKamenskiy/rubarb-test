let prevButton = document.querySelector('.prev-btn'),
    nextButton = document.querySelector('.next-btn'),
    slides = document.querySelectorAll('.slide'),
    count = 0;

function activeSlide(i) {
    for (let slide of slides) {
        slide.classList.remove('active')
    }
    slides[i].classList.add('active')
}

function nextSlide() {
    if(count === slides.length - 1) {
        count = 0;
        activeSlide(count);
    } else {
        count++;
        activeSlide(count);
    }
}

function prevSlide() {
    if(count === 0) {
        count = slides.length - 1;
        activeSlide(count);
    } else {
        count--;
        activeSlide(count);
    }
}

setInterval(nextSlide, 4000);
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
