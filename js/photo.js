// 7.15. Отрисуй меня полностью (часть 1)

import { creatRandomPost } from './data.js';
import { createFullSizePicture } from './preview.js';


const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').
  content.
  querySelector('.picture');

const photoData = creatRandomPost();

const picturesFragment = document.createDocumentFragment();

photoData.forEach(({ url, comments, likes, description }) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent =
    comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  picturesFragment.append(pictureElement);
  pictureElement.addEventListener('click', () => {
    createFullSizePicture({ url, likes, comments, description });
  });
});

pictures.append(picturesFragment);
