import { creatRandomPost } from './data.js';

// 7.15. Отрисуй меня полностью (часть 1)

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').
  content.
  querySelector('.picture');

const photoData = creatRandomPost();

const picturesFragment = document.createDocumentFragment();

photoData.forEach(({ url, comments, likes }) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent =
    comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  picturesFragment.append(pictureElement);
});

pictures.append(picturesFragment);
