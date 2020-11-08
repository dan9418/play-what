import Utils from "../../Utils";

const DEFAULT_POD_INDEX = 0;

class PodIndex {

	constructor(value = DEFAULT_POD_INDEX) {
		this.value = value;
	}

	// common

	equalTo(b) {
		return this.value === b;
	}

	getValue() {
		return this.value;
	}

	getName() {
		return '?';
	}

	getPreset() {
		return null;
	}

	getPreview() {
		return this.getValue();
	}

	getType() {
		return 'podIndex';
	}

	// utils

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
}

export default PodIndex;
