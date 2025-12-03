import { getData } from './api.js';
import { showAlert } from './utils.js';
import { renderPhotos } from './render.js';
import { onModalMenuOpen, setFormSubmit } from './user-form.js';
import { showFilters, setFilterClick } from './filter.js';
import { getPreview } from './avatar.js';

const uloadInputElement = document.querySelector('.img-upload__input');

const initializate = (data) => {
  renderPhotos(data);
};

getData()
  .then((photos) => {
    showFilters();
    initializate(photos.slice());
    setFilterClick(photos, renderPhotos);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setFormSubmit();
getPreview();

uloadInputElement.addEventListener('change', onModalMenuOpen);

