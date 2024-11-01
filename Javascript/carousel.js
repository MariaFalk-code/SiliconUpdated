// Script rendered by ChatGPT 4o, modified to add captions.
let currentSlide = 0;
const overlays = document.querySelectorAll('.overlay-img');
const captions = document.querySelectorAll('.carousel-caption');

function showSlide(index) {
  overlays.forEach((overlay, i) => {
    overlay.classList.remove('active');
    if (i === index) {
      overlay.classList.add('active');
    }
  });

  captions.forEach((caption, i) => {
    caption.classList.remove('active');
    if (i === index) {
      caption.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % overlays.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + overlays.length) % overlays.length;
  showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);
