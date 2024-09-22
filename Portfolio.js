
              /*DARK AND LIGHT MODE SECTION*/

            
const toggleButton = document.getElementById('modeToggle');
  const body = document.body;
    const modeIcon = document.getElementById('modeIcon');
    
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      body.classList.toggle('light-mode');

              // Toggle the text and icon
      if (body.classList.contains('dark-mode')) {
        toggleButton.querySelector('span').textContent = 'Light Mode';
        modeIcon.textContent = '☀️';
      } else {
        toggleButton.querySelector('span').textContent = 'Dark Mode';
        modeIcon.textContent = '🌙';
      }
});

              /*HAMBURGER OR MENU-BAR SECTION*/


const hamburger = document.getElementById('hamburger');
  const navbar = document.querySelector('.navbar');
    
    hamburger.addEventListener('click', () => {
      navbar.classList.toggle('active');
});

          /*PROJECT CAROUSEL AND DOTS OR SLIDE SECTION*/


const carousel = document.getElementById('carousel');
  const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function moveToSlide(slideIndex) {
      carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
        currentSlide = slideIndex;

      dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');
}

              /*FONT TEXT AND BODY AOS SECTION*/


AOS.init({
    offset: 100,  // Offset (in px) from the original trigger point
    duration: 300,  // Duration of the animation (in ms)
    easing: 'ease-in-out',  // Default easing for animations
    delay: 100,  // Delay before the animation starts
});