import { similarPhotos } from './creation_photos.js';

const templatePhoto = document.querySelector('#picture').content.querySelector('.picture');
const photosList = document.querySelector('.pictures');
const photosListFragment = document.createDocumentFragment();

const photos = similarPhotos();

const renderPhotos = () => {
  photos.forEach((photo) => {
    const element = templatePhoto.cloneNode(true);
    element.querySelector('.picture__img').src = photo.url;
    element.querySelector('.picture__img').alt = photo.description;
    element.querySelector('.picture__likes').textContent = photo.likes;
    element.querySelector('.picture__comments').textContent = photo.comments.length;

    photosListFragment.append(element);
  });

  photosList.append(photosListFragment);
};

export { renderPhotos };
