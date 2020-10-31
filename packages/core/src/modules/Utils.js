const splitAt = (str, i) => [str.slice(0, i), str.slice(i)];

const rotate = (arr, count) => {
	count -= arr.length * Math.floor(count / arr.length);
	arr.push.apply(arr, arr.splice(0, count));
	return arr;
};

const modulo = (a, b) => {
	return ((a % b) + b) % b;
}

const moduloSum = (a, b, divisor) => {
	const offset = 0;
	const subtraction = false;
	const dividend = (subtraction) ? ((a - offset) - (b - offset)) : ((a - offset) + (b - offset));
	return modulo({ a: dividend, b: divisor }) + offset;
};

export default {
	splitAt,
	rotate,
	modulo,
	moduloSum
};
