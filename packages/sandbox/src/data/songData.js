import { MODEL_ID } from "@pw/core/src/models/Model.constants";
import { NOTE } from "@pw/core/src/models/Pod/Note/Note.constants";
import { RELATIVE_CHORD_VALUES } from "@pw/core/src/models/PodList/Chord/RelativeChord/RelativeChord.constants";
import { INTERVAL_MODE_VALUES, RELATIVE_SCALE_VALUES } from "@pw/core/src/models/PodList/Scale/RelativeScale/RelativeScale.constants";
import CHART_VALUES from "./chartData";

/*

IModelDef
	name?: string
	preview?: string
	modelId: string
	modelValue: object

*/

export const LIBRARY_PATH_ROOT = {
	name: 'Library',
	modelId: MODEL_ID.Group,
	modelOptions: {
		root: NOTE.B.value
	},
	modelValue: [
		{
			name: 'Charts',
			modelId: MODEL_ID.Group,
			modelValue: CHART_VALUES.map(chart => (
				{
					name: chart.name,
					modelId: MODEL_ID.Group,
					modelValue: chart.modelValue
				}
			))
		},
		{
			name: 'Chords',
			modelId: MODEL_ID.Group,
			modelValue: RELATIVE_CHORD_VALUES.map(chord => (
				{
					name: chord.name,
					modelId: MODEL_ID.RelativeChord,
					modelValue: chord.value,
					modelOptions: {
						root: NOTE.C.value
					}
				}
			))
		},
		{
			name: 'Scales',
			modelId: MODEL_ID.Group,
			modelValue: RELATIVE_SCALE_VALUES.map(scale => (
				{
					name: scale.name,
					modelId: MODEL_ID.RelativeScale,
					modelValue: scale.value,
					modelOptions: {
						root: NOTE.C.value
					}
				}
			))
		},
		{
			name: 'Modes',
			modelId: MODEL_ID.Group,
			modelValue: INTERVAL_MODE_VALUES.map(scale => (
				{
					name: scale.name,
					modelId: MODEL_ID.RelativeScale,
					modelValue: scale.value,
					modelOptions: {
						root: NOTE.C.value
					}
				}
			))
		}
	]
};

export default LIBRARY_PATH_ROOT;
