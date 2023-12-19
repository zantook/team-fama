/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');
let moon = document.querySelector('#block');
let sun = document.querySelector('#hidden');
let ele1 = document.getElementById('block-home');
let ele2 = document.getElementById('block-about');
let ele3 = document.getElementById('block-services');
let ele4 = document.getElementById('block-contact');
let ele5 = document.querySelector('#block-ana');
let ele6 = document.querySelector('#block-cal');
let ele7 = document.querySelector('#block-folder');
let ele8 = document.querySelector('#block-chart');
let ele9 = document.querySelector('#block-txt');
let ele10 = document.querySelector('#block-rule');
let ele11 = document.querySelector('#block-edit');
darkModeIcon.onclick = () => {
    document.body.classList.toggle('dark-mode');
    moon.classList.toggle('hidden');
    sun.classList.toggle('block');
    let mode = document.getElementById('darkMode-icon');
    if(mode.getAttribute('class')=='light'){
        mode.setAttribute('class' , 'dark');
    }
    else{
        mode.setAttribute('class' , 'light');
    }
    if(mode.getAttribute('class')=='dark'){
        ele1.setAttribute('colors',"primary:#f9f4f5,secondary:#f9f4f5");
        ele2.setAttribute('colors',"primary:#f9f4f5,secondary:#f9f4f5");
        ele3.setAttribute('colors',"primary:#f9f4f5,secondary:#f9f4f5");
        ele4.setAttribute('colors',"primary:#f9f4f5,secondary:#f9f4f5");
        ele5.setAttribute('colors' , "primary:#317773");
        ele6.setAttribute('colors' , "primary:#317773");
        ele7.setAttribute('colors' , "primary:#317773");
        ele8.setAttribute('colors' , "primary:#317773,secondary:#f9f4f5");
        ele9.setAttribute('colors' , "primary:#f9f4f5,secondary:#317773");
        ele10.setAttribute('colors' , "primary:#f9f4f5,secondary:#317773");
        ele11.setAttribute('colors' , "primary:#f9f4f5,secondary:#317773");
    }
    else{
        ele1.setAttribute('colors',"primary:#0a100d,secondary:#0a100d");
        ele2.setAttribute('colors',"primary:#0a100d,secondary:#0a100d");
        ele3.setAttribute('colors',"primary:#0a100d,secondary:#0a100d");
        ele4.setAttribute('colors',"primary:#0a100d,secondary:#0a100d");
        ele5.setAttribute('colors' , "primary:#ff7f11");
        ele6.setAttribute('colors' , "primary:#ff7f11");
        ele7.setAttribute('colors' , "primary:#ff7f11");
        ele8.setAttribute('colors' , "primary:#ff7f11,secondary:#0a100d");
        ele9.setAttribute('colors' , "primary:#0a100d,secondary:#ff7f11");
        ele10.setAttribute('colors' , "primary:#0a100d,secondary:#ff7f11");
        ele11.setAttribute('colors' , "primary:#0a100d,secondary:#ff7f11");
    }
    
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });