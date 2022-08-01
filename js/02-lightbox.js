import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

{
  /* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>; */
}

const imgEl = galleryItems
  .map((galleryItem) => {
    const itemEl = `
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      alt="${galleryItem.description}"
    />
  </a>`;
    return itemEl;
  })
  .join(" ");

const galleryBox = document.querySelector(".gallery");

galleryBox.innerHTML = imgEl;
galleryBox.addEventListener("click", onModalOpen);

function onModalOpen(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
