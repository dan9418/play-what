import { MODEL_ID } from "@pw/core/src/models/helpers/Model.constants";
import { NOTE } from "@pw/core/src/models/Note.constants";
import { RELATIVE_CHORD_VALUES } from "@pw/core/src/models/RelativeChord.constants";
import { INTERVAL_MODE_VALUES, RELATIVE_SCALE_VALUES } from "@pw/core/src/models/RelativeScale.constants";

const ROOT_POD = NOTE.D;

export const LIBRARY_PATH_ROOT = {
	pathId: 'library',
	name: 'Library',
	modelId: MODEL_ID.Frame,
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
			{
				pathId: 'chords',
				name: 'Chords',
				childModelId: MODEL_ID.Group,
				childData: RELATIVE_CHORD_VALUES.map(chord => (
					{
						pathId: chord.id,
						name: chord.name,
						childModelId: MODEL_ID.Chord,
						childData: {
							root: ROOT_POD.value,
							intervals: chord.value
						}
					}
				))
			},
			{
				pathId: 'scales',
				name: 'Scales',
				childModelId: MODEL_ID.Group,
				childData: RELATIVE_SCALE_VALUES.map(scale => (
					{
						pathId: scale.id,
						name: scale.name,
						childModelId: MODEL_ID.Scale,
						childData: {
							root: ROOT_POD.value,
							intervals: scale.value
						}
					}
				))
			},
			{
				pathId: 'modes',
				name: 'Modes',
				childModelId: MODEL_ID.Group,
				childData: INTERVAL_MODE_VALUES.map(scale => (
					{
						pathId: scale.id,
						name: scale.name,
						childModelId: MODEL_ID.Scale,
						childData: {
							root: ROOT_POD.value,
							intervals: scale.value
						}
					}
				))
			}
		]
	}
}

export default LIBRARY_PATH_ROOT;
