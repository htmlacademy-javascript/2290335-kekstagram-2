
import { getData } from './api.js';
import { showAlert, debounce } from './utils.js';
import { renderPhotos } from './render.js';
import { onThumbnailClick } from './full-size-photo.js';
import { openModalMenu, setUserFormSubmit } from './user-form.js';
import { showFilters, setDefaultClick, comparePopular, setPopularClick, setRandomClick, shuffle } from './sort.js';
import { getPreview } from './avatar.js';

const NUMBER_PHOTOS_RANDOM = 10;
const RERENDER_DELAY = 500;

const uloadInputElement = document.querySelector('.img-upload__input');

getData()
  .then((photos) => {
    renderPhotos(photos);
    onThumbnailClick(photos);
    showFilters();

    setDefaultClick(debounce(
      () => {
        renderPhotos(photos);
        onThumbnailClick(photos);
      }),
    RERENDER_DELAY);

    setPopularClick(debounce(
      () => {
        const photosCopyPopular = photos.slice().sort(comparePopular);
        renderPhotos(photosCopyPopular);
        onThumbnailClick(photos);
      }),
    RERENDER_DELAY);

    setRandomClick(debounce(
      () => {
        const photosCopyRandom = shuffle(photos.slice()).slice(0, NUMBER_PHOTOS_RANDOM);
        renderPhotos(photosCopyRandom);
        onThumbnailClick(photos);
      }, RERENDER_DELAY)
    );
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setUserFormSubmit();
getPreview();

uloadInputElement.addEventListener('change', openModalMenu);

