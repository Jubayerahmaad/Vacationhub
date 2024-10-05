// inisilize counter up 

$('.counter').counterUp();

// swipe slide innisilize tour place 

var swiper = new Swiper(".myswiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: 'true',
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {

      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      
      600: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      
      950: {
        slidesPerView: 3,
        spaceBetween: 40
      }}
  });

  // testimonial slide 

  var swiper = new Swiper(".myswipe", {
    slidesPerView: 3,
    spaceBetween: 30,
    centerSlide: 'true',
    grabCursor: 'true',

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {

      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      
      600: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      
      950: {
        slidesPerView: 3,
        spaceBetween: 40
      }}
  });

  /* Humburger Navbar*/
  function menuToggoler(){
    var navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("open");
  }