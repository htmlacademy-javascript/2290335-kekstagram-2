import { isEscapeKey } from './utils.js';
import { renderComments } from './full-size-render-comments.js';

const bigPhotoMenuElement = document.querySelector('.big-picture');
const closeButtonElement = bigPhotoMenuElement.querySelector('.big-picture__cancel');

const commentsCounterElement = bigPhotoMenuElement.querySelector('.social__comment-count');
const commentsLoaderElement = bigPhotoMenuElement.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

function openBigPhoto (photo) {
  bigPhotoMenuElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  bigPhotoMenuElement.querySelector('img').src = photo.url;
  bigPhotoMenuElement.querySelector('.likes-count').textContent = photo.likes;
  bigPhotoMenuElement.querySelector('.social__caption').textContent = photo.description;

  commentsCounterElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
  renderComments(photo.comments);
}

function closeBigPhoto () {
  bigPhotoMenuElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}

closeButtonElement.addEventListener('click', closeBigPhoto);

export { openBigPhoto };

