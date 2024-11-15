document.addEventListener("click", function (event) {
  const toggleListeningBtn = document.getElementById("toggle-listening-menu");
  const toggleBookingBtn = document.getElementById("toggle-booking-menu");

  const listeningMenu = document.getElementById("listening-menu");
  const bookingMenu = document.getElementById("booking-menu");

  const listeningThumbIcon =
    toggleListeningBtn.querySelector(".activeIconThumb");
  const bookingThumbIcon = toggleBookingBtn.querySelector(".activeIconThumb");

  if (event.target.closest("#toggle-listening-menu")) {
    event.preventDefault();
    if (bookingMenu.classList.contains("open")) {
      bookingMenu.classList.remove("open");
      bookingThumbIcon.classList.remove("isActive");
    }
    listeningMenu.classList.toggle("open");
    listeningThumbIcon.classList.toggle("isActive");
  } else if (event.target.closest("#toggle-booking-menu")) {
    event.preventDefault();
    if (listeningMenu.classList.contains("open")) {
      listeningMenu.classList.remove("open");
      listeningThumbIcon.classList.remove("isActive");
    }
    bookingMenu.classList.toggle("open");
    bookingThumbIcon.classList.toggle("isActive");
  }
});
