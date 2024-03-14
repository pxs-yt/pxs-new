// script.js
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');
  header.style.opacity = 0;

  // Fade in the header
  setTimeout(() => {
      header.style.transition = 'opacity 1s ease-in-out';
      header.style.opacity = 1;
  }, 500); // Adjust timing as needed
});
