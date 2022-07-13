import { getRandomInt, getRandomArrayElem, getCommentId } from './util.js';

const PHOTO_AMOUNT = 25;

const NAMES = [
  'Евсей',
  'Евстафий',
  'Егор',
  'Емельян',
  'Еремей',
  'Ермолай',
  'Ерофей',
  'Ефим',
  'Ефрем',
];

const DESCRIPTIONS = [
  'Работа не волк, работа это ворк', 'Котангенс не связан с котами', 'Один икс бет! Ставки на кота', 'Заказали которолы',
  'Отдых в самом разгаре', 'Отличный вид с самолета', 'Какие тапки с фонариками'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const commentsAmount = {
  min: 1,
  max: 6
};

const likesAmount = {
  min: 15,
  max: 200
};

const creatRandomComments = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInt(0, 6)}.svg`,
  message: getRandomArrayElem(COMMENTS),
  name: getRandomArrayElem(NAMES),
});

const creatRandomPost = () => Array.from({ length: PHOTO_AMOUNT }, (_item, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElem(DESCRIPTIONS),
  likes: getRandomInt(likesAmount.min, likesAmount.max),
  comments: Array.from({ length: getRandomInt(commentsAmount.min, commentsAmount.max) },
    creatRandomComments)
}));

creatRandomPost();

//Проверка максимальной длины строки
//function checkStringLength(string, length) {
//  return string.length <= length};

export { creatRandomPost };

