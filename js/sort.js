const filtersContainerElement = document.querySelector('.img-filters');
const popularSortButtonElement = filtersContainerElement.querySelector('#filter-discussed');
const defaultSortButtonElement = filtersContainerElement.querySelector('#filter-default');
const randomSortButtonElement = filtersContainerElement.querySelector('#filter-random');
const sortButtonsElements = filtersContainerElement.querySelectorAll('.img-filters__button');

const shuffle = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const comparePopular = (itemA, itemB) => itemB.likes - itemA.likes;

const resetFilters = () => {
  const sortButtons = Array.from(sortButtonsElements);
  sortButtons.forEach((sortButton) => {
    sortButton.classList.remove('img-filters__button--active');
  });
};

const showFilters = () => {
  filtersContainerElement.classList.remove('img-filters--inactive');
};

const setDefaultClick = (cb) => {
  defaultSortButtonElement.addEventListener('click', () => {
    resetFilters();
    defaultSortButtonElement.classList.add('img-filters__button--active');
    cb();
  });
};

const setPopularClick = (cb) => {
  popularSortButtonElement.addEventListener('click', () => {
    resetFilters();
    popularSortButtonElement.classList.add('img-filters__button--active');
    cb();
  });
};

const setRandomClick = (cb) => {
  randomSortButtonElement.addEventListener('click', () => {
    resetFilters();
    randomSortButtonElement.classList.add('img-filters__button--active');
    cb();
  });
};

export { showFilters, setDefaultClick, comparePopular, setPopularClick, setRandomClick, shuffle };
