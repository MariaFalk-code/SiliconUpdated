//Script rendered by ChatGPT 4o, slightly modifed to fit project.

document.querySelectorAll('.question, .faq-chevron').forEach(button => {
  button.addEventListener('click', () => {
      const content = button.nextElementSibling;

      button.classList.toggle('active');

      if (button.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
      } else {
          content.style.maxHeight = 0;
      }
  });
});
