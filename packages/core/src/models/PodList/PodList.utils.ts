import ToneUtils from '../../tone/Tone.utils';
import TuningUtils from '../../tuning/Tuning.utils';
import PodUtils from '../Pod/Pod.utils';
import { IPod } from './../Model.constants';

// Equality

const areEqual = (A: IPod[], B: IPod[]): boolean => {
	if (!A || !B || A.length !== B.length) return false;
	for (let i = 0; i < A.length; i++) {
		const a = A[i];
		const b = B[i];
		if (!PodUtils.areEqual(a, b)) return false;
	}
	return true;
}

// Reduction

const reduce = (A: IPod[]): IPod[] => {
	return A.map((a) => PodUtils.reduce(a));
}

// Search

const getPodAtPitch = (A: IPod[], p: number, matchOctave: boolean): IPod | null => {
	const pod = A.find(a => PodUtils.getPodAtPitch(a, p, matchOctave));
	return pod ? pod : null;
};

// Sound

const playSound = (notes: IPod[]): void => {
	const frequencies = notes.map(n => TuningUtils.getFrequency(n[0]));
	ToneUtils.playSound(frequencies)
}

// Other

const containsSubset = (podList: IPod[], subset: IPod[]): boolean => {
	for (let i = 0; i < subset.length; i++) {
		if (!podList.find(x => x[0] === subset[i][0] && x[1] === subset[i][1]))
			return false;
	}
	return true;
};

/*const getName = (podList: IPod[]): string => {
	if (podList.length === 0) {
		return "No Selection";
	}
	else if (podList.length === 1) {
		const ivlPreset = INTERVAL_PRESETS.find(ivl => PodUtils.areEqual(ivl.value, podList[0]));
		return ivlPreset.name;
	}
	else if (podList.length === 2 && PodUtils.areEqual(podList[0], INTERVAL_PRESET_MAP.get(IntervalId.P1).value)) {
		const ivlPreset = INTERVAL_PRESETS.find(ivl => PodUtils.areEqual(ivl.value, podList[1]));
		return ivlPreset.name;
	}
	else if (podList.length === 2) {
		return 'Unknown Interval Pair';
	}
	else if (podList.length >= 3 && podList.length < 5) {
		let qualifier;
		return 'chord';
	}
	else {
		return 'scale';
	}
};*/

const sort = (podList: IPod[]) => {
	return podList.sort((a, b) => {
		if (a[0] < b[0]) return -1;
		else if (a[0] > b[0]) return 1;
		else {
			if (a[1] < b[1]) return -1;
			else if (a[1] > b[1]) return 1;
			else return 0;
		}
	});
}

export default {
	areEqual,
	reduce,
	getPodAtPitch,
	playSound,
	containsSubset,
	sort
};
