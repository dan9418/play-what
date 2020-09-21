// Constants

const DEFAULT = 0;
const MAX = 1000;

// Common

// isValid

// areEqual

// sum

const modulo = (a, b) => ((a % b) + b) % b;

const moduloSum = (a, b, divisor, offset = 0, subtraction = false) => {
	const dividend = (subtraction) ? ((a - offset) - (b - offset)) : ((a - offset) + (b - offset));
	return modulo(dividend, divisor) + offset;
};

const floor = (a, b) => Math.floor(a / b);

export default {
	defaultValue: DEFAULT,
	max: MAX,
	modulo,
	moduloSum,
	floor
};
