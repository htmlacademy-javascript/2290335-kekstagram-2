const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const uploadFormElement = document.querySelector('.img-upload__form');
const fileChooserElement = uploadFormElement.querySelector('.img-upload__input');
const previewElement = uploadFormElement.querySelector('.img-upload__preview img');
const miniScreens = uploadFormElement.querySelectorAll('.effects__preview');


const refreshMiniPictures = (loadFile) => {
  const miniPictures = Array.from(miniScreens);
  miniPictures.forEach((miniPicture) => {
    miniPicture.style.backgroundImage = `url(${URL.createObjectURL(loadFile)})`;
  });
};

const getPreview = () => {
  fileChooserElement.addEventListener('change', () => {
    const file = fileChooserElement.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      previewElement.src = URL.createObjectURL(file);
      refreshMiniPictures(file);
    }
  });
};

export { getPreview };
