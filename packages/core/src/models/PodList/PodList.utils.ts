import ToneUtils from '../../tone/Tone.utils';
import TuningUtils from '../../tuning/Tuning.utils';
import PodUtils from '../Pod/Pod.utils';
import { IPod } from './../Model.constants';
import { IntervalId, INTERVAL_PRESETS, INTERVAL_PRESET_MAP } from './../Pod/Interval/Interval.constants';

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

const playSound = (modelValue: IPod[]): void => {
	const notes = modelValue;
	const frequencies = notes.map(n => TuningUtils.getFrequency(n[0]));
	ToneUtils.playSound(frequencies)
}

// Other

const containsSubset = (modelValue: IPod[], subset: IPod[]): boolean => {
	for (let i = 0; i < subset.length; i++) {
		if (!modelValue.find(x => x[0] === subset[i][0] && x[1] === subset[i][1]))
			return false;
	}
	return true;
};

const getName = (modelValue: IPod[]): string => {
	if (modelValue.length === 0) {
		return "No Selection";
	}
	else if (modelValue.length === 1) {
		const ivlPreset = INTERVAL_PRESETS.find(ivl => PodUtils.areEqual(ivl.value, modelValue[0]));
		return ivlPreset.name;
	}
	else if (modelValue.length === 2 && PodUtils.areEqual(modelValue[0], INTERVAL_PRESET_MAP.get(IntervalId.P1).value)) {
		const ivlPreset = INTERVAL_PRESETS.find(ivl => PodUtils.areEqual(ivl.value, modelValue[1]));
		return ivlPreset.name;
	}
	else if (modelValue.length === 2) {
		return 'Unknown Interval Pair';
	}
	else if (modelValue.length >= 3 && modelValue.length < 5) {
		let qualifier;
		return 'chord';
	}
	else {
		return 'scale';
	}
};

const sort = (modelValue: IPod[]) => {
	return modelValue.sort((a, b) => {
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
	getName,
	sort
};
