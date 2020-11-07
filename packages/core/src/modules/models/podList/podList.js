import Utils from '../../Utils';

const DEFAULT_POD_LIST = [[0, 0]];

class PodList {

	constructor(value = DEFAULT_POD_LIST) {
		this.value = value;
	}

	getValue() {
		return this.value;
	}

	equalTo(B) {
		if (!B || !B.length) return false;
		for (let i = 0; i < this.value.length; i++) {
			const a = this.value[i];
			const b = B[i];

			if(a[0] !== b[0] || a[1] !== b[1])
				return false;
		}
		return true;
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
