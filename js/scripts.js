/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 


//to make an element fade in on scroll, add class toFadeIn
//TODO get rid of bug where scrolling fast enough makes the element flash as visible (fix by setting original opacity of elements to 0 anyway)
//TODO add fade in to remainder of sections, and subsections
//TODO make experience list fade in from the left/right sides
const myElements = document.querySelectorAll(".toFadeInBottom, .toFadeInLeft, .toFadeInRight");
const observerOptions = {
    threshold: 1.0
};
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting && entry.target.classList.contains("toFadeInBottom") && !(entry.target.classList.contains("fadeInBottom"))){
            entry.target.classList.add("fadeInBottom");
        } else if(entry.isIntersecting && entry.target.classList.contains("toFadeInLeft") && !(entry.target.classList.contains("fadeInLeft"))){
            entry.target.classList.add("fadeInLeft");
        } else if(entry.isIntersecting && entry.target.classList.contains("toFadeInRight") && !(entry.target.classList.contains("fadeInRight"))){
            entry.target.classList.add("fadeInRight");
        }
    }, observerOptions);
});

myElements.forEach(element => {
    observer.observe(element);
});



//everything below came with the bootstrap code
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
