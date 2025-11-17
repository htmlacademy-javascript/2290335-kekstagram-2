const SCALE_MAX = 100;
const SCALE_MIN = 25;
const SCALE_STEP = 25;

const imgUploadPreview = document.querySelector('.img-upload__preview');
const imgUploadPreviewImage = imgUploadPreview.querySelector('img');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');

let scale = 100;

const changeScale = () => {
  scaleControlValue.value = `${scale}%`;
  imgUploadPreviewImage.style.transform = `scale(${scale / 100})`;
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

scaleControlSmaller.addEventListener('click', minusScale);
scaleControlBigger.addEventListener('click', plusScale);

export { resetScale };
