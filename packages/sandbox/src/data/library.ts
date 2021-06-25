import { GROUP_PRESETS } from "@pw/core/src/models/Group/Group.constants";
import { IModelConfig, IModelPreset, IModelValue, ModelId } from "@pw/core/src/models/Model.constants";
import { INTERVAL_PRESETS } from '@pw/core/src/models/Pod/Interval/Interval.constants';
import { NoteId, NOTE_PRESETS, NOTE_PRESET_MAP } from "@pw/core/src/models/Pod/Note/Note.constants";
import { CHORD_PRESETS } from "@pw/core/src/models/PodList/Chord/Chord.constants";
import { SCALE_PRESETS } from "@pw/core/src/models/PodList/Scale/Scale.constants";

const formatPresetGroup = <T extends IModelValue>(name: string, data: IModelPreset<T>[], dataType: ModelId): IModelConfig => {
	return {
		modelId: ModelId.Group,
		modelValue: data.map(d => (
			{
				modelId: dataType,
				modelValue: d.value
			}
		))
	}
}

export const LIBRARY = {
	[ModelId.Note]: formatPresetGroup('Notes', NOTE_PRESETS, ModelId.Note),
	[ModelId.Interval]: formatPresetGroup('Intervals', INTERVAL_PRESETS, ModelId.Interval),
	[ModelId.Chord]: formatPresetGroup('Chords', CHORD_PRESETS, ModelId.Chord),
	[ModelId.Scale]: formatPresetGroup('Scales', SCALE_PRESETS, ModelId.Scale),
	[ModelId.Chart]: formatPresetGroup('Charts', GROUP_PRESETS, ModelId.Chart)
};

export default LIBRARY;
