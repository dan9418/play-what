import Utils from '../../Utils';

const DEFAULT_POD_LIST = [[0, 0]];

class PodList {

	// common

	static equalTo(A, B) {
		if (!B || !B.length) return false;
		for (let i = 0; i < this.value.length; i++) {
			const a = A[i];
			const b = B[i];

			if (a[0] !== b[0] || a[1] !== b[1])
				return false;
		}
		return true;
	}

	static getValue() {
		return null;
	}

	static getName() {
		return 'Custom';
	}

	static getPreset() {
		return null;
	}

	static getPreview() {
		return null;
	}

	static getValue() {
		return null;
	}

	// utils

	static reduce(max = [12, 7]) {
		const A = this.value;
		const newValue = A.map((a) => {
			const p = Utils.modulo(a[0], max[0]);
			const d = Utils.modulo(a[1], max[1]);
			return [p, d];
		});
		return new newValue;
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
