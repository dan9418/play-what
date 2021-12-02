const modulo = (a: number, b: number): number => {
	return ((a % b) + b) % b;
}

const moduloSum = (a: number, b: number, divisor: number): number => {
	const offset = 0;
	const subtraction = false;
	const dividend = (subtraction) ? ((a - offset) - (b - offset)) : ((a - offset) + (b - offset));
	return modulo(dividend, divisor) + offset;
};

export default {
	modulo,
	moduloSum
};
