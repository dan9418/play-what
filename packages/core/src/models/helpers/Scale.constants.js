import { ROOT_DEGREE } from "../Degree.constants";
import { ROOT_PITCH } from "../Pitch.constants";

export const DIATONIC = {
	tonic: {
		id: 'tonic',
		name: 'Tonic',
		value: [0, 0]
	},
	supertonic: {
		id: 'supertonic',
		name: 'Supertonic',
		value: [2, 1]
	},
	mediant: {
		id: 'mediant',
		name: 'Mediant',
		value: [4, 2]
	},
	subdominant: {
		id: 'subdominant',
		name: 'Subdominant',
		value: [5, 3]
	},
	dominant: {
		id: 'dominant',
		name: 'Dominant',
		value: [7, 4]
	},
	submediant: {
		id: 'submediant',
		name: 'Submediant',
		value: [9, 5]
	},
	subtonic: {
		id: 'subtonic',
		name: 'Subtonic',
		value: [11, 6]
	}
};

const DIATONIC_VALUES = Object.values(DIATONIC);

export const ROOT_SCALE = DIATONIC_VALUES.map((pod, i) => (
	[
		ROOT_PITCH + pod.value[0],
		ROOT_DEGREE + pod.value[1]
	]
));
