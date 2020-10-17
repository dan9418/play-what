import degree from '../models/index/degree';
import pitch from '../models/index/pitch';
import { DIATONIC } from './diatonic';

const d = degree.preset;
const p = pitch.preset;

const MAX_PITCH = 12;
const MAX_DEGREE = 7
const MAX = [MAX_PITCH, MAX_DEGREE];

const ROOT_PITCH = p.middleC.value;
const ROOT_DEGREE = d.C.value;

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
