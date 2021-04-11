import { CHORD_PRESET_MAP } from '@pw/core/src/models/PodList/Chord/Chord.constants';
import { IModelConfig, ModelId } from './../Model.constants';
import { IChartConfig } from './Group.charts';
import { IModelPreset, IModelValue } from "../Model.constants";
import { NOTE_PRESET_MAP } from '../Pod/Note/Note.constants';

const getGroupPresetFromChartConfig = (chartConfig: IChartConfig): IModelPreset<IModelValue> | null => {

    const chartValue: IModelConfig[] = chartConfig.sections.map(section => {
        const { name, chords } = section;
        return {
            modelId: ModelId.Group,
            modelOptions: { name },
            modelValue: chords.map(model => {
                const [rootId, chordId, t] = model;
                return {
                    modelId: ModelId.Chord,
                    modelOptions: {
                        root: NOTE_PRESET_MAP.get(rootId).value,
                        t
                    },
                    modelValue: CHORD_PRESET_MAP.get(chordId).value
                } as IModelConfig;
            })
        } as IModelConfig
    });

    return {
        id: chartConfig.name.replace(' ', ''),
        name: chartConfig.name,
        value: chartValue
    }
}

export default {
    getGroupPresetFromChartConfig
};
