"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const showBtnModal = document.querySelectorAll(".show-modal");
const closeBtnModal = document.querySelector(".close-modal");
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < showBtnModal.length; i++) {
  showBtnModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

closeBtnModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
