import NumberUtils from '../../general/Number.utils';
import ToneUtils from '../../tone/Tone.utils';
import TuningUtils from '../../tuning/Tuning.utils';
import { IPod } from './../Model.constants';
import { MAX_POD } from './Pod.constants';

// Equality

const areEqual = (a: IPod, b: IPod): boolean => {
	if (!a || !b || a.length !== 2 || b.length !== 2) return false;
	return a[0] === b[0] && a[1] === b[1];
}

// Reduction

const reduce = (a: IPod, max = MAX_POD): IPod => {
	const p = NumberUtils.modulo(a[0], max[0]);
	const d = NumberUtils.modulo(a[1], max[1]);
	return [p, d];
}

// Addition

const addPod = (a: IPod, b: IPod, reduceResult = false): IPod => {
	const p = a[0] + b[0];
	const d = a[1] + b[1];
	const result: IPod = [p, d];
	return reduceResult ? reduce(result) : result;
}

const subtractPod = (a: IPod, b: IPod, reduceResult = false): IPod => {
	const p = a[0] - b[0];
	const d = a[1] - b[1];
	const result: IPod = [p, d];
	return reduceResult ? reduce(result) : result;
}

const addPodList = (a: IPod, B: IPod[]): IPod[] => {
	const newValue = B.map((b) => addPod(a, b));
	return newValue;
};

// Property Derivation

const getPitchClass = (pod: IPod): number => {
	return NumberUtils.modulo(pod[0], MAX_POD[0]);
}

const getOctave = (pod: IPod, midi = false): number => {
	const raw = Math.floor(pod[0] / 12);
	return midi ? raw + 4 : raw;
}

const getDegree = (pod: IPod): number => {
	return NumberUtils.modulo(pod[1], MAX_POD[1]);
}

const getX = (pod: IPod): number => {
	return Math.floor(pod[1] / 7);
}

// Search

const getPodAtPitch = (pod: IPod, p: number, matchOctave = false): IPod | null => {
	const pitchOffset = 0;
	const target = p - pitchOffset;
	let a = pod[0];
	let b = target;
	if (!matchOctave) {
		a = NumberUtils.modulo(a, 12);
		b = NumberUtils.modulo(b, 12);
	}
	return a === b ? pod : null;
};

// Sound

const playSound = (note: IPod): void => {
	const frequency = TuningUtils.getFrequency(note[0]);
	ToneUtils.playSound(frequency)
}

export default {
	areEqual,
	addPod,
	subtractPod,
	addPodList,
	reduce,
	getPitchClass,
	getOctave,
	getDegree,
	getX,
	getPodAtPitch,
	playSound
};
