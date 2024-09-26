// Обработчик для кнопки "toggle-listening-menu"
document
  .getElementById("toggle-listening-menu")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Отключаем переход по ссылке

    const menu = document.getElementById("listening-menu");
    const thumbIcon = this.querySelector(".activeIconThumb"); // Поиск иконки внутри текущей кнопки

    menu.classList.toggle("open");
    thumbIcon.classList.toggle("isActive");
  });

// Обработчик для кнопки "toggle-booking-menu"
document
  .getElementById("toggle-booking-menu")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Отключаем переход по ссылке

    const menu = document.getElementById("booking-menu");
    const thumbIcon = this.querySelector(".activeIconThumb"); // Поиск иконки внутри текущей кнопки

    menu.classList.toggle("open");
    thumbIcon.classList.toggle("isActive");
  });
