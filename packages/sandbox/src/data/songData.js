import { NOTE } from "@pw/core/src/models/Note.constants";
import { INTERVAL_CHORD, INTERVAL_CHORD_VALUES } from "@pw/core/src/models/RelativeChord.constants";
import { MODEL_ID } from "@pw/core/src/models/helpers/Model.constants";
import { INTERVAL_SCALE_VALUES, INTERVAL_MODE_VALUES } from "@pw/core/src/models/RelativeScale.constants";
import { OUT_OF_NOWHERE } from "./chartData";

const ROOT_POD = NOTE.A;

export const CHORDS = {
	id: 'chords',
	name: 'Chords',
	modelId: MODEL_ID.Group,
	modelConfig: INTERVAL_CHORD_VALUES.map(chord => (
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
	id: 'scales',
	name: 'Scales',
	modelId: MODEL_ID.Group,
	modelConfig: INTERVAL_SCALE_VALUES.map(scale => (
		{
			id: scale.id,
			name: scale.name,
			modelId: MODEL_ID.Chord,
			modelConfig: {
				root: ROOT_POD.value,
				intervals: scale.value
			}
		}
	))
};

export const MODES = {
	id: 'modes',
	name: 'Modes',
	modelId: MODEL_ID.Group,
	modelConfig: INTERVAL_MODE_VALUES.map(scale => (
		{
			id: scale.id,
			name: scale.name,
			modelId: MODEL_ID.Chord,
			modelConfig: {
				root: ROOT_POD.value,
				intervals: scale.value
			}
		}
	))
};

export const CHARTS = {
	id: 'charts',
	name: 'Charts',
	modelId: MODEL_ID.Group,
	modelConfig: [
		OUT_OF_NOWHERE
	]
};

export const SONG_DATA = {
	id: 'Library',
	name: 'Library',
	modelId: MODEL_ID.Group,
	modelConfig: [
		CHORDS,
		SCALES,
		MODES,
		CHARTS
	]
};

export default SONG_DATA;
