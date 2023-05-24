const slides = document.querySelectorAll('.slide');
const colorPickers = document.querySelectorAll('.color-picker');
const colorDisplay = document.getElementById("color-display");

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
// Set initial background colors to white
slides.forEach((slide) => {
  slide.style.backgroundColor = 'white';
});
prevBtn.addEventListener('click', showPreviousSlide);
nextBtn.addEventListener('click', showNextSlide);
// Update slide background color when color picker changes
colorPickers.forEach((picker, index) => {
  picker.addEventListener('change', () => {
    slides[index].style.backgroundColor = picker.value;
    colorDisplay.textContent = `Selected color: ${picker.value}`;
  });
});
function showPreviousSlide() {
  slides[currentIndex].style.transform = 'translateX(100%)';
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].style.transform = 'translateX(-100%)';
  setTimeout(() => {
    slides[currentIndex].style.transform = 'translateX(0)';
  }, 0);
}
function showNextSlide() {
  slides[currentIndex].style.transform = 'translateX(-100%)';
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.transform = 'translateX(100%)';
  setTimeout(() => {
    slides[currentIndex].style.transform = 'translateX(0)';
  }, 0);
}