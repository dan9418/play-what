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
		return 'Custom';
	}

	getPreset() {
		return null;
	}

	getPreview() {
		return JSON.stringify(this.value);
	}

	getType() {
		return 'podIndex';
	}

	// utils

	reduce(max = 10) {
		const a = this.value;
		const newValue = Utils.modulo(a, max);
		return new PodIndex(newValue);
	}

	add(b, divisor) {
		const a = this.value;
		const newValue = Utils.moduloSum(a, b, divisor)
		return new PodIndex(newValue);
	}
}

export default PodIndex;
