import { GROUP_VALUES } from "@pw/core/src/models/Group/Group.constants";
import { IModelConfig, ModelId } from "@pw/core/src/models/Model.constants";
import { NOTE } from "@pw/core/src/models/Pod/Note/Note.constants";
import { CHORD_VALUES } from "@pw/core/src/models/PodList/Chord/Chord.constants";
import { SCALE_VALUES } from "@pw/core/src/models/PodList/Scale/Scale.constants";

export const LIBRARY_PATH_ROOT: IModelConfig = {
	modelId: ModelId.Group,
	modelOptions: {
		modelRoot: NOTE.D.value,
		name: 'Library',
		viewerId: 'fretboard',
		viewerProps: {}
	},
	modelValue: [
		{
			modelId: ModelId.Group,
			modelValue: GROUP_VALUES.map(group => (
				{
					modelId: ModelId.Group,
					modelValue: group.value,
					modelOptions: {
						name: group.name
					}
				}
			)),
			modelOptions: {
				name: 'Charts'
			}
		},
		{
			modelId: ModelId.Group,
			modelValue: CHORD_VALUES.map(chord => (
				{
					modelId: ModelId.Chord,
					modelValue: chord.value,
					modelOptions: {
						name: chord.name
					}
				}
			)),
			modelOptions: {
				name: 'Chords'
			}
		},
		{
			modelId: ModelId.Group,
			modelValue: SCALE_VALUES.map(scale => (
				{
					modelId: ModelId.Scale,
					modelValue: scale.value,
					modelOptions: {
						name: scale.name
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
