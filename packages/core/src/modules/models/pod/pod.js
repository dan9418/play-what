import index from '../index/index';
import interval from './interval';
import note from './note';

// Constants

const DEFAULT = [0, 0];
const MAX = [12, 7];

class Pod {

	constructor(value) {
		this.value = value;
	}

	// Common

	static isValid(pod) {
		return pod !== null && typeof pod === 'object' && typeof pod[0] === 'number' && typeof pod[1] === 'number';
	};

	static areEqual({ pod1, pod2 }) {
		if (!pod1 || !pod2) return false;
		return pod1[0] === pod2[0] && pod1[1] === pod2[1];
	};

	static reduce({ a }) {
		return [index.modulo({ a: a[0], b: MAX[0] }), index.modulo({ a: a[1], b: MAX[1] })];
	}

	static getName({ pod, podType }) {
		switch (podType) {
		case 'note':
			return note.getName({ a: pod });
		case 'interval':
			return interval.getName({ a: pod });
		default:
			return JSON.stringify(pod);
		}
	}

	// Utils

	static addPod({ a, b }) { return ([a[0] + b[0], a[1] + b[1]]); }

	static addPodList({ a, B }) { return B.map((b) => addPod({ a, b })); };

}

Pod.interval = interval;
Pod.note = note;

export default Pod;
