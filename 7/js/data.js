import {getRandomInteger, getRandomArrayElement, giveMeOneOrTwoMessages} from './util.js';

const MAX_NUMBER_PHOTOS = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

const PHOTO_DESCRIPTIONS = [
  'Потрясный вид! Ксати, несразу удалось заснять именно таким образом',
  'Однозначно, одно из самых удачных снимков на сегодня!',
  'Без комментариев! Просто любуйтесь',
  'Давно собирался и вот наконец решился',
  'Нет описания'
];

const NAMES = [
  'Тимур Иванов',
  'Олег Абрамов',
  'Александр Смирнов',
  'Руслан Сергеев',
  'Николай Авдеев'
];

const createComment = (id) => ({
  id: id + 1,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: giveMeOneOrTwoMessages(),
  name: getRandomArrayElement(NAMES),
});

const similarComments = () => Array.from({length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)}, (item, index) => createComment(index));

const createPhoto = (id) => ({
  id: id + 1,
  url: `photos/${id + 1}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: similarComments()
});

const similarPhotos = () => Array.from({length: MAX_NUMBER_PHOTOS}, (item, index) => createPhoto(index));

export {similarPhotos};
