const animations = document.querySelectorAll('.animation');

window.addEventListener('scroll', () => {
  animations.forEach(animation => {
    const animationTop = animation.getBoundingClientRect().top;
    const windowTop = window.innerHeight;

    if (animationTop < windowTop) {
      animation.classList.add('show');
    }
  });
});