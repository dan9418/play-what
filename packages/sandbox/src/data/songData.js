import { MODEL_ID } from "@pw/core/src/models/helpers/Model.constants";
import { NOTE } from "@pw/core/src/models/Note.constants";
import { RELATIVE_CHORD_VALUES } from "@pw/core/src/models/RelativeChord.constants";
import { INTERVAL_MODE_VALUES, RELATIVE_SCALE_VALUES } from "@pw/core/src/models/RelativeScale.constants";
import CHART_VALUES from "./chartData";

const ROOT_POD = NOTE.D;

export const LIBRARY_PATH_ROOT = {
	pathId: 'library',
	name: 'Library',
	modelId: MODEL_ID.Group,
	modelData: [
		{
			pathId: 'chords',
			name: 'Chords',
			modelId: MODEL_ID.Group,
			modelData: RELATIVE_CHORD_VALUES.map(chord => (
				{
					pathId: chord.id,
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
			pathId: 'scales',
			name: 'Scales',
			modelId: MODEL_ID.Group,
			modelData: RELATIVE_SCALE_VALUES.map(scale => (
				{
					pathId: scale.id,
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
			pathId: 'modes',
			name: 'Modes',
			modelId: MODEL_ID.Group,
			modelData: INTERVAL_MODE_VALUES.map(scale => (
				{
					pathId: scale.id,
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
			pathId: 'charts',
			name: 'Charts',
			modelId: MODEL_ID.Group,
			modelData: CHART_VALUES.map(chart => (
				{
					pathId: chart.id,
					name: chart.name,
					modelId: MODEL_ID.Group,
					modelData: chart.modelData
				}
			))
		}
	]
};

export default LIBRARY_PATH_ROOT;
