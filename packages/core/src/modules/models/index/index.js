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

export default PodIndex;
