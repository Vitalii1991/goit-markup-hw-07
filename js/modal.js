(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", (event) => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  });

  const keydownHandler = (event) => {
    console.log("keydown event occurred");
    if (event.key === "Escape") {
      toggleModal();
    }
  };

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");

    if (refs.modal.classList.contains("is-hidden")) {
      window.removeEventListener("keydown", keydownHandler);
    } else {
      window.addEventListener("keydown", keydownHandler);
    }
  }
})();
