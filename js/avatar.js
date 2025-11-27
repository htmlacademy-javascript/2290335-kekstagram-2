const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imgUploadForm = document.querySelector('.img-upload__form');
const fileChooser = imgUploadForm.querySelector('.img-upload__input');
const preview = imgUploadForm.querySelector('.img-upload__preview img');
const miniScreens = imgUploadForm.querySelectorAll('.effects__preview');


const refreshMiniPictures = (loadFile) => {
  const miniPictures = Array.from(miniScreens);
  miniPictures.forEach((miniPicture) => {
    miniPicture.style.backgroundImage = `url(${URL.createObjectURL(loadFile)})`;
  });
};

const getPreview = () => {
  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      preview.src = URL.createObjectURL(file);
      refreshMiniPictures(file);
    }
  });
};

export { getPreview };
