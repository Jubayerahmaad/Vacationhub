// inisilize counter up 

$('.counter').counterUp();

// swipe slide innisilize

var swiper = new Swiper(".myswiper", {
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });