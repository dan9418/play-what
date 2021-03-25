import { MODEL_ID, IModelConfig } from "@pw/core/src/models/Model.constants";
import { NOTE } from "@pw/core/src/models/Pod/Note/Note.constants";
import { CHORD_VALUES } from "@pw/core/src/models/PodList/Chord/Chord.constants";
import { SCALE_VALUES } from "@pw/core/src/models/PodList/Scale/Scale.constants";
import { CHART_VALUES } from './charts';

export const LIBRARY_PATH_ROOT: IModelConfig = {
	modelId: MODEL_ID.Group,
	modelOptions: {
		modelRoot: NOTE.D.value,
		name: 'Library',
		preview: 'Select a group',
	},
	modelValue: [
		{
			modelId: MODEL_ID.Group,
			modelValue: CHART_VALUES,
			modelOptions: {
				name: 'Charts',
			}
		},
		{
			modelId: MODEL_ID.Group,
			modelValue: CHORD_VALUES.map(chord => (
				{
					modelId: MODEL_ID.Chord,
					modelValue: chord.value,
					modelOptions: {
						name: chord.name,
					}
				}
			)),
			modelOptions: {
				name: 'Chords',
			}
		},
		{
			modelId: MODEL_ID.Group,
			modelValue: SCALE_VALUES.map(scale => (
				{
					modelId: MODEL_ID.Scale,
					modelValue: scale.value,
					modelOptions: {
						name: scale.name,
					}
				}
			)),
			modelOptions: {
				name: 'Scales & Modes'
			}
		}
	]
};

export default LIBRARY_PATH_ROOT;
