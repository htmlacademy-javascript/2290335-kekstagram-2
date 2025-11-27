
import { getData } from './api.js';
import { showAlert } from './utils.js';
import { renderPhotos } from './render.js';
import { openBigPhoto } from './full-size-photo.js';
import { openModalMenu, setUserFormSubmit } from './user-form.js';
import { setDefaultClick, comparePopular, setPopularClick, setRandomClick, shuffle } from './sort.js';

const thumbnails = document.getElementsByClassName('picture');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const filterBar = document.querySelector('.img-filters');

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
    filterBar.classList.remove('img-filters--inactive');
    setDefaultClick(() => renderPhotos(photos));
    const photosCopyPopular = photos.slice().sort(comparePopular);
    setPopularClick(() => renderPhotos(photosCopyPopular));
    const photosCopyRandom = shuffle(photos.slice()).slice(0, 10);
    setRandomClick(() => renderPhotos(photosCopyRandom));
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setUserFormSubmit();

imgUploadInput.addEventListener('change', openModalMenu);

