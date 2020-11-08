import Utils from '../../Utils';

const MAX = [12, 7];
const DEFAULT_POD = [0, 0];


class Pod {

	constructor(value = DEFAULT_POD) {
		this.value = value;
	}

	getValue() {
		return this.value;
	}

	equalTo(b) {
		if (!b || b.length !== 2) return false;
		return this.value[0] === b[0] && this.value[1] === b[1];
	}

	reduce(max = MAX) {
		const a = this.value;
		const p = Utils.modulo(a[0], max[0]);
		const d = Utils.modulo(a[1], max[1]);
		this.value = [p, d];
		return this;
	}

	addPod(b, divisor = MAX) {
		const a = this.value;
		const p = Utils.moduloSum(a[0], b[0], divisor[0]);
		const d = Utils.moduloSum(a[1], b[1], divisor[1]);
		this.value = [p, d];
		return this;
	}

	addPodList(B, divisor = MAX) {
		const a = this.value;
		this.value = B.map((b) => {
			const p = Utils.moduloSum(a[0], b[0], divisor[0]);
			const d = Utils.moduloSum(a[1], b[1], divisor[1]);
			return [p, d];
		});
		return this;
	};

	getName() {
		const a = this.value;
		return '?';
	}

	getPreview() {
		return JSON.stringify(this.value);
	}

	getType() {
		return 'pod';
	}

}

export default Pod;
