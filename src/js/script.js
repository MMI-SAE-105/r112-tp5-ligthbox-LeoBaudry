// *** LIGHTBOX ***

const thumbnails = document.querySelectorAll('ul li img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');
const body = document.body;


thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    const fullImageUrl = thumbnail.dataset.fullImg; 
    lightboxImage.src = fullImageUrl; 
    lightbox.classList.add('open'); 
    body.classList.add('lightbox-active'); 
  });
});

function closeLightbox() {
  lightbox.classList.remove('open'); 
  body.classList.remove('lightbox-active'); 
}

lightbox.addEventListener('click', closeLightbox)