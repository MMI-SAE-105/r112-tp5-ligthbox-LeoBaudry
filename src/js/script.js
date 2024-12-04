// *** LIGHTBOX ***

const thumbnails = document.querySelectorAll('ul li img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('#lightbox img');
const body = document.body;


thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    const fullImageUrl = thumbnail.dataset.fullImg; 
    lightboxImage.src = fullImageUrl; 
    lightbox.showModal();
  });
});


function closeLightbox() {
    lightbox.close();
}

lightbox.addEventListener('click', closeLightbox)