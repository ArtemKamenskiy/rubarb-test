let prevButton = document.querySelector('.prev-btn'),
    nextButton = document.querySelector('.next-btn'),
    slides = document.querySelectorAll('.slide'),
    checkbox = document.querySelector('.checkbox'),
    count = 0,
    interval;

function activeSlide(i) {
    for (let slide of slides) {
        slide.classList.remove('active')
    }
    slides[i].classList.add('active')
}

function nextSlide() {
    if (count === slides.length - 1) {
        count = 0;
        activeSlide(count);
    } else {
        count++;
        activeSlide(count);
    }
}

function prevSlide() {
    if (count === 0) {
        count = slides.length - 1;
        activeSlide(count);
    } else {
        count--;
        activeSlide(count);
    }
}

checkbox.addEventListener('click', function () {
    this.toggleAttribute('checked');
    if (checkbox.hasAttribute('checked')) {
        interval = setInterval(nextSlide, 5000);
    } else if (!checkbox.hasAttribute('checked')) {
        clearInterval(interval);
    }
});

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
