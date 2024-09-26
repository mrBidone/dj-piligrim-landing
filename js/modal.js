// function disableScroll() {
//   window.addEventListener("scroll", preventScroll);
//   window.addEventListener("wheel", preventScroll, { passive: false });
//   window.addEventListener("touchmove", preventScroll, { passive: false });
//   window.addEventListener("keydown", preventArrowScroll);
// }

// function enableScroll() {
//   window.removeEventListener("scroll", preventScroll);
//   window.removeEventListener("wheel", preventScroll, { passive: false });
//   window.removeEventListener("touchmove", preventScroll, { passive: false });
//   window.removeEventListener("keydown", preventArrowScroll);
// }

// function preventScroll(e) {
//   e.preventDefault();
//   e.stopPropagation();
//   return false;
// }

// function preventArrowScroll(e) {
//   if ([38, 40, 33, 34, 36, 35].includes(e.keyCode)) {
//     e.preventDefault();
//     return false;
//   }
// }

// document
//   .getElementById("modal-open")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     const modal = document.getElementById("data-modal");
//     disableScroll();
//     modal.classList.remove("isHidden");

//     function closeModal() {
//       modal.classList.add("isHidden");
//       enableScroll();
//       document.removeEventListener("keydown", handleEscClose);
//       modal.removeEventListener("click", handleOutsideClick);
//     }
//     function handleEscClose(event) {
//       if (event.key === "Escape") {
//         closeModal();
//       }
//     }
//     function handleOutsideClick(event) {
//       const modalWindow = document.querySelector(".modal-window");
//       if (!modalWindow.contains(event.target)) {
//         closeModal();
//       }
//     }
//     document.addEventListener("keydown", handleEscClose);
//     modal.addEventListener("click", handleOutsideClick);
//   });
