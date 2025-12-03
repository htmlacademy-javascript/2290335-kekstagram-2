import { effects, StyleFilterByEffects, getEffectSelector } from './slider-settings.js';

const EFFECT_LEVEL_MAX = 100;

const uploadFormElement = document.querySelector('.img-upload__form');
const sliderInputWrapperElement = uploadFormElement.querySelector('.img-upload__effect-level');
const levelInputElement = uploadFormElement.querySelector('.effect-level__value');
const sliderElement = uploadFormElement.querySelector('.effect-level__slider');
const effectRadioBtnsElements = uploadFormElement.querySelectorAll('.effects__radio');

const imgPreview = uploadFormElement.querySelector('.img-upload__preview').firstElementChild;
const selectorImg = imgPreview.classList;
levelInputElement.value = EFFECT_LEVEL_MAX;

const getUpdateSliderOptions = (effect, slider) => {
  slider.noUiSlider.updateOptions(effects[effect]);
};

const resetFilter = () => {
  imgPreview.style.removeProperty('filter');
  sliderInputWrapperElement.classList.add('hidden');
  imgPreview.className = '';
  imgPreview.classList.add('effects__preview--none');
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

const onEffectRadioBtnClick = (evt) => {
  const currentRadioBtn = evt.target.closest('.effects__radio');
  if (currentRadioBtn) {
    const effectBtnValue = currentRadioBtn.value;
    imgPreview.classList.replace(selectorImg, getEffectSelector(`effect-${effectBtnValue}`));
    getUpdateSliderOptions(effectBtnValue, sliderElement);
  }
};

sliderElement.noUiSlider.on('update', () => {
  levelInputElement.value = sliderElement.noUiSlider.get();
  effectRadioBtnsElements.forEach((item) => {
    if (item.checked) {
      if (item.value !== 'none') {
        sliderInputWrapperElement.classList.remove('hidden');
        imgPreview.style.filter = StyleFilterByEffects[item.value](levelInputElement.value);
      } else {
        resetFilter();
      }
    }
  });
});

export { onEffectRadioBtnClick, resetFilter };
