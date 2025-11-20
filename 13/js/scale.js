const SCALE_MAX = 100;
const SCALE_MIN = 25;
const SCALE_STEP = 25;

const imgUploadForm = document.querySelector('.img-upload__form');
const scaleControlValue = imgUploadForm.querySelector('.scale__control--value');
const previewImageElement = imgUploadForm.querySelector('.img-upload__preview img');

let scale = 100;

const changeScale = () => {
  scaleControlValue.setAttribute('value', `${scale}%`);
  previewImageElement.style.transform = `scale(${scale / 100})`;
};

const minusScale = () => {
  if (scale > SCALE_MIN) {
    scale -= SCALE_STEP;
    changeScale();
  }
};

const plusScale = () => {
  if (scale < SCALE_MAX) {
    scale += SCALE_STEP;
    changeScale();
  }
};

const resetScale = () => {
  scale = 100;
  changeScale();
};

export { minusScale, plusScale, resetScale };
