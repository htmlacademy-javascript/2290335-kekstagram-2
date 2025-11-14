import '../vendor/pristine/pristine.min.js';
import { isEscapeKey } from './utils.js';
import { getErrorText, isHashtagsValid } from './validation-hashtags.js';
import { isDescriptionValid, getErrorMessageDescription } from './validation-description.js';

const imgUpload = document.querySelector('.img-upload');
const imgUploadForm = imgUpload.querySelector('.img-upload__form');
const imgUploadOverlay = imgUpload.querySelector('.img-upload__overlay');
const imgUploadInput = imgUpload.querySelector('.img-upload__input');
const imgUploadCancel = imgUpload.querySelector('.img-upload__cancel');

// Pristine. Валидация формы imgUploadForm
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
  imgUploadInput.value = '';
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
}

imgUploadInput.addEventListener('change', openModalMenu);
imgUploadCancel.addEventListener('click', closeModalMenu);

pristine.addValidator(descriptionElement, isDescriptionValid, getErrorMessageDescription, 2, false);
pristine.addValidator(hashtagsElement, isHashtagsValid, getErrorText, 2, false);
