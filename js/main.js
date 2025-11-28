import { getData } from './api.js';
import { showAlert } from './utils.js';
import { renderPhotos } from './render.js';
import { onThumbnailClick } from './full-size-photo.js';
import { openModalMenu, setUserFormSubmit } from './user-form.js';
import { showFilters, setFilterClick } from './sort.js';
import { getPreview } from './avatar.js';
// import { debounce } from './utils.js';

// const RERENDER_DELAY = 2000;

const uloadInputElement = document.querySelector('.img-upload__input');

const initializate = (data) => {
  renderPhotos(data);
  onThumbnailClick(data);
};

getData()
  .then((photos) => {
    showFilters();
    initializate(photos.slice());
    setFilterClick(photos, renderPhotos, onThumbnailClick);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setUserFormSubmit();
getPreview();

uloadInputElement.addEventListener('change', openModalMenu);

