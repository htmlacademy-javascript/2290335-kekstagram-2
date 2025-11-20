import { similarPhotos } from './creation-photos.js';
import { renderPhotos } from './render.js';
import { openBigPhoto } from './full-size-photo.js';
import { openModalMenu } from './user-form.js';

const picturesElement = document.querySelector('.pictures');
const thumbnails = picturesElement.getElementsByClassName('picture');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');

const photos = similarPhotos();
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

imgUploadInput.addEventListener('change', openModalMenu);

