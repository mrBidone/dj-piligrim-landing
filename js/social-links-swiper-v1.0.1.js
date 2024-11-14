const swiperSocialLinks = new Swiper("#swiperSocialLinks", {
  width: 350,
  slidesPerView: 5,
  spaceBetween: 4,
  centeredSlides: false,
  loop: false,
  touchRatio: 1,
  resistance: true,
  resistanceRatio: 0.8,
  autoplay: false,
  allowTouchMove: true,
  breakpoints: {
    768: {
      width: 564,
      enabled: false,
      slidesPerView: 8,
      spaceBetween: 2,
    },
  },
});
