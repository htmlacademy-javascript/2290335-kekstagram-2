import { onThumbnailClick } from './full-size-photo.js';

const photosListElement = document.querySelector('.pictures');
const templatePhoto = document.querySelector('#picture').content.querySelector('.picture');
const photosListFragment = document.createDocumentFragment();

const deletePhotos = () => {
  const pictures = photosListElement.getElementsByClassName('picture');
  const picturesArray = Array.from(pictures);
  picturesArray.forEach((picture) => picture.remove());
};

const renderPhotos = (photos) => {
  deletePhotos();

  photos.forEach((photo) => {
    const element = templatePhoto.cloneNode(true);
    element.id = photo.id;
    element.querySelector('.picture__img').src = photo.url;
    element.querySelector('.picture__img').alt = photo.description;
    element.querySelector('.picture__likes').textContent = photo.likes;
    element.querySelector('.picture__comments').textContent = photo.comments.length;

    photosListFragment.append(element);
  });

  photosListElement.append(photosListFragment);
  onThumbnailClick(photos);
};

export { renderPhotos };
