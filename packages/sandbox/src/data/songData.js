import { NOTE } from "@pw/core/src/models/Note.constants";
import { RELATIVE_CHORD, RELATIVE_CHORD_VALUES } from "@pw/core/src/models/RelativeChord.constants";
import { MODEL_ID } from "@pw/core/src/models/helpers/Model.constants";
import { RELATIVE_SCALE_VALUES, INTERVAL_MODE_VALUES } from "@pw/core/src/models/RelativeScale.constants";
import { OUT_OF_NOWHERE } from "./chartData";

const ROOT_POD = NOTE.A;

export const CHORDS = {
	name: 'Chords',
	modelId: MODEL_ID.Group,
	modelConfig: RELATIVE_CHORD_VALUES.map(chord => (
		{
			id: chord.id,
			name: chord.name,
			modelId: MODEL_ID.Chord,

			modelConfig: {
				root: ROOT_POD.value,
				intervals: chord.value
			}
		}
	))
};

export const SCALES = {
	name: 'Scales',
	modelId: MODEL_ID.Group,
	modelConfig: RELATIVE_SCALE_VALUES.map(scale => (
		{
			id: scale.id,
			name: scale.name,
			modelId: MODEL_ID.Scale,
			modelConfig: {
				root: ROOT_POD.value,
				intervals: scale.value
			}
		}
	))
};

export const MODES = {
	name: 'Modes',
	modelId: MODEL_ID.Group,
	modelConfig: INTERVAL_MODE_VALUES.map(scale => (
		{
			id: scale.id,
			name: scale.name,
			modelId: MODEL_ID.Scale,
			modelConfig: {
				root: ROOT_POD.value,
				intervals: scale.value
			}
		}
	))
};

export const CHARTS = {
	name: 'Charts',
	modelId: MODEL_ID.Group,
	modelConfig: [
		OUT_OF_NOWHERE
	]
};

export const SONG_DATA = {
	name: 'Library',
	modelId: MODEL_ID.Group,
	vars: {
		root: ROOT_POD
	},
	modelConfig: [
		CHORDS,
		SCALES,
		MODES,
		CHARTS
	]
};

export default SONG_DATA;
