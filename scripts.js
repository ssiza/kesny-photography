document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
      const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');
       const heroImg = document.querySelector('.hero-left img');
    const images = ['media/DSC06904.jpg', 'media/DSC07134.jpg', 'media/_DSC2903.jpg', 'media/_DSC4523.jpg', 'media/_DSC5097.jpg'];
    let currentImageIndex = 0;


    if (hamburgerMenu && nav) {
        hamburgerMenu.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });
    }
     heroRight.classList.add('fade-in');

      function cycleImages() {
            heroImg.classList.add('fade-out');
            setTimeout(() => {
                 heroImg.classList.remove('fade-out');
                 currentImageIndex = (currentImageIndex + 1) % images.length;
                heroImg.src = images[currentImageIndex];
                heroImg.classList.add('fade-in');

                setTimeout(() => {
                 heroImg.classList.remove('fade-in');
                 }, 1000)
              }, 1000); // Wait for fade out then change image
          
        }
         cycleImages();
      setInterval(cycleImages, 4000);
});
