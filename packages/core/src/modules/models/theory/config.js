import degree from './degree';
import pitch from './pitch';

const d = degree.preset;
const p = pitch.preset;

const MAX_PITCH_CLASS = 12;
const MAX_DEGREE = 7
const MAX = [MAX_PITCH_CLASS, MAX_DEGREE];

const ROOT_PITCH = p.middleC.value;
const ROOT_DEGREE = d.C;

const DIATONIC_PITCHES = [
	p.tonic,
	p.supertonic,
	p.mediant,
	p.subdominant,
	p.dominant,
	p.submediant,
	p.subtonic
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
