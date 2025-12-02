import { isEscapeKey } from './utils.js';
import { getErrorText, isHashtagsValid } from './validation-hashtags.js';
import { isDescriptionValid, getErrorMessageDescription } from './validation-description.js';
import { resetValidationMessages, resetValidation } from './validation-reset.js';
import { minusScale, plusScale, resetScale } from './scale.js';
import { onEffectRadioBtnClick, resetFilter } from './slider-effects.js';
import { appendNotification } from './inform.js';
import { sendData } from './api.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');
const imgUploadButton = imgUploadForm.querySelector('.img-upload__submit');

// Масштабирование превью. Модуль scale.js в помощь
const minusButtonElement = imgUploadForm.querySelector('.scale__control--smaller');
const plusButtonElement = imgUploadForm.querySelector('.scale__control--bigger');

// Слайдер. Модуль slider.js в помощь
const listElement = imgUploadForm.querySelector('.effects__list');

// Валидация формы imgUploadForm средствами модулей validation-hashtags.js, validation-description.js
const textWrapperElement = imgUploadForm.querySelector('.img-upload__text');
const hashtagsElement = imgUploadForm.querySelector('.text__hashtags');
const descriptionElement = imgUploadForm.querySelector('.text__description');

// Шаблоны информационных сообщений при отправке изображения
const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateError = document.querySelector('#error').content.querySelector('.error');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  successClass: 'img-upload__field-wrapper-success',
  errorTextParent: 'img-upload__field-wrapper',
});

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) &&
  !evt.target.classList.contains('text__hashtags') &&
  !evt.target.classList.contains('text__description')) {
    evt.preventDefault();
    closeModalMenu();
  }
};

const resetInputValues = () => {
  imgUploadForm.reset();
};

const undisableButton = () => {
  imgUploadButton.removeAttribute('disabled');
  imgUploadButton.textContent = 'Опубликовать';
};

const disableButton = () => {
  imgUploadButton.setAttribute('disabled', 'disabled');
  imgUploadButton.textContent = 'Публикую';
};

function openModalMenu() {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  textWrapperElement.addEventListener('input', resetValidationMessages);
}

function closeModalMenu() {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetInputValues();
  document.removeEventListener('keydown', onDocumentKeydown);
  textWrapperElement.removeEventListener('input', resetValidationMessages);
  resetScale();
  resetFilter();
  pristine.reset();
  resetValidation();
}

const setUserFormSubmit = () => {
  imgUploadForm.addEventListener('submit', (evt) => {

    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      sendData(new FormData(imgUploadForm))
        .then(() => {
          appendNotification(templateSuccess);
          closeModalMenu();
        })
        .catch (
          () => {
            appendNotification(templateError);
          }
        )
        .finally(() => {
          disableButton();
          undisableButton();
        });
    }
  });
};

imgUploadCancel.addEventListener('click', closeModalMenu);
minusButtonElement.addEventListener('click', minusScale);
plusButtonElement.addEventListener('click', plusScale);
listElement.addEventListener('change', onEffectRadioBtnClick);

pristine.addValidator(descriptionElement, isDescriptionValid, getErrorMessageDescription, 2, false);
pristine.addValidator(hashtagsElement, isHashtagsValid, getErrorText, 2, false);


export { openModalMenu, setUserFormSubmit };
