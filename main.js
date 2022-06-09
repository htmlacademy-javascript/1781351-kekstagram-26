function getRandomInt(from, to) {

	const min = Math.ceil(Math.min(Math.abs(from), Math.abs(to)));
	const max = Math.floor(Math.max(Math.abs(from), Math.abs(to)));

	return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt(1, 6);

// Проверки максимальной длины строки
function checkStringLength(string, length) {
	return string.length <= length;
}