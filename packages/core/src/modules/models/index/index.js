import degree from './degree';
import pitch from './pitch';

// Constants

const DEFAULT = 0;

// Common

// isValid

// areEqual

// sum


class PodIndex {

	constructor(value) {
		this.value = value;
	}

	static modulo({ a, b }) { return ((a % b) + b) % b; }

	static moduloSum({ a, b, divisor }) {
		const offset = 0;
		const subtraction = false;
		const dividend = (subtraction) ? ((a - offset) - (b - offset)) : ((a - offset) + (b - offset));
		return modulo({ a: dividend, b: divisor }) + offset;
	};

	static floor(a, b) { Math.floor(a / b); }

}

PodIndex.degree = degree;
PodIndex.pitch = pitch;

export default PodIndex;
