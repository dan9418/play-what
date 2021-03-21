import { MODEL_ID, IModelConfig } from "@pw/core/src/models/Model.constants";
import { NOTE } from "@pw/core/src/models/Pod/Note/Note.constants";
import { RELATIVE_CHORD_VALUES } from "@pw/core/src/models/PodList/Chord/RelativeChord/RelativeChord.constants";
import { RELATIVE_SCALE_VALUES } from "@pw/core/src/models/PodList/Scale/RelativeScale/RelativeScale.constants";

export const LIBRARY_PATH_ROOT: IModelConfig = {
	modelId: MODEL_ID.Group,
	modelOptions: {
		modelRoot: NOTE.A.value,
		name: 'Library',
		preview: 'Select a group',
	},
	modelValue: [
		/*{
			name: 'Charts',
			modelId: MODEL_ID.Group,
			modelValue: CHART_VALUES.map(chart => (
				{
					name: chart.name,
					modelId: MODEL_ID.Group,
					modelValue: chart.modelValue
				}
			))
		},*/
		{
			name: 'Chords',
			modelId: MODEL_ID.Group,
			modelValue: RELATIVE_CHORD_VALUES.map(chord => (
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: chord.value,
					modelOptions: {
						name: chord.name,
					}
				}
			))
		},
		{
			name: 'Scales & Modes',
			modelId: MODEL_ID.Group,
			modelValue: RELATIVE_SCALE_VALUES.map(scale => (
				{
					modelId: MODEL_ID.RelativeScale,
					modelValue: scale.value,
					modelOptions: {
						name: scale.name,
					}
				}
			))
		}
	]
};

export default LIBRARY_PATH_ROOT;
