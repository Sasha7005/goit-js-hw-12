import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.span-loader');
const lightbox = new SimpleLightbox('.gallery-link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 1,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
      <ul class="gallery-desc">
      <li class="gallery-info">
      <span class="info-names">Likes</span>
      <span class="info-item">${likes}</span>
      </li>
      <li class="gallery-info">
      <span class="info-names">Views</span>
      <span class="info-item">${views}</span>
      </li>
      <li class="gallery-info">
      <span class="info-names">Comments</span>
      <span class="info-item">${comments}</span>
      </li>
      <li class="gallery-info">
      <span class="info-names">Downloads</span>
      <span class="info-item">${downloads}</span>
      </li>
      </ul>
      </a>
      </li>
        `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
export function clearGallery() {
  gallery.innerHTML = '';
}
export function showLoader() {
  loader.classList.add('active');
}

export function hideLoader() {
  loader.classList.remove('active');
}
