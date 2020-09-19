import degree from './degree';
import pitchClass from './pitchClass';

const d = degree.preset;
const pc = pitchClass.preset;

const MAX_PITCH_CLASS = 12;
const MAX_DEGREE = 7
const MAX = [MAX_PITCH_CLASS, MAX_DEGREE];

const ROOT_PITCH = pc.middleC.value;
const ROOT_DEGREE = d.C;

const DIATONIC_PITCHES = [
	pc.tonic,
	pc.supertonic,
	pc.mediant,
	pc.subdominant,
	pc.dominant,
	pc.submediant,
	pc.subtonic
];

const DIATONIC_DEGREES = Object.values(d);

const ROOT = DIATONIC_PITCHES.map((p, i) => (
	[
		ROOT_PITCH + DIATONIC_PITCHES[i].value,
		DIATONIC_DEGREES[i].value
	]
));

export default {
	rootScale: ROOT,
	maxPod: MAX
};
