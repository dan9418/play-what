import { INTERVAL_VALUES, NOTE_VALUES } from './Pod.presets';
import CoreUtils from './Core.utils';

const MAX = [12, 7];
const DEFAULT_POD = [0, 0];

class PodUtils {

	static areEqual(a, b) {
		if (!a || !b || a.length !== 2 || b.length !== 2) return false;
		return a[0] === b[0] && a[1] === b[1];
	}

	static addPod(a, b, max = MAX) {
		const p = a[0] + b[0];//Core.utils.moduloSum(a[0], b[0], divisor[0]);
		const d = a[1] + b[1];//Core.utils.moduloSum(a[1], b[1], divisor[1]);
		return [p, d];
	}

	static addPodList(a, B, max = MAX) {
		const newValue = B.map((b) => this.addPod(a, b, max));
		return newValue;
	};

	static areListsEqual(A, B) {
		if (!A || !B) return false;
		if (!A.length || !B.length) return false;
		for (let i = 0; i < A.length; i++) {
			const a = A[i];
			const b = B[i];

			if (!this.areEqual(a, b))
				return false;
		}
		return true;
	}

	static reduceSingle(a, max = MAX) {
		const p = CoreUtils.modulo(a[0], max[0]);
		const d = CoreUtils.modulo(a[1], max[1]);
		return [p, d];
	}

	static reduce(A, max = MAX) {
		const newValue = A.map((a) => {
			return this.reduceSingle(a, max);
		});
		return newValue;
	}

	static findPodWithPitch(A, p) {
		return A.find((n) => n[0] === p) || null;
	};

	static findIndexOfPodWithPitch(A, p, options) {
		return A.findIndex((n) => n[0] === p);
	};

	static getPresets(options = {}) {
		if (options.podType === 'note') {
			return NOTE_VALUES;
		}
		else if (options.podType === 'interval') {
			return INTERVAL_VALUES;
		}
		return [];
	}

	static findPreset(pod, options = {}) {
		let data = []
		if (options.podType === 'note') {
			data = NOTE_VALUES;
		}
		else if (options.podType === 'interval') {
			data = INTERVAL_VALUES;
		}
		return data.find(d => PodUtils.areEqual(pod, d.value)) || null;
	}

	static getName(pod, options = {}) {
		const result = this.findPreset(pod, options);
		return result ? result.id : '?';
	}

	static getPitchClass(pod, options = {}) {
		return CoreUtils.modulo(pod[0], MAX[0]);
	}

	static getOctave(pod, options = {}) {
		return Math.floor(pod[0] / 12);
	}

	static getPreview(pod, options = {}) {
		if (!pod) return '';

		const { podType, reduce } = options;
		const testValue = reduce ? this.reduce(pod) : pod;
		if (podType === 'pod') {
			return JSON.stringify(testValue);
		}
		else {
			return testValue.map(v => this.getName(v, options)).join(', ');
		}
	}

}

export default PodUtils;
