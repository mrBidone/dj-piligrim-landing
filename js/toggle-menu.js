document
  .getElementById("toggle-menu")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Отключаем переход по ссылке

    const menu = document.getElementById("listening-menu");
    const listeningList = document.getElementById("listening-links-list");
    const thumbIcon = document.getElementById("activeIconThumb");

    menu.classList.toggle("open");
    listeningList.classList.toggle("open");
    thumbIcon.classList.toggle("isActive");
  });
