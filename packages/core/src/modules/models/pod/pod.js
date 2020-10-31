import Utils from '../../Utils';

const MAX = [12, 7];
const DEFAULT_POD = [0, 0];
const DEFAULT_POD_OPTIONS = {
	reduced: true
};

class Pod {

	constructor(value = DEFAULT_POD, options = {}) {
		this.value = value;
		this.options = { ...DEFAULT_POD_OPTIONS, ...options };
	}

	/*isValid(pod) {
		return pod !== null && typeof pod === 'object' && typeof pod[0] === 'number' && typeof pod[1] === 'number';
	};

	areEqual({ pod1, pod2 }) {
		if (!pod1 || !pod2) return false;
		return pod1[0] === pod2[0] && pod1[1] === pod2[1];
	};*/

	getValue() {
		return this.value;
	}

	reduce(max) {
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
		const pod = this.value;
		return JSON.stringify(pod);
	}

}

export default Pod;
