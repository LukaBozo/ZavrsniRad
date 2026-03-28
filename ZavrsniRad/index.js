const toggleButton = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');

if (toggleButton && nav) {
  toggleButton.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

if (slides.length > 0) {
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 10000);
}