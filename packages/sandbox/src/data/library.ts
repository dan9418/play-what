import { MODEL_ID } from "@pw/core/src/models/Model.constants";
import { NOTE } from "@pw/core/src/models/Pod/Note/Note.constants";
import { RELATIVE_CHORD_VALUES } from "@pw/core/src/models/PodList/Chord/RelativeChord/RelativeChord.constants";
import { RELATIVE_SCALE_VALUES } from "@pw/core/src/models/PodList/Scale/RelativeScale/RelativeScale.constants";
import CHART_VALUES from "./charts";
interface IModelDef {
	name?: string;
	preview?: string;
	modelId: string;
	modelValue: any[];
	modelRoot?: any;
}

export const LIBRARY_PATH_ROOT: IModelDef = {
	name: 'Library',
	preview: 'Select a group',
	modelId: MODEL_ID.Group,
	modelRoot: NOTE.A.value,
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
					modelRoot: NOTE.A.value
				}
			))
		},
		{
			name: 'Scales & Modes',
			modelId: MODEL_ID.Group,
			modelValue: RELATIVE_SCALE_VALUES.map(scale => (
				{
					name: scale.name,
					modelId: MODEL_ID.RelativeScale,
					modelValue: scale.value,
					modelRoot: NOTE.A.value
				}
			))
		}
	]
};

export default LIBRARY_PATH_ROOT;
