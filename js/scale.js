const SCALE_MAX = 100;
const SCALE_MIN = 25;
const SCALE_STEP = 25;

const uploadForm = document.querySelector('.img-upload__form');
const imgUploadPreviewImage = uploadForm.querySelector('.img-upload__preview img');
const scaleControlSmaller = uploadForm.querySelector('.scale__control--smaller');
const scaleControlBigger = uploadForm.querySelector('.scale__control--bigger');
const scaleControlValue = uploadForm.querySelector('.scale__control--value');

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
