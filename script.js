// script.js
document.addEventListener("DOMContentLoaded", function() {
    const contactLink = document.querySelector('.hero__contact');
    const contactSection = document.querySelector('#contact');
    const aboutLink = document.querySelector('.header__nav[href="#about"]');
    const aboutSection = document.querySelector('#about');
    let isScrolling = false;

    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        
        if (!isScrolling) {
            isScrolling = true;
            
            const offsetTop = contactSection.getBoundingClientRect().top;
            
            window.scrollTo({
                top: offsetTop + window.scrollY,
                behavior: "smooth"
            });

            setTimeout(() => {
                isScrolling = false;
            }, 1000);
        }
    });

    aboutLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor link behavior
        
        if (!isScrolling) {
            isScrolling = true;
            
            const offsetTop = aboutSection.getBoundingClientRect().top;
            
            window.scrollTo({
                top: offsetTop + window.scrollY,
                behavior: "smooth"
            });

            setTimeout(() => {
                isScrolling = false;
            }, 1000);
        }
    });

    // Additional event listeners for other sections if needed
});
