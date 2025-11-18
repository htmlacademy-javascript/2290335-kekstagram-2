import { Effects, StyleFilterByEffects, getEffectSelector } from './nouislider-settings.js';

const EFFECT_LEVEL_MAX = 100;

const uploadForm = document.querySelector('.img-upload__form');
const effectSlider = uploadForm.querySelector('.effect-level__slider');
const effectLevelInput = uploadForm.querySelector('.effect-level__value');
const effectsList = uploadForm.querySelector('.effects__list');
const effectRadioBtns = uploadForm.querySelectorAll('.effects__radio');
const sliderContainer = uploadForm.querySelector('.img-upload__effect-level');
const photoPreview = uploadForm.querySelector('.img-upload__preview');
const imgPreview = photoPreview.firstElementChild;
const selectorImg = imgPreview.classList;
effectLevelInput.value = EFFECT_LEVEL_MAX;

const getUpdateSliderOptions = (effect, sliderElement) => {
  sliderElement.noUiSlider.updateOptions(Effects[effect]);
};

const resetFilter = () => {
  imgPreview.style.removeProperty('filter');
  sliderContainer.classList.add('hidden');
  imgPreview.className = '';
  imgPreview.classList.add('effects__preview--none');
};

noUiSlider.create(effectSlider, {
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
    imgPreview.classList.replace(selectorImg, getEffectSelector(effectBtnValue));
    getUpdateSliderOptions(effectBtnValue, effectSlider);
  }
};

effectSlider.noUiSlider.on('update', () => {
  effectLevelInput.value = effectSlider.noUiSlider.get();
  effectRadioBtns.forEach((item) => {
    if (item.checked) {
      if (item.value !== 'none') {
        sliderContainer.classList.remove('hidden');
        imgPreview.style.filter = StyleFilterByEffects[item.value](effectLevelInput.value);
      } else {
        resetFilter();
      }
    }
  });
});

effectsList.addEventListener('change', onEffectRadioBtnClick);

export { resetFilter };
