const modulo = (a, b) => {
	return ((a % b) + b) % b;
}

const moduloSum = (a, b, divisor) => {
	const offset = 0;
	const subtraction = false;
	const dividend = (subtraction) ? ((a - offset) - (b - offset)) : ((a - offset) + (b - offset));
	return modulo(dividend, divisor) + offset;
};

export default {
	modulo,
	moduloSum
};
