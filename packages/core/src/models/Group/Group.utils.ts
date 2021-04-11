import { CHORD } from '@pw/core/src/models/PodList/Chord/Chord.constants';
import { IModelConfig, ModelId } from './../Model.constants';
import { IChartConfig } from './Group.charts';
import { IModelPreset, IModelValue } from "../Model.constants";
import { NOTE } from '../Pod/Note/Note.constants';

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
                        root: NOTE[rootId].value,
                        t
                    },
                    modelValue: CHORD[chordId].value
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
