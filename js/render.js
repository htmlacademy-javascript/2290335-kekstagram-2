const photosListElement = document.querySelector('.pictures');
const templatePhoto = document.querySelector('#picture').content.querySelector('.picture');
const photosListFragment = document.createDocumentFragment();

const renderPhotos = (photos) => {
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
};

export { renderPhotos };
