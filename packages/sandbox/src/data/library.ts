import { GROUP_PRESETS } from "@pw/core/src/models/Group/Group.constants";
import { IModelConfig, IModelPreset, IModelValue, ModelId } from "@pw/core/src/models/Model.constants";
import { INTERVAL_PRESETS } from '@pw/core/src/models/Pod/Interval/Interval.constants';
import { NoteId, NOTE_PRESETS, NOTE_PRESET_MAP } from "@pw/core/src/models/Pod/Note/Note.constants";
import { CHORD_PRESETS } from "@pw/core/src/models/PodList/Chord/Chord.constants";
import { SCALE_PRESETS } from "@pw/core/src/models/PodList/Scale/Scale.constants";

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
		modelRoot: NOTE_PRESET_MAP.get(NoteId.C).value,
		name: 'Library',
		viewerId: 'keyboard',
		viewerProps: {}
	},
	modelValue: [
		formatPresetGroup('Chords', CHORD_PRESETS, ModelId.Chord),
		formatPresetGroup('Scales', SCALE_PRESETS, ModelId.Scale),
		formatPresetGroup('Charts', GROUP_PRESETS, ModelId.Group),
		formatPresetGroup('Notes', NOTE_PRESETS, ModelId.Note),
		formatPresetGroup('Intervals', INTERVAL_PRESETS, ModelId.Interval)
	]
};

export default LIBRARY_PATH_ROOT;
