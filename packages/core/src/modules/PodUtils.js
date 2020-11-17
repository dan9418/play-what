import { INTERVAL_VALUES, NOTE_VALUES } from './Presets';
import Utils from './Utils';

const MAX = [12, 7];
const DEFAULT_POD = [0, 0];

class PodUtils {

	static areEqual(a, b) {
		if (!b || b.length !== 2) return false;
		return a[0] === b[0] && a[1] === b[1];
	}

	static addPod(a, b, max = MAX) {
		const p = a[0] + b[0];//Utils.moduloSum(a[0], b[0], divisor[0]);
		const d = a[1] + b[1];//Utils.moduloSum(a[1], b[1], divisor[1]);
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
		const p = Utils.modulo(a[0], max[0]);
		const d = Utils.modulo(a[1], max[1]);
		return [p, d];
	}

	static reduceList(A, max = MAX) {
		const newValue = A.map((a) => {
			return this.reduceSingle(a, max);
		});
		return newValue;
	}

	static reduce(value, options = {}) {
		if (options.isList) {
			return this.reduceList(value, options.max);
		}
		else {
			return this.reduceSingle(value, options.max);
		}
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

	static findPreset(value, options = {}) {
		let data = []
		if (options.podType === 'note') {
			data = NOTE_VALUES;
		}
		else if (options.podType === 'interval') {
			data = INTERVAL_VALUES;
		}
		return data.find(d => PodUtils.areEqual(value, d.value)) || null;
	}

	static getName(value, options = {}) {
		const result = this.findPreset(value, options);
		return result ? result.id : '?';
	}

	static getPreview(value, options = {}) {
		if (!value) return '';

		const { podType, isList, reduce } = options;
		const testValue = reduce ? PodUtils.reduce(value, { isList }) : value;
		if (podType === 'pod') {
			return JSON.stringify(testValue);
		}
		else if (isList) {
			return testValue.map(v => this.getName(v, options)).join(', ');
		}
		else {
			return this.getName(testValue, options)
		}
	}

}

export default PodUtils;
