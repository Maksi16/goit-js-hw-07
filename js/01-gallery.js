import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

const imgEl = galleryItems
  .map((galleryItem) => {
    const itemEl = `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`;
    return itemEl;
  })
  .join(" ");

const galleryBox = document.querySelector(".gallery");

galleryBox.innerHTML = imgEl;

galleryBox.addEventListener("click", onModalOpen);

let instance;
function onModalClose() {
  instance.close();
}
function onEscClose(e) {
  if (e.code === "Escape") {
    onModalClose();
  }
}

function onModalOpen(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  instance = basicLightbox.create(`<img src="${e.target.dataset.source}"/>`, {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscClose);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscClose);
    },
  });
  instance.show();
}
