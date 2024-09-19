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
  } else {
    swiperSection.classList.remove("fixed");
    offersSection.classList.remove("js-offers-section");
  }

  const pseudoElementHeight = 357;

  if (offersRect.top <= pseudoElementHeight) {
    bgGradient.classList.add("jsGradient");
    offersSection.classList.add("fixed-before");
  } else {
    offersSection.classList.remove("fixed-before");
    bgGradient.classList.remove("jsGradient");
  }
});
