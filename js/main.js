import { similarPhotos } from './creation-photos.js';
import { renderPhotos } from './render.js';
import { openBigPhoto } from './full-size-photo.js';

// console.log(similarPhotos());
renderPhotos(similarPhotos());
const photos = similarPhotos();

const picturesContainer = document.querySelector('.pictures');
const pictures = picturesContainer.getElementsByClassName('picture');

const onClickPhoto = (evt) => {
  const target = evt.target;
  if (target.matches('.picture__img')) {
    openBigPhoto(photo);
  }

  // console.log(evt.target.closest('.picture'));

};


document.addEventListener('click', onClickPhoto);
