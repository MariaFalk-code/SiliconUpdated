//Script rendered by ChatGPT 4o.

const logos = document.querySelectorAll('.logo');
const html = document.querySelector('html');

function switchLogos() {
  logos.forEach(logo => {
    // Get the current light or dark image source
    const lightSrc = logo.getAttribute('data-light');
    const darkSrc = logo.getAttribute('data-dark');

    if (html.classList.contains('dark')) {
      logo.src = darkSrc; // Switch to dark logo
    } else {
      logo.src = lightSrc; // Switch back to light logo
    }
  });
}

document.getElementById('darkModeSwitch').addEventListener('click', function() {
  html.classList.toggle('dark');
  switchLogos();
});
