import { INTERVAL_VALUES, NOTE_VALUES } from './Pod.presets';
import CoreUtils from './Core.utils';
import TheoryUtils from './Theory.utils';

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
		const { podType } = options;
		const reduced = this.reduce(pod);

		if (podType === 'interval') {
			return TheoryUtils.getIntervalName(reduced);
		}
		else if (podType === 'note') {
			return TheoryUtils.getNoteName(reduced);
		}
		else return '?';
	}

	static getProperty(pod, property) {
		if (!pod) return null;
		if (property === 'degree') return pod[1];
		else if (property === 'pitchClass') return pod[0];
		return null;
	}

	static getPitchClass(pod, options = {}) {
		return CoreUtils.modulo(pod[0], MAX[0]);
	}

	static getOctave(pod, options = {}) {
		return Math.floor(pod[0] / 12);
	}
}

export default PodUtils;
