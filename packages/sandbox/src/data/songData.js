import { NOTE } from "@pw/core/src/models/Note.constants";
import { RELATIVE_CHORD, RELATIVE_CHORD_VALUES } from "@pw/core/src/models/RelativeChord.constants";
import { MODEL_ID } from "@pw/core/src/models/helpers/Model.constants";
import { RELATIVE_SCALE_VALUES, INTERVAL_MODE_VALUES } from "@pw/core/src/models/RelativeScale.constants";
import { OUT_OF_NOWHERE } from "./chartData";

const ROOT_POD = NOTE.C;

export const CHORDS = {
	pathId: 'chords',
	name: 'Chords',
	childModelId: MODEL_ID.Group,
	childData: RELATIVE_CHORD_VALUES.map(chord => (
		{
			pathId: chord.id,
			name: chord.name,
			childModelId: MODEL_ID.Chord,
			childData: {
				root: 'pw/inputs/root',
				intervals: chord.value
			}
		}
	))
};

export const SCALES = {
	pathId: 'scales',
	name: 'Scales',
	childModelId: MODEL_ID.Group,
	childData: RELATIVE_SCALE_VALUES.map(scale => (
		{
			pathId: scale.id,
			name: scale.name,
			childModelId: MODEL_ID.Scale,
			childData: {
				root: 'pw/inputs/root',
				intervals: scale.value
			}
		}
	))
};

export const MODES = {
	pathId: 'modes',
	name: 'Modes',
	childModelId: MODEL_ID.Group,
	childData: INTERVAL_MODE_VALUES.map(scale => (
		{
			pathId: scale.id,
			name: scale.name,
			childModelId: MODEL_ID.Scale,
			childData: {
				root: 'pw/inputs/root',
				intervals: scale.value
			}
		}
	))
};

export const CHARTS = {
	pathId: 'charts',
	name: 'Charts',
	childModelId: MODEL_ID.Group,
	childData: [
		OUT_OF_NOWHERE
	]
};

export const LIBRARY_PATH_ROOT = {
	pathId: 'library',
	name: 'Library',
	modelId: MODEL_ID.Dictionary,
	modelData: {
		inputs: [
			{
				pathId: 'root',
				name: 'Root',
				childModelId: MODEL_ID.Note,
				childData: ROOT_POD.value
			}
		],
		outputs: [
			CHORDS,
			SCALES,
			MODES
		]
	}
}

export default LIBRARY_PATH_ROOT;
