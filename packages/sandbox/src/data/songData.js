import { MODEL_ID } from "@pw/core/src/models/helpers/Model.constants";
import { RELATIVE_CHORD_VALUES } from "@pw/core/src/models/RelativeChord.constants";
import { INTERVAL_MODE_VALUES, RELATIVE_SCALE_VALUES } from "@pw/core/src/models/RelativeScale.constants";
import CHART_VALUES from "./chartData";

export const LIBRARY_PATH_ROOT = {
	name: 'Library',
	modelId: MODEL_ID.Group,
	modelData: [
		{
			name: 'Charts',
			modelId: MODEL_ID.Group,
			modelData: CHART_VALUES.map(chart => (
				{
					name: chart.name,
					modelId: MODEL_ID.Group,
					modelData: chart.modelData
				}
			))
		},
		{
			name: 'Chords',
			modelId: MODEL_ID.Group,
			modelData: RELATIVE_CHORD_VALUES.map(chord => (
				{
					name: chord.name,
					modelId: MODEL_ID.RelativeChord,
					modelData: chord.value
				}
			))
		},
		{
			name: 'Scales',
			modelId: MODEL_ID.Group,
			modelData: RELATIVE_SCALE_VALUES.map(scale => (
				{
					name: scale.name,
					modelId: MODEL_ID.RelativeScale,
					modelData: scale.value
				}
			))
		},
		{
			name: 'Modes',
			modelId: MODEL_ID.Group,
			modelData: INTERVAL_MODE_VALUES.map(scale => (
				{
					name: scale.name,
					modelId: MODEL_ID.RelativeScale,
					modelData: scale.value
				}
			))
		}
	]
};

export default LIBRARY_PATH_ROOT;
