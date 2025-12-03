const imgUploadForm = document.querySelector('.img-upload__form');
const fieldWrappers = imgUploadForm.querySelectorAll('.img-upload__field-wrapper');
const informWrappers = Array.from(fieldWrappers);
const textMessages = document.getElementsByClassName('text-help');

const resetValidation = () => {
  for (let i = 0; i < textMessages.length; i++) {
    textMessages[i].remove();
  }
};

const onValidationMessagesReset = () => {
  informWrappers.forEach((informField) => {
    const divWithTextElement = informField.children[1];
    if (informField.contains(divWithTextElement) && !informField.classList.contains('img-upload__field-wrapper--error')) {
      divWithTextElement.classList.remove('pristine-error');
    }
    if (informField.contains(divWithTextElement) && informField.classList.contains('img-upload__field-wrapper--error')) {
      divWithTextElement.classList.add('pristine-error');
    }
  });

};

export { onValidationMessagesReset, resetValidation };
