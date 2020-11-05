import Utils from '../../Utils';

const DEFAULT_POD_LIST = [[0, 0]];
const DEFAULT_POD_LIST_OPTIONS = {
	reduced: true
};

class PodList {

	constructor(value = DEFAULT_POD_LIST, options = {}) {
		this.value = value;
		this.options = { ...DEFAULT_POD_LIST_OPTIONS, ...options };
	}

	getValue() {
		return this.value;
	}

	reduce(max = [12, 7]) {
		const A = this.value;
		this.value = A.map((a) => {
			const p = Utils.modulo(a[0], max[0]);
			const d = Utils.modulo(a[1], max[1]);
			return [p, d];
		});
		return this;
	}

	getName() {
		const A = this.value;
		return JSON.stringify(A);
	}

	getType() {
		return 'podList';
	}

	/*findPodWithPitch(p) {
		const A = this.value;
		const octaveReduce = true
		const pitch = octaveReduce ? index.modulo({ a: p, b: pod.max[0] }) : p;
		return A.find((n) => n[0] === pitch) || null;
	};

	findIndexOfPodWithPitch(p) {
		const A = this.value;
		const octaveReduce = true
		const pitch = octaveReduce ? index.modulo({ a: p, b: pod.max[0] }) : p;
		return A.findIndex((n) => n[0] === pitch);
	};*/
}

export default PodList;
