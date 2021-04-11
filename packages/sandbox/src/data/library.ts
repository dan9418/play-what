import { INTERVAL_VALUES } from '@pw/core/src/models/Pod/Interval/Interval.constants';
import { GROUP_VALUES } from "@pw/core/src/models/Group/Group.constants";
import { IModelConfig, IModelPreset, ModelId, IModelValue } from "@pw/core/src/models/Model.constants";
import { NOTE, NOTE_VALUES } from "@pw/core/src/models/Pod/Note/Note.constants";
import { CHORD_VALUES } from "@pw/core/src/models/PodList/Chord/Chord.constants";
import { SCALE_VALUES } from "@pw/core/src/models/PodList/Scale/Scale.constants";

const formatPresetGroup = <T extends IModelValue>(name: string, data: IModelPreset<T>[], dataType: ModelId): IModelConfig => {
	return {
		modelId: ModelId.Group,
		modelOptions: { name },
		modelValue: data.map(d => (
			{
				modelId: dataType,
				modelValue: d.value,
				modelOptions: {
					name: d.name
				}
			}
		))
	}
}

export const LIBRARY_PATH_ROOT: IModelConfig = {
	modelId: ModelId.Group,
	modelOptions: {
		modelRoot: NOTE.D.value,
		name: 'Library',
		viewerId: 'fretboard',
		viewerProps: {}
	},
	modelValue: [
		formatPresetGroup('Chords', CHORD_VALUES, ModelId.Chord),
		formatPresetGroup('Scales', SCALE_VALUES, ModelId.Scale),
		formatPresetGroup('Charts', GROUP_VALUES, ModelId.Group),
		formatPresetGroup('Notes', NOTE_VALUES, ModelId.Note),
		formatPresetGroup('Intervals', INTERVAL_VALUES, ModelId.Interval)
	]
};

export default LIBRARY_PATH_ROOT;
