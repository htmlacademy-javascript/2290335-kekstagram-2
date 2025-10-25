import { getRandomInteger, getRandomArrayElement } from './utils.js';
import { similarComments } from './creation_comments.js';

const MAX_NUMBER_PHOTOS = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;

const PHOTO_DESCRIPTIONS = [
  'Потрясный вид! Ксати, несразу удалось заснять именно таким образом',
  'Однозначно, одно из самых удачных снимков на сегодня!',
  'Без комментариев! Просто любуйтесь',
  'Давно собирался и вот наконец решился',
  'Нет описания'
];

const createPhoto = (id) => ({
  id: id + 1,
  url: `photos/${id + 1}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: similarComments()
});

const similarPhotos = () => Array.from({length: MAX_NUMBER_PHOTOS}, (item, index) => createPhoto(index));

export { similarPhotos };
