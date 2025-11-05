import { isEscapeKey } from './utils.js';

const bigPhotoMenu = document.querySelector('.big-picture');
const closeButton = bigPhotoMenu.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

function openBigPhoto (photo) {
  bigPhotoMenu.querySelector('img').src = photo.url;

  bigPhotoMenu.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigPhoto () {
  bigPhotoMenu.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}


closeButton.addEventListener('click', closeBigPhoto);

export { openBigPhoto };

