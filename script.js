"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const showBtnModal = document.querySelectorAll(".show-modal");
const closeBtnModal = document.querySelector(".close-modal");
const users = [
  {
    id: 1,
    name: "Ismail",
    surname: "Teymurzade",
    image:
      "https://im.indiatimes.in/content/2020/Jun/RTX75XWH_5ef336cc42392.JPG?w=725&h=380",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa reprehenderit voluptatem perspiciatis voluptatibus animi fugit dolore iusto ex maxime dolores maiores quos corrupti facere sunt repudiandae voluptatum, rem minus",
      work:{
      name:'Software Engineer',
      company:'goggle',
      }
  },
  {
    id: 2,
    name: "Ismail",
    surname: "Teymurzade",
    image:
      "https://im.indiatimes.in/content/2020/Jun/RTX75XWH_5ef336cc42392.JPG?w=725&h=380",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa reprehenderit voluptatem perspiciatis voluptatibus animi fugit dolore iusto ex maxime dolores maiores quos corrupti facere sunt repudiandae voluptatum, rem minus",
      work:{
      name:'Software Engineer',
      company:'goggle',
      }
  },
];

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
