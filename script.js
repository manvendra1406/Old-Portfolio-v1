const slides = document.querySelectorAll('.slide');
const f1 = document.querySelector('.f1');
let current = 0;

function nextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}

setInterval(nextSlide, 9000);

f1.addEventListener('click', nextSlide);
