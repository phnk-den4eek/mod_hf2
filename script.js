const screenshotImages = [
  "./extracted/images/fbcba355a0def1e13c2dc8737d1c5df30c04f857",
  "./extracted/images/197447dccb2df7b50adc02287ca061e1599fe1cf",
  "./extracted/images/fbcba355a0def1e13c2dc8737d1c5df30c04f857",
  "./extracted/images/197447dccb2df7b50adc02287ca061e1599fe1cf"
];

const shotStrip = document.getElementById("shotStrip");
const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src) {
  lightboxImage.src = src;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.removeAttribute("src");
  document.body.style.overflow = "";
}

function createImageElement(src, alt) {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.loading = "lazy";
  return image;
}

function renderShotFrames() {
  screenshotImages.slice(0, 3).forEach((src, index) => {
    const frame = document.createElement("button");
    frame.className = "shot-frame shot-frame--filled";
    frame.type = "button";
    frame.setAttribute("aria-label", `Відкрити скріншот ${index + 1}`);
    frame.appendChild(createImageElement(src, `Скріншот ${index + 1}`));
    frame.addEventListener("click", () => openLightbox(src));
    shotStrip.appendChild(frame);
  });
}

function renderGallery() {
  screenshotImages.forEach((src, index) => {
    const card = document.createElement("button");
    card.className = "gallery-card gallery-card--filled";
    card.type = "button";
    card.setAttribute("aria-label", `Переглянути приклад ${index + 1}`);
    card.appendChild(createImageElement(src, `Приклад моду ${index + 1}`));
    card.addEventListener("click", () => openLightbox(src));
    galleryGrid.appendChild(card);
  });
}

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

lightboxClose.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) {
    closeLightbox();
  }
});

renderShotFrames();
renderGallery();