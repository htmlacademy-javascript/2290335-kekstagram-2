import { isEscapeKey } from './utils.js';

const bigPhotoMenuElement = document.querySelector('.big-picture');
const closeButtonElement = bigPhotoMenuElement.querySelector('.big-picture__cancel');
const templateComment = bigPhotoMenuElement.querySelector('.social__comment');
const commentsListElement = bigPhotoMenuElement.querySelector('.social__comments');
const commentsListFragment = document.createDocumentFragment();

const commentsLoaderElement = bigPhotoMenuElement.querySelector('.comments-loader');
const commentsCounterElement = bigPhotoMenuElement.querySelector('.social__comment-shown-count');
const commentsTotalElement = bigPhotoMenuElement.querySelector('.social__comment-total-count');
let plusComments = 5;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

function renderComments (comments) {
  commentsListElement.innerHTML = '';

  if (plusComments > comments.length) {
    plusComments = comments.length;
  }

  for (let i = 0; i < plusComments; i++) {

    const element = templateComment.cloneNode(true);
    element.querySelector('.social__picture').src = comments[i].avatar;
    element.querySelector('.social__picture').alt = comments[i].name;
    element.querySelector('.social__text').textContent = comments[i].message;

    commentsListFragment.append(element);
  }

  commentsListElement.append(commentsListFragment);
  if (plusComments >= comments.length) {
    plusComments = comments.length;
  }
  commentsCounterElement.textContent = plusComments;
  commentsTotalElement.textContent = comments.length;
  if (plusComments === comments.length) {
    commentsLoaderElement.classList.add('hidden');
  }
}

const addMoreComments = (comments) => {

  if (plusComments < comments.length) {
    plusComments += 5;
  }

};

const restartplusComments = () => {
  plusComments = 5;
  commentsLoaderElement.classList.remove('hidden');
};

const lol = (comments) => {
  addMoreComments(comments);
  renderComments(comments);
};


function openBigPhoto (photo) {
  bigPhotoMenuElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  bigPhotoMenuElement.querySelector('img').src = photo.url;
  bigPhotoMenuElement.querySelector('.likes-count').textContent = photo.likes;
  bigPhotoMenuElement.querySelector('.social__caption').textContent = photo.description;

  renderComments(photo.comments);
  commentsLoaderElement.addEventListener('click', () => {
    lol(photo.comments);
  });
}

function closeBigPhoto () {
  bigPhotoMenuElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  // commentsLoaderElement.removeEventListener('click', lol);
  restartplusComments();
}

closeButtonElement.addEventListener('click', closeBigPhoto);

export { openBigPhoto };

