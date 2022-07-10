// 7.15. Отрисуй меня полностью (часть 1)

import { creatRandomPost } from './data.js';

const pictures = document.querySelector('.pictures');
const template = document.querySelector('#picture').
  content.
  querySelector('.picture');

const photoData = creatRandomPost();

const picturesFragment = document.createDocumentFragment();

photoData.forEach(({ url, comments, likes }) => {
  const pictureElement = template.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent =
    comments.length;
  pictureElement.querySelector('picture__likes').textContent = likes;
  picturesFragment.append(pictureElement);
});

pictures.append(picturesFragment);
