const bigPhotoMenuElement = document.querySelector('.big-picture');

const templateComment = bigPhotoMenuElement.querySelector('.social__comment');
const commentsListElement = bigPhotoMenuElement.querySelector('.social__comments');
const commentsListFragment = document.createDocumentFragment();

const renderComments = (comments) => {

  commentsListElement.innerHTML = '';

  comments.forEach((comment) => {
    const element = templateComment.cloneNode(true);
    element.querySelector('.social__picture').src = comment.avatar;
    element.querySelector('.social__picture').alt = comment.name;
    element.querySelector('.social__text').textContent = comment.message;

    commentsListFragment.append(element);
  });

  commentsListElement.append(commentsListFragment);
};

export { renderComments };
