import degree from './degree';
import pitch from './pitch';

// Constants

const DEFAULT = 0;

// Common

// isValid

// areEqual

// sum

const modulo = ({ a, b }) => ((a % b) + b) % b;

const moduloSum = ({ a, b, divisor }) => {
	const offset = 0;
	const subtraction = false;
	const dividend = (subtraction) ? ((a - offset) - (b - offset)) : ((a - offset) + (b - offset));
	return modulo({ a: dividend, b: divisor }) + offset;
};

const floor = (a, b) => Math.floor(a / b);

export default {
	degree,
	pitch,
	defaultValue: DEFAULT,
	modulo,
	moduloSum,
	floor
};
