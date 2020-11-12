import { DIATONIC } from './diatonic';
import { PITCH } from './presets';

const MAX_PITCH = 12;
const MAX_DEGREE = 7
const MAX = [MAX_PITCH, MAX_DEGREE];

const ROOT_PITCH = PITCH.middleC.value;
const ROOT_DEGREE = [0, 0];

const DIATONIC_VALUES = Object.values(DIATONIC);

const ROOT = DIATONIC_VALUES.map((pod, i) => (
	[
		ROOT_PITCH + pod.value[0],
		ROOT_DEGREE + pod.value[1]
	]
));

export default {
	rootScale: ROOT,
	maxPod: MAX
};
