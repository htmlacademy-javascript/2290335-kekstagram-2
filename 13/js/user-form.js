import { isEscapeKey } from './utils.js';
import { getErrorText, isHashtagsValid } from './validation-hashtags.js';
import { isDescriptionValid, getErrorMessageDescription } from './validation-description.js';
import { minusScale, plusScale, resetScale } from './scale.js';
import { onEffectRadioBtnClick, resetFilter } from './slider-effects.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');

// Масштабирование превью. Модуль scale.js в помощь
const minusButtonElement = imgUploadForm.querySelector('.scale__control--smaller');
const plusButtonElement = imgUploadForm.querySelector('.scale__control--bigger');

// Слайдер. Модуль slider.js в помощь
const listElement = imgUploadForm.querySelector('.effects__list');

// Валидация формы imgUploadForm средствами модулей validation-hashtags.js, validation-description.js
const hashtagsElement = imgUploadForm.querySelector('.text__hashtags');
const descriptionElement = imgUploadForm.querySelector('.text__description');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalMenu();
  }
};

const resetInputValues = () => {
  imgUploadForm.reset();
};

function openModalMenu() {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeModalMenu() {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetInputValues();
  document.removeEventListener('keydown', onDocumentKeydown);
  resetScale();
  resetFilter();
}

imgUploadCancel.addEventListener('click', closeModalMenu);
minusButtonElement.addEventListener('click', minusScale);
plusButtonElement.addEventListener('click', plusScale);
listElement.addEventListener('change', onEffectRadioBtnClick);

pristine.addValidator(descriptionElement, isDescriptionValid, getErrorMessageDescription, 2, false);
pristine.addValidator(hashtagsElement, isHashtagsValid, getErrorText, 2, false);

export { openModalMenu };
