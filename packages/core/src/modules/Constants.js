import { PITCH, DEGREE, DIATONIC } from './theory/presets';

const MAX_PITCH = 12;
const MAX_DEGREE = 7
export const MAX = [MAX_PITCH, MAX_DEGREE];

const ROOT_PITCH = PITCH.middleC.value;
const ROOT_DEGREE = DEGREE.C.value;

const DIATONIC_VALUES = Object.values(DIATONIC);

export const ROOT_SCALE = DIATONIC_VALUES.map((pod, i) => (
	[
		ROOT_PITCH + pod.value[0],
		ROOT_DEGREE + pod.value[1]
	]
));
