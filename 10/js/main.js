import { similarPhotos } from './creation-photos.js';
import { renderPhotos } from './render.js';
import { openBigPhoto } from './full-size-photo.js';

const picturesElement = document.querySelector('.pictures');
const thumbnails = picturesElement.getElementsByClassName('picture');

const photos = similarPhotos();
renderPhotos(photos);

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', (event) => {
    event.preventDefault();
    const currentId = event.target.closest('.picture').id;
    const currentPhoto = photos.find(
      (item) => String(item.id) === String(currentId)
    );
    openBigPhoto(currentPhoto);
  });
}

