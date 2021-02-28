import { MODEL_ID } from "@pw/core/src/models/helpers/Model.constants";
import { NOTE } from "@pw/core/src/models/Note.constants";
import { RELATIVE_CHORD_VALUES } from "@pw/core/src/models/RelativeChord.constants";
import { INTERVAL_MODE_VALUES, RELATIVE_SCALE_VALUES } from "@pw/core/src/models/RelativeScale.constants";
import CHART_VALUES from "./chartData";

/*

IModelDef
	name?: string
	preview?: string
	modelId: string
	modelArgs: object

*/

export const LIBRARY_PATH_ROOT = {
	name: 'Library',
	modelId: MODEL_ID.Group,
	modelArgs: {
		root: NOTE.C.value,
		items: [
			/*{
				name: 'Charts',
				modelId: MODEL_ID.Group,
				modelArgs: CHART_VALUES.map(chart => (
					{
						name: chart.name,
						modelId: MODEL_ID.Group,
						modelArgs: chart.modelArgs
					}
				))
			},*/
			{
				name: 'Chords',
				modelId: MODEL_ID.Group,
				modelArgs: {
					root: NOTE.C.value,
					items: RELATIVE_CHORD_VALUES.map(chord => (
						{
							name: chord.name,
							modelId: MODEL_ID.RelativeChord,
							modelArgs: {
								intervals: chord.value
							}
						}
					))
				}
			},
			{
				name: 'Scales',
				modelId: MODEL_ID.Group,
				modelArgs: {
					root: NOTE.C.value,
					items: RELATIVE_SCALE_VALUES.map(scale => (
						{
							name: scale.name,
							modelId: MODEL_ID.RelativeScale,
							modelArgs: {
								intervals: scale.value
							}
						}
					))
				}
			},
			{
				name: 'Modes',
				modelId: MODEL_ID.Group,
				modelArgs: {
					root: NOTE.C.value,
					items: INTERVAL_MODE_VALUES.map(scale => (
						{
							name: scale.name,
							modelId: MODEL_ID.RelativeScale,
							modelArgs: {
								intervals: scale.value
							}
						}
					))
				}
			}
		]
	}
};

export default LIBRARY_PATH_ROOT;
