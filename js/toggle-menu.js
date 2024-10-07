document
  .getElementById("toggle-listening-menu")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const listeningMenu = document.getElementById("listening-menu");
    const bookingMenu = document.getElementById("booking-menu");
    const thumbIcon = this.querySelector(".activeIconThumb");
    const bookingThumbIcon = document
      .getElementById("toggle-booking-menu")
      .querySelector(".activeIconThumb");

    if (bookingMenu.classList.contains("open")) {
      bookingMenu.classList.remove("open");
      bookingThumbIcon.classList.remove("isActive");
    }

    listeningMenu.classList.toggle("open");
    thumbIcon.classList.toggle("isActive");
  });

document
  .getElementById("toggle-booking-menu")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bookingMenu = document.getElementById("booking-menu");
    const listeningMenu = document.getElementById("listening-menu");
    const thumbIcon = this.querySelector(".activeIconThumb");
    const listeningThumbIcon = document
      .getElementById("toggle-listening-menu")
      .querySelector(".activeIconThumb");

    if (listeningMenu.classList.contains("open")) {
      listeningMenu.classList.remove("open");
      listeningThumbIcon.classList.remove("isActive");
    }

    bookingMenu.classList.toggle("open");
    thumbIcon.classList.toggle("isActive");
  });
