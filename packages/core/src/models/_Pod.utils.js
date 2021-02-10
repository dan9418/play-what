import CoreUtils from '../Core.utils';

const MAX = [12, 7];
const DEFAULT_POD = [0, 0];
class PodUtils {

	static areEqual(a, b) {
		if (!a || !b || a.length !== 2 || b.length !== 2) return false;
		return a[0] === b[0] && a[1] === b[1];
	}

	static addPod(a, b) {
		const p = a[0] + b[0];
		const d = a[1] + b[1];
		return [p, d];
	}

	static addPodList(a, B, max = MAX) {
		const newValue = B.map((b) => this.addPod(a, b, max));
		return newValue;
	};

	static reduce(a, max = MAX) {
		const p = CoreUtils.modulo(a[0], max[0]);
		const d = CoreUtils.modulo(a[1], max[1]);
		return [p, d];
	}

	static getName(pod, options = {}) {
		return 'lilbitch';
	}

	static getPitchClass(pod, options = {}) {
		return CoreUtils.modulo(pod[0], MAX[0]);
	}

	static getOctave(pod, options = {}) {
		return Math.floor(pod[0] / 12);
	}

	static getDegree(pod, options = {}) {
		return CoreUtils.modulo(pod[1], MAX[1]);
	}

	static getX(pod, options = {}) {
		return Math.floor(pod[1] / 7);
	}
}

export default PodUtils;
