document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    const video = document.getElementById('hero-video');
    const gallery = document.querySelector('.gallery');
    const overlay = document.querySelector('.overlay');
    const expandedImageContainer = document.querySelector('.expanded-image-container');
    const expandedImage = document.querySelector('.expanded-image-container img');
      const categoryFilter = document.querySelector('.dropdown-content');
      const dropBtn = document.querySelector('.dropbtn')
     document.addEventListener('click', (event) => {
            if(nav.style.display === 'flex' && !nav.contains(event.target) && !hamburgerMenu.contains(event.target)){
                nav.style.display = 'none';
                  hamburgerMenu.classList.remove('active')
          }
         });

    if (hamburgerMenu && nav) {
        hamburgerMenu.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
                  hamburgerMenu.classList.toggle('active')
        });
    }
       if(video){
            video.classList.add('fade-in');
        }
        if(gallery && overlay && expandedImageContainer && expandedImage){
             gallery.addEventListener('click', (event)=>{
                const clickedElement = event.target.closest('.image-container')
                if(clickedElement){
                     const imgSrc = clickedElement.dataset.image;
                    expandedImage.src = imgSrc;
                    overlay.classList.add('active');
                    expandedImageContainer.classList.add('active');
               }
        });
          function closeExpandedImage(){
                overlay.classList.remove('active')
              expandedImageContainer.classList.remove('active')
            }
          overlay.addEventListener('click', closeExpandedImage);
            expandedImageContainer.addEventListener('click', closeExpandedImage);
        }
       if(categoryFilter && gallery){
        function filterImages(category) {
              const imageContainers = document.querySelectorAll('.gallery .image-container');
             imageContainers.forEach(container => {
                  if (category === 'all' || container.dataset.category === category) {
                      container.classList.remove('hide');
                  } else {
                        container.classList.add('hide');
                   }
            });
          }
        categoryFilter.addEventListener('click', (event) => {
             if (event.target.tagName === 'A'){
                const selectedCategory = event.target.dataset.category
                 filterImages(selectedCategory)
             }

        });
           filterImages('all');

         document.addEventListener('click', (event) => {
            if(categoryFilter.style.display === 'block' && !categoryFilter.contains(event.target) && !dropBtn.contains(event.target)){
                categoryFilter.style.display = 'none';
          }
         });
        }
});
