window.addEventListener("scroll", function () {
  const pageHeader = document.querySelector(".page-header");
  const swiperSection = document.querySelector(".swiper-section");
  const offersSection = document.querySelector(".offers-section");
  const headerRect = pageHeader.getBoundingClientRect();
  const offersRect = offersSection.getBoundingClientRect();

  // Если нижняя граница header находится выше верхней границы вьюпорта
  if (headerRect.bottom <= 0) {
    swiperSection.classList.add("fixed");
    offersSection.classList.add("js-offers-section");
    offersSection.classList.add("js-bg-color");
  } else {
    swiperSection.classList.remove("fixed");
    offersSection.classList.remove("js-offers-section");
    offersSection.classList.remove("js-bg-color");
  }

  // Высота псевдоэлемента (340px)
  const pseudoElementHeight = 360;

  // Если верхняя граница offersSection находится выше высоты псевдоэлемента, фиксируем псевдоэлемент
  if (offersRect.top <= pseudoElementHeight) {
    offersSection.classList.add("fixed-before");
    offersSection.classList.remove("fix-before");
  } else {
    offersSection.classList.remove("fixed-before");
    offersSection.classList.add("fix-before");
  }
});
