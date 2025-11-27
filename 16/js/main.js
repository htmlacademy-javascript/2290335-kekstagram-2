
import { getData } from './api.js';
import { showAlert, debounce } from './utils.js';
import { renderPhotos } from './render.js';
import { openBigPhoto } from './full-size-photo.js';
import { openModalMenu, setUserFormSubmit } from './user-form.js';
import { setDefaultClick, comparePopular, setPopularClick, setRandomClick, shuffle } from './sort.js';
import { getPreview } from './avatar.js';

const NUMBER_PHOTOS_RANDOM = 10;
const RERENDER_DELAY = 500;

const thumbnails = document.getElementsByClassName('picture');
const uploadFormElement = document.querySelector('.img-upload__form');
const uloadInputElement = uploadFormElement.querySelector('.img-upload__input');
const imgFiltersElement = document.querySelector('.img-filters');

getData()
  .then((photos) => {
    renderPhotos(photos);
    const arrayOfThumbnails = Array.from(thumbnails);
    arrayOfThumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener('click', (event) => {
        event.preventDefault();
        const currentId = event.target.closest('.picture').id;
        const currentPhoto = photos.find(
          (item) => String(item.id) === String(currentId)
        );
        openBigPhoto(currentPhoto);
      });
    });
    imgFiltersElement.classList.remove('img-filters--inactive');

    setDefaultClick(debounce(
      () => renderPhotos(photos)),
    RERENDER_DELAY);

    const photosCopyPopular = photos.slice().sort(comparePopular);
    setPopularClick(debounce(
      () => renderPhotos(photosCopyPopular)),
    RERENDER_DELAY);

    setRandomClick(debounce(
      () => {
        const photosCopyRandom = shuffle(photos.slice()).slice(0, NUMBER_PHOTOS_RANDOM);
        renderPhotos(photosCopyRandom);
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

