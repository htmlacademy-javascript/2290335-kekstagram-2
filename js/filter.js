import { debounce } from './utils.js';

const RERENDER_DELAY = 700;
const NUMBER_PHOTOS_RANDOM = 10;

const filtersContainerElement = document.querySelector('.img-filters');
const filtersFormElement = filtersContainerElement.querySelector('.img-filters__form');
const sortButtonsElements = filtersFormElement.querySelectorAll('.img-filters__button');

const comparePopular = (itemA, itemB) => itemB.comments.length - itemA.comments.length;

const shuffleArray = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const showFilters = () => {
  filtersContainerElement.classList.remove('img-filters--inactive');
};

const resetFilters = () => {
  const sortButtons = Array.from(sortButtonsElements);
  sortButtons.forEach((sortButton) => {
    sortButton.classList.remove('img-filters__button--active');
  });
};

const setFilterClick = (data, getRenderPhotos) => {
  filtersFormElement.addEventListener('click', (event) => {
    resetFilters();
    const target = event.target;
    target.classList.add('img-filters__button--active');

    const photosCopyPopular = data.slice().sort(comparePopular);
    const photosCopyRandom = shuffleArray(data.slice()).slice(0, NUMBER_PHOTOS_RANDOM);
    let array = [];
    if (target.matches('#filter-discussed')) {
      array = photosCopyPopular;
    }

    if (target.matches('#filter-random')) {
      array = photosCopyRandom;
    }

    if (target.matches('#filter-default')) {
      array = data;
    }
    debounce(getRenderPhotos, RERENDER_DELAY)(array);
  });
};

export { showFilters, setFilterClick };
