function getRandomInt(from, to) {
  const min = Math.ceil(Math.min(Math.abs(from), Math.abs(to)));
  const max = Math.floor(Math.max(Math.abs(from), Math.abs(to)));
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt(1, 6);

const getRandomArrayElem = (elements) => elements[getRandomInt(0, elements.length - 1)];

let comment = 0;
const getCommentId = () => {
  comment++;
  return comment;
};

export { getRandomInt, getRandomArrayElem, getCommentId };
