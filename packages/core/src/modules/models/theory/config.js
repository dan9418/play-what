import degree from './degree';
import pitch from './pitch';
import { DIATONIC } from './diatonic';

const d = degree.preset;
const p = pitch.preset;

const MAX_PITCH = 12;
const MAX_DEGREE = 7
const MAX = [MAX_PITCH, MAX_DEGREE];

const ROOT_PITCH = p.middleC.value;
const ROOT_DEGREE = d.C.value;

const DIATONIC_VALUES = Object.values(DIATONIC);

const ROOT = DIATONIC_VALUES.map((vector, i) => (
	[
		ROOT_PITCH + vector.value[0],
		ROOT_DEGREE + vector.value[1]
	]
));

export default {
	rootScale: ROOT,
	maxVector: MAX
};
