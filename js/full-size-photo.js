import { isEscapeKey } from './utils.js';

const bigPhotoMenu = document.querySelector('.big-picture');
const commentsCounter = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const closeButton = bigPhotoMenu.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

const renderComments = (comments) => {
  const commentsList = document.querySelector('.social__comments');
  commentsList.innerHTML = '';

  for (let i = 0; i < comments.length; i++) {
    const comment = document.createElement('li');
    comment.classList.add('social__comment');
    comment.insertAdjacentHTML('beforeend', `
    <img
      class="social__picture"
      src="${comments[i].avatar}"
      alt="${comments[i].name}"
      width="35" height="35">
  <p class="social__text">${comments[i].message}</p>
  `);
    commentsList.append(comment);
  }

};

function openBigPhoto (photo) {
  bigPhotoMenu.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  bigPhotoMenu.querySelector('img').src = photo.url;
  bigPhotoMenu.querySelector('.likes-count').textContent = photo.likes;
  bigPhotoMenu.querySelector('.social__caption').textContent = photo.description;

  commentsCounter.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  renderComments(photo.comments);

}

function closeBigPhoto () {
  bigPhotoMenu.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}


closeButton.addEventListener('click', closeBigPhoto);

export { openBigPhoto };

