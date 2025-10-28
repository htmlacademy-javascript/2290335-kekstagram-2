import { getRandomArrayElement, getRandomInteger } from './utils.js';

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_MESSAGES = 1;
const MAX_MESSAGES = 2;

const NAMES = [
  'Тимур Иванов',
  'Олег Абрамов',
  'Александр Смирнов',
  'Руслан Сергеев',
  'Николай Авдеев'
];

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const giveMeOneOrTwoMessages = () => {
  let message = getRandomArrayElement(COMMENT_MESSAGES);
  const numberMessages = getRandomInteger(MIN_MESSAGES, MAX_MESSAGES);
  if (numberMessages === 2) {
    message += getRandomArrayElement(COMMENT_MESSAGES);
  }
  return message;
};

const createComment = (id) => ({
  id: id + 1,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: giveMeOneOrTwoMessages(),
  name: getRandomArrayElement(NAMES),
});

const similarComments = () => Array.from({length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)}, (item, index) => createComment(index));

export { similarComments };
