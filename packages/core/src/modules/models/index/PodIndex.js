import Utils from "../../Utils";

const DEFAULT_POD_INDEX = 0;
const DEFAULT_POD_INDEX_OPTIONS = {
	reduced: true
};

class PodIndex {

	constructor(value = DEFAULT_POD_INDEX, options = {}) {
		this.value = value;
		this.options = { ...DEFAULT_POD_INDEX_OPTIONS, ...options };
	}

	getValue() {
		return this.value;
	}

	reduce(max) {
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
