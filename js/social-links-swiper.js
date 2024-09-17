const swiperSocialLinks = new Swiper("#swiperSocialLinks", {
  width: 350,
  slidesPerView: 5,
  spaceBetween: 4,
  centeredSlides: false,
  loop: false,
  touchRatio: 1,
  resistance: true,
  resistanceRatio: 0.85,
  autoplay: false,
  allowTouchMove: true,
  on: {
    tap: function () {
      swiperSocialLinks.slideNext();
    },
  },
});
