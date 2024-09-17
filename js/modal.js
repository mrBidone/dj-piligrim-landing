document
  .getElementById("modal-open")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const modal = document.getElementById("data-modal");

    modal.classList.remove("isHidden");

    function closeModal() {
      modal.classList.add("isHidden");
      document.removeEventListener("keydown", handleEscClose);
      modal.removeEventListener("click", handleOutsideClick);
    }
    function handleEscClose(event) {
      if (event.key === "Escape") {
        closeModal();
      }
    }
    function handleOutsideClick(event) {
      const modalWindow = document.querySelector(".modal-window");
      if (!modalWindow.contains(event.target)) {
        closeModal();
      }
    }
    document.addEventListener("keydown", handleEscClose);
    modal.addEventListener("click", handleOutsideClick);
  });
