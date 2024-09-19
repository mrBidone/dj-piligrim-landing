// Инициализация Swiper
const swiperHero = new Swiper("#swiperHero", {
  mousewheel: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  centeredSlides: false,
  loop: true,
  spaceBetween: 10,
  autoplay: false,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass: "swiper-pagination-bullet-custom",
    bulletActiveClass: "swiper-pagination-bullet-active-custom",
  },
});
