const hamburgerMenu = document.querySelector('.hamburger-menu');
const logo = document.querySelector('.logo');
const aboutContainer = document.querySelector('#about .about-container');
const navbar = document.querySelector('.navbar');

navbar.classList.add("fixedPosition");

logo.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    aboutContainer.classList.toggle('top-margin');
    
});

const lightCircle = document.getElementById('light-circle');

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
    
        lightCircle.style.left = (mouseX - lightCircle.offsetWidth / 2) + 'px';
        lightCircle.style.top = (mouseY - lightCircle.offsetHeight / 2) + 'px';
        lightCircle.style.opacity = 1; // Işığı göster
    
    });
    
    document.addEventListener('mouseout', () => {
        lightCircle.style.opacity = 0;
    });

    const developerText = document.querySelector("#about .developer");
    let isVisible = false;
    
    setInterval(() => {
      isVisible = !isVisible;
      if (isVisible) {
        developerText.classList.add("visible");
      } else {
           developerText.classList.remove("visible");
      }
    }, 2000); 
