import { similarPhotos } from './creation-photos.js';
import { renderPhotos } from './render.js';
import { openBigPhoto } from './full-size-photo.js';

const picturesContainer = document.querySelector('.pictures');
const thumbnails = picturesContainer.getElementsByClassName('picture');

const photos = similarPhotos();
renderPhotos(photos);

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', () => {
    openBigPhoto(photos[i]);
  });
}

