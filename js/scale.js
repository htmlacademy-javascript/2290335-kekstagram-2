const SCALE_MAX = 100;
const SCALE_MIN = 25;
const SCALE_STEP = 25;

const uploadFormElement = document.querySelector('.img-upload__form');
const scaleControlValue = uploadFormElement.querySelector('.scale__control--value');
const previewImageElement = uploadFormElement.querySelector('.img-upload__preview img');

let scale = 100;

const changeScale = () => {
  scaleControlValue.setAttribute('value', `${scale}%`);
  previewImageElement.style.transform = `scale(${scale / 100})`;
};

const onMinusButtonScale = () => {
  if (scale > SCALE_MIN) {
    scale -= SCALE_STEP;
    changeScale();
  }
};

const onPlusButtonScale = () => {
  if (scale < SCALE_MAX) {
    scale += SCALE_STEP;
    changeScale();
  }
};

const resetScale = () => {
  scale = 100;
  changeScale();
};

export { onMinusButtonScale, onPlusButtonScale, resetScale };
