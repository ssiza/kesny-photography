document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    const heroLeft = document.querySelector('.hero-left');
      const heroRight = document.querySelector('.hero-right');


    if (hamburgerMenu && nav) {
        hamburgerMenu.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    heroLeft.classList.add('fade-in');
    heroRight.classList.add('fade-in');
});
