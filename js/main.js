const MAX_NUMBER_PHOTOS = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_MESSAGES = 1;
const MAX_MESSAGES = 2;

const PHOTO_DESCRIPTIONS = [
  'Потрясный вид! Ксати, несразу удалось заснять именно таким образом',
  'Однозначно, одно из самых удачных снимков на сегодня!',
  'Без комментариев! Просто любуйтесь',
  'Давно собирался и вот наконец решился',
  'Нет описания'
];

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Тимур Иванов',
  'Олег Абрамов',
  'Александр Смирнов',
  'Руслан Сергеев',
  'Николай Авдеев'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

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

const createPhoto = (id) => ({
  id: id + 1,
  url: `photos/${id + 1}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: similarComments()
});

const similarPhotos = () => Array.from({length: MAX_NUMBER_PHOTOS}, (item, index) => createPhoto(index));

similarPhotos();
