import index from '../index/index';


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

	reduce() {
		const a = this.value;
		return [index.modulo({ a: a[0], b: MAX[0] }), index.modulo({ a: a[1], b: MAX[1] })];
	}

	getName() {
		const pod = this.value;
		return JSON.stringify(pod);
	}

	addPod(b) {
		const a = this.value;
		return [a[0] + b[0], a[1] + b[1]];
	}

	addPodList(B) {
		const a = this.value;
		return B.map((b) => addPod({ a, b }));
	};

}

export default Pod;
