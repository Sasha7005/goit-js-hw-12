import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  showLoader,
  hideLoader,
  hideLoadMore,
  showLoadMore,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loadMore = document.querySelector('.btn-load');

let query = '';
let page = 1;
let totalPages = 0;

form.addEventListener('submit', handleSubmit);
loadMore.addEventListener('click', onLoadMore);

async function handleSubmit(evt) {
  evt.preventDefault();

  query = evt.target.elements['search-text'].value.trim();
  if (!query) {
    iziToast.warning({
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  hideLoadMore();
  showLoader();
  page = 1;

  try {
    const data = await getImagesByQuery(query, page);
    hideLoader();

    if (!data.totalHits) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
    totalPages = Math.ceil(data.totalHits / 15);

    if (page < totalPages) {
      showLoadMore();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    hideLoader();
    iziToast.error({
      message: 'Sorry, something went wrong. Please try again later!',
      position: 'topRight',
    });
  }
}
async function onLoadMore() {
  page++;
  hideLoadMore();
  showLoader();
  try {
    const data = await getImagesByQuery(query, page);
    hideLoader();
    createGallery(data.hits);

    setTimeout(() => {
      const item = document.querySelector('.gallery-item');
      if (item) {
        const rowHeight = item.getBoundingClientRect().height;
        window.scrollBy({
          top: 2 * rowHeight,
          behavior: 'smooth',
        });
      }
    }, 300);
    if (page >= totalPages) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      hideLoadMore();
    } else {
      showLoadMore();
    }
  } catch (error) {
    hideLoader();
    showLoadMore();
    iziToast.error({
      message: 'Sorry, something went wrong. Please try again!',
      position: 'topRight',
    });
  }
}
