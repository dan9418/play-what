
const DEFAULT_POD_INDEX = 0;
const DEFAULT_POD_INDEX_OPTIONS = {
	reduced: true
};

class PodIndex {

	constructor(value = DEFAULT_POD_INDEX, options = {}) {
		this.value = value;
		this.options = { ...DEFAULT_POD_INDEX_OPTIONS, ...options };
	}

	static modulo(b) {
		const a = this.value;
		return ((a % b) + b) % b;
	}

	static moduloSum(b, divisor) {
		const a = this.value;
		const offset = 0;
		const subtraction = false;
		const dividend = (subtraction) ? ((a - offset) - (b - offset)) : ((a - offset) + (b - offset));
		return modulo({ a: dividend, b: divisor }) + offset;
	};
}

export default PodIndex;
