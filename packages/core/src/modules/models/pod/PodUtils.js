import Utils from '../../Utils';
import PodList from '../podList/PodList';

const MAX = [12, 7];
const DEFAULT_POD = [0, 0];

class PodUtils {

	// common

	static equalTo(a, b) {
		if (!b || b.length !== 2) return false;
		return a[0] === b[0] && a[1] === b[1];
	}

	static getName(a) {
		return 'Custom';
	}

	static getPreset(a) {
		return null;
	}

	static getPreview(a) {
		return JSON.stringify(a);
	}

	// utils

	static reduce(a, max = MAX) {
		const p = Utils.modulo(a[0], max[0]);
		const d = Utils.modulo(a[1], max[1]);
		return [p, d];
	}

	static addPod(a, b, divisor = MAX) {
		console.log('PodUtils - addPod', a, b)
		const p = Utils.moduloSum(a[0], b[0], divisor[0]);
		const d = Utils.moduloSum(a[1], b[1], divisor[1]);

		console.log('PodUtils - addPod', p, d)
		return [p, d];
	}

	static addPodList(a, B, divisor = MAX) {
		const newValue = B.map((b) => this.addPod(a, b, divisor));
		return newValue;
	};

}

export default PodUtils;
