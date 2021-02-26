import { MODEL_ID } from "@pw/core/src/models/helpers/Model.constants";
import { NOTE } from "@pw/core/src/models/Note.constants";
import { RELATIVE_CHORD_VALUES } from "@pw/core/src/models/RelativeChord.constants";
import { INTERVAL_MODE_VALUES, RELATIVE_SCALE_VALUES } from "@pw/core/src/models/RelativeScale.constants";
import CHART_VALUES from "./chartData";

const ROOT_POD = NOTE.D;

export const LIBRARY_PATH_ROOT = {
	name: 'Library',
	modelId: MODEL_ID.Group,
	modelData: [
		{
			name: 'Chords',
			modelId: MODEL_ID.Group,
			modelData: RELATIVE_CHORD_VALUES.map(chord => (
				{
					name: chord.name,
					modelId: MODEL_ID.Chord,
					modelData: {
						root: ROOT_POD.value,
						intervals: chord.value
					}
				}
			))
		},
		{
			name: 'Scales',
			modelId: MODEL_ID.Group,
			modelData: RELATIVE_SCALE_VALUES.map(scale => (
				{
					name: scale.name,
					modelId: MODEL_ID.Scale,
					modelData: {
						root: ROOT_POD.value,
						intervals: scale.value
					}
				}
			))
		},
		{
			name: 'Modes',
			modelId: MODEL_ID.Group,
			modelData: INTERVAL_MODE_VALUES.map(scale => (
				{
					name: scale.name,
					modelId: MODEL_ID.Scale,
					modelData: {
						root: ROOT_POD.value,
						intervals: scale.value
					}
				}
			))
		},
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
		}
	]
};

export default LIBRARY_PATH_ROOT;
