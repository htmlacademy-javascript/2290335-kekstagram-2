const imgUploadForm = document.querySelector('.img-upload__form');
const fieldWrappers = imgUploadForm.querySelectorAll('.img-upload__field-wrapper');
const textArea = document.querySelector('.text__description');
const informWrappers = Array.from(fieldWrappers);
const errorMessages = document.getElementsByClassName('pristine-error');
const textMessages = document.getElementsByClassName('text-help');
const tips = Array.from(textMessages);

const resetValidation = () => {
  for (let i = 0; i < textMessages.length; i++) {
    textMessages[i].remove();
  }
};

const resetValidationMessages = () => {
  console.log('Работает!')
  informWrappers.forEach((informField) => {
    // Див с текстом
    const divWithTextElement = informField.children[1];
    console.log(divWithTextElement);
    if (informField.contains(divWithTextElement) && !informField.classList.contains('img-upload__field-wrapper--error')) {
      divWithTextElement.classList.remove('pristine-error');
    }
    if (informField.contains(divWithTextElement) && informField.classList.contains('img-upload__field-wrapper--error')) {
      divWithTextElement.classList.add('pristine-error');
    }
  });

};

export { resetValidationMessages, resetValidation };
