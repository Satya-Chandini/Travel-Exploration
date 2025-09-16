function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if(section){
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


// Pause carousel on hover
const carousel = document.querySelector('.carousel-slide');
carousel.addEventListener('mouseenter', () => {
  carousel.style.animationPlayState = 'paused';
});
carousel.addEventListener('mouseleave', () => {
  carousel.style.animationPlayState = 'running';
});
