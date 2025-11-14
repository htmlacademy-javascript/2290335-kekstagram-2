import { isEscapeKey } from './utils.js';

const bigPhotoMenuElement = document.querySelector('.big-picture');
const closeButtonElement = bigPhotoMenuElement.querySelector('.big-picture__cancel');
const templateComment = bigPhotoMenuElement.querySelector('.social__comment');
const commentsListElement = bigPhotoMenuElement.querySelector('.social__comments');
const commentsListFragment = document.createDocumentFragment();

const commentsLoaderElement = bigPhotoMenuElement.querySelector('.comments-loader');
const commentsCounterElement = bigPhotoMenuElement.querySelector('.social__comment-shown-count');
const commentsTotalElement = bigPhotoMenuElement.querySelector('.social__comment-total-count');
let visibleComments = 5;
let comments = [];

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

function renderComments () {
  commentsListElement.innerHTML = '';

  //Если комментов меньше нужного или их максимальное количество, скрыть кнопку
  if (visibleComments >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
  }
  //Не дает счетчику быть больше числа комментов
  if (visibleComments > comments.length) {
    visibleComments = comments.length;
  }
  commentsCounterElement.textContent = visibleComments;
  commentsTotalElement.textContent = comments.length;

  for (let i = 0; i < visibleComments; i++) {
    const element = templateComment.cloneNode(true);
    element.querySelector('.social__picture').src = comments[i].avatar;
    element.querySelector('.social__picture').alt = comments[i].name;
    element.querySelector('.social__text').textContent = comments[i].message;

    commentsListFragment.append(element);
  }
  commentsListElement.append(commentsListFragment);
}

const addMoreComments = () => {
  if (visibleComments < comments.length) {
    visibleComments += 5;
  }
};

const resetNumberVisibleComments = () => {
  visibleComments = 5;
  commentsLoaderElement.classList.remove('hidden');
};

const onCommentsLoaderAdd = () => {
  addMoreComments(comments);
  renderComments(comments);
};

function openBigPhoto (photo) {
  comments = photo.comments;
  bigPhotoMenuElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  bigPhotoMenuElement.querySelector('img').src = photo.url;
  bigPhotoMenuElement.querySelector('.likes-count').textContent = photo.likes;
  bigPhotoMenuElement.querySelector('.social__caption').textContent = photo.description;

  renderComments(photo.comments);
  commentsLoaderElement.addEventListener('click', onCommentsLoaderAdd);
}

function closeBigPhoto () {
  bigPhotoMenuElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoaderElement.removeEventListener('click', onCommentsLoaderAdd);
  resetNumberVisibleComments();
}

closeButtonElement.addEventListener('click', closeBigPhoto);

export { openBigPhoto };

