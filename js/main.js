import { similarPhotos } from './creation-photos.js';
import { renderPhotos } from './render.js';
import { openBigPhoto } from './full-size-photo.js';
import './user-form.js';

const picturesElement = document.querySelector('.pictures');
const thumbnails = picturesElement.getElementsByClassName('picture');

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
