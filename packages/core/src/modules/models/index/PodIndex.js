import Utils from "../../Utils";

const DEFAULT_POD_INDEX = 0;

class PodIndex {

	constructor(value = DEFAULT_POD_INDEX) {
		this.value = value;
	}

	getValue() {
		return this.value;
	}

	equalTo(b) {
		return this.value === b;
	}

	getName() {
		return 'n/a';
	}

	reduce(max = 10) {
		const a = this.value;
		this.value = Utils.modulo(a, max);
		return this;
	}

	add(b, divisor) {
		const a = this.value;
		this.value = Utils.moduloSum(a, b, divisor)
		return this;
	}

	getType() {
		return 'podIndex';
	}
}

export default PodIndex;
