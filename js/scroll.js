window.addEventListener("scroll", function () {
  const pageHeader = document.querySelector(".page-header");
  const swiperSection = document.querySelector(".swiper-section");
  const offersSection = document.querySelector(".offers-section");
  const headerRect = pageHeader.getBoundingClientRect();

  // Если нижняя граница header находится выше верхней границы вьюпорта
  if (headerRect.bottom <= 0) {
    swiperSection.classList.add("fixed");
    offersSection.classList.add("js-offers-section");
  } else {
    swiperSection.classList.remove("fixed");
    offersSection.classList.remove("js-offers-section");
  }
});
