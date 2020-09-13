const splitAt = (str, i) => [str.slice(0, i), str.slice(i)];

const rotate = (arr, count) => {
	count -= arr.length * Math.floor(count / arr.length);
	arr.push.apply(arr, arr.splice(0, count));
	return arr;
};

export default {
	splitAt,
	rotate
};
