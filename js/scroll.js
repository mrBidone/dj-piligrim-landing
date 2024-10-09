// ==================== МАКСИМАЛЬНО УДАЧНІЙ ВАРИАНТ =======================

// window.addEventListener("scroll", function () {
//   const pageHeader = document.querySelector(".page-header");
//   const swiperSection = document.querySelector(".swiper-section");
//   const offersSection = document.querySelector(".offers-section");
//   const headerRect = pageHeader.getBoundingClientRect();
//   const offersRect = offersSection.getBoundingClientRect();
//   const swiperRect = swiperSection.getBoundingClientRect();

//   const swiperHeight = swiperRect.height;

//   // Рассчитываем перекрытие
//   const overlap = Math.max(0, swiperRect.bottom - offersRect.top);

//   // const overlapPercent = (overlap / swiperHeight) * 100;

//   // Изменяем размеры и прозрачность при любом перекрытии
//   if (overlap > 0) {
//     // Рассчитываем процент перекрытия
//     const overlapPercent = overlap / swiperHeight;
//     console.log("перекрітие :", overlapPercent);

//     // Устанавливаем конечный размер (например, 30% от начального размера)
//     const minScale = 0.6; // Минимальный масштаб
//     const maxScale = 1; // Максимальный масштаб

//     // Рассчитываем текущий масштаб
//     const currentScale = maxScale - overlapPercent * (maxScale - minScale);
//     const currentOpacity = 1 - overlapPercent; // Прозрачность остается такой же

//     // Применяем новые значения через inline-стили
//     swiperSection.style.transform = `scale(${currentScale})`;
//     swiperSection.style.opacity = currentOpacity;

//     // Проверяем, достигнут ли минимальный масштаб
//     if (overlap >= 340) {
//       offersSection.classList.add("jsSectionBg");
//     } else {
//       offersSection.classList.remove("jsSectionBg");
//     }
//   } else {
//     // Возвращаем блок к исходным значениям, если нет перекрытия
//     swiperSection.style.transform = "scale(1)";
//     swiperSection.style.opacity = "1";
//     offersSection.classList.remove("jsSectionBg"); // Удаляем класс, если нет перекрытия
//   }
// });

window.addEventListener("scroll", function () {
  const pageHeader = document.querySelector(".page-header");
  const swiperSection = document.querySelector(".swiper-section");
  const offersSection = document.querySelector(".offers-section");
  const headerRect = pageHeader.getBoundingClientRect();
  const offersRect = offersSection.getBoundingClientRect();
  const swiperRect = swiperSection.getBoundingClientRect();

  const swiperHeight = swiperRect.height;

  // Рассчитываем перекрытие
  const overlap = Math.max(0, swiperRect.bottom - offersRect.top);

  // Изменяем размеры и прозрачность при любом перекрытии
  if (overlap > 0) {
    // Рассчитываем процент перекрытия
    const overlapPercent = overlap / swiperHeight;

    // Устанавливаем конечный размер (например, 30% от начального размера)
    const minScale = 0.5; // Минимальный масштаб
    const maxScale = 1; // Максимальный масштаб

    // Рассчитываем текущий масштаб
    const currentScale = maxScale - overlapPercent * (maxScale - minScale);
    const currentOpacity = 1 - overlapPercent; // Прозрачность остаётся такой же

    // Применяем новые значения через inline-стили
    swiperSection.style.transform = `scale(${currentScale})`;
    swiperSection.style.opacity = currentOpacity;

    // Изменяем прозрачность для .page-header
    // const headerOpacity = Math.max(0.4, 1 - overlapPercent); // Прозрачность от 100% до 10%
    // pageHeader.style.opacity = headerOpacity;

    // Проверяем, достигнут ли минимальный масштаб
    if (overlap >= 340) {
      offersSection.classList.add("jsSectionBg");
    } else {
      offersSection.classList.remove("jsSectionBg");
    }
  } else {
    // Возвращаем блок к исходным значениям, если нет перекрытия
    swiperSection.style.transform = "scale(1)";
    swiperSection.style.opacity = "1";
    pageHeader.style.opacity = "1"; // Возвращаем прозрачность заголовка
    offersSection.classList.remove("jsSectionBg"); // Удаляем класс, если нет перекрытия
  }
});
