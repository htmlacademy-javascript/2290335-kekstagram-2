const popularSortButton = document.querySelector('#filter-discussed');
const defaultSortButton = document.querySelector('#filter-default');
const randomSortButton = document.querySelector('#filter-random');

const setDefaultClick = (cb) => {
  defaultSortButton.addEventListener('click', () => {
    cb();
  });
};

const comparePopular = (itemA, itemB) => itemB.likes - itemA.likes;

const setPopularClick = (cb) => {
  popularSortButton.addEventListener('click', () => {
    cb();
  });
};

const shuffle = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};


const setRandomClick = (cb) => {
  randomSortButton.addEventListener('click', () => {
    cb();
  });
};

export { setDefaultClick, comparePopular, setPopularClick, setRandomClick, shuffle };
