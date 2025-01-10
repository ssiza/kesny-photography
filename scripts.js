document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    const imageRevealContainer = document.querySelector('.image-reveal-container');
    const images = ['media/DSC06904.jpg', 'media/DSC07134.jpg', 'media/_DSC2903.jpg', 'media/_DSC4523.jpg', 'media/_DSC5097.jpg'];

    if (hamburgerMenu && nav) {
        hamburgerMenu.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    function createAndAnimateRectangles() {
        imageRevealContainer.innerHTML = ''; // Clear old rectangles
        
      const numRectangles = 3; // Number of rectangles to create

       for (let i = 0; i < numRectangles; i++) {
            const rect = document.createElement('div');
            rect.classList.add('image-reveal');

            // Random image
             const randomImage = images[Math.floor(Math.random() * images.length)];
            rect.style.backgroundImage = `url(${randomImage})`;

            // Random Size
            const size = 50 + Math.random() * 150; // Random size between 50px and 200px
            rect.style.width = `${size}px`;
            rect.style.height = `${size / 1.5}px`;

            // Random Angle
            const angle = Math.random() * 360; // Random angle between 0 and 360 degrees
            rect.style.transform = `rotate(${angle}deg)`;

             // Random Position
             const x = Math.random() * (imageRevealContainer.offsetWidth - size);
            const y = Math.random() * (imageRevealContainer.offsetHeight - size);
            rect.style.left = `${x}px`;
            rect.style.top = `${y}px`;


             // Calculate a unique animation delay for each rectangle
            const animationDelay = Math.random() * 3; // 0 to 3 seconds delay


            rect.style.animationDelay = `${animationDelay}s`;


             imageRevealContainer.appendChild(rect);
        }
    }
     createAndAnimateRectangles();
    setInterval(createAndAnimateRectangles, 5000); // Change rectangles every 5 seconds
});
