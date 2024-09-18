window.addEventListener("scroll", function () {
  const pageHeader = document.querySelector(".page-header");
  const swiperSection = document.querySelector(".swiper-section");
  const offersSection = document.querySelector(".offers-section");
  const bgGradient = document.querySelector(".track-swiper-bg-graident");
  const headerRect = pageHeader.getBoundingClientRect();
  const offersRect = offersSection.getBoundingClientRect();

  if (headerRect.bottom <= 0) {
    swiperSection.classList.add("fixed");
    offersSection.classList.add("js-offers-section");
    offersSection.classList.add("js-bg-color");
  } else {
    swiperSection.classList.remove("fixed");
    offersSection.classList.remove("js-offers-section");
    offersSection.classList.remove("js-bg-color");
  }

  const pseudoElementHeight = 350;

  if (offersRect.top <= pseudoElementHeight) {
    offersSection.classList.add("fixed-before");
    bgGradient.classList.add("jsGradient");
  } else {
    offersSection.classList.remove("fixed-before");
    bgGradient.classList.remove("jsGradient");
  }
});
