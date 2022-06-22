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
	'Ефрем'
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

const CommentsAmount = {
	min: 1,
	max: 6
};

const LikesAmount = {
	min: 15,
	max: 200
};

function getRandomInt(from, to) {

	const min = Math.ceil(Math.min(Math.abs(from), Math.abs(to)));
	const max = Math.floor(Math.max(Math.abs(from), Math.abs(to)));
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomInt(1, 6);

const getRandomArrayElem = (elements) => elements[getRandomInt(0, elements.length - 1)];

let commentId = 0;
const getCommentId = () => {
	comment++;
	return comment;
};

const creatRandomComments = () => ({
	id: getCommentId(),
	avatar: `img/avatar-${getRandomInt(AvatarsRange.min, AvatarsRange.max)}.svg`,
	message: getRandomArrayElem(MASSAGES),
	name: getRandomArrayElem(NAMES),
});

const creatRandomPhotos = () => Array.from({ length: PHOTO_AMOUNT }), (item, index) => ({
	id: index + 1,
	url: `photos/${index + 1}.jpg.`,
	description: getRandomArrayElem(DESCRIPTIONS),
	likes: getRandomInt(LikesAmount.min, LikesAmount.max),
	comments: Array.from({ length: getRandomInt(CommentsAmount.min, CommentsAmount.max) },
		creatRandomComments)
});

creatRandomPhotos();

//Проверка максимальной длины строки
function checkStringLength(string, length) {
	return string.length <= length;
};


