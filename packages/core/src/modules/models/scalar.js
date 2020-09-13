const modulo = (a, b) => ((a % b) + b) % b;

const moduloSum = (a, b, divisor, offset = 0, subtraction = false) => {
	const dividend = (subtraction) ? ((a - offset) - (b - offset)) : ((a - offset) + (b - offset));
	return modulo(dividend, divisor) + offset;
};

export default {
	modulo,
	moduloSum
};
