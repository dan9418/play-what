import CoreUtils from './Core.utils';
import { CHORD_VALUES, SCALE_VALUES } from './Pod.presets';
import PodUtils from './Pod.utils';


const MAX = [12, 7];
const DEFAULT_POD = [0, 0];

class PodListUtils {

	static areEqual(A, B) {
		if (!A || !B || A.length !== B.length) return false;
		for (let i = 0; i < A.length; i++) {
			const a = A[i];
			const b = B[i];
			if (!PodUtils.areEqual(a, b)) return false;
		}
		return true;
	}

	static reduce(A, max = MAX) {
		return A.map((a) => PodUtils.reduce(a, max));
	}

	static findPodWithPitch(A, p) {
		return A.find((n) => n[0] === p) || null;
	};

	static findIndexOfPodWithPitchClass(A, p) {
		const pc = CoreUtils.modulo(p, 12);
		return A.findIndex(pod => CoreUtils.modulo(pod[0], 12) === pc);
	};

	static findPodWithPitchClass(A, p) {
		const pc = CoreUtils.modulo(p, 12);
		return A.find(pod => CoreUtils.modulo(pod[0], 12) === pc) || null;
	};

	static findIndexOfPodWithPitch(A, p, options) {
		return A.findIndex((n) => n[0] === p);
	};

	static getPreview(pods, options = {}) {
		if (!pods || !pods.length) return '';
		return pods.map(v => PodUtils.getName(v, options)).join(', ');
	}

	static findPreset(podList, options = {}) {
		let data = []
		if (options.podType === 'chord') {
			data = CHORD_VALUES;
		}
		else if (options.podType === 'scale') {
			data = SCALE_VALUES;
		}
		return data.find(d => PodListUtils.areEqual(podList, d.value)) || null;
	}

	static getName(podList, options = {}) {
		const preset = this.findPreset(podList, options);
		return preset ? preset.id : JSON.stringify(podList);
	}

}

export default PodListUtils;
