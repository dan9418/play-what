import { IModelConfig, ModelId, PresetId, Tag } from './Model.constants';
import { MASTER_PRESETS } from './Model.presets';
import ModelUtils from './Model.utils';

export default class Model implements IModelConfig {
    modelId: ModelId;
    id: PresetId;
    name: string;
    tags: Tag[];
    value: any;

    constructor(presetMap, presetId: PresetId) {
        const preset = presetMap.get(presetId);
        if (!preset) throw new Error(`Unknown prestId: ${presetId}`);

        this.modelId = preset.modelId;
        this.id = preset.id;
        this.name = preset.name;
        this.tags = preset.tags;
        this.value = preset.value;
    }

    getSubsets(isList = false) {
        const compareValue = isList ? this.value : [this.value];
        return MASTER_PRESETS.filter(preset => compareValue.length !== preset.value.length && ModelUtils.containsSubset(compareValue, preset.value));
    }

    getSupersets(isList = false) {
        const compareValue = isList ? this.value : [this.value];
        return MASTER_PRESETS.filter(preset => compareValue.length !== preset.value.length && ModelUtils.containsSubset(preset.value, compareValue));
    }

    static fromValue = (presetArray, subclass, value: any, isList = false) => {
        const compareValue = isList ? ModelUtils.reduceList(value) : ModelUtils.reduce(value);
        const compareFn = isList ? ModelUtils.areEqualList : ModelUtils.areEqual;
        const preset = presetArray.find(p => compareFn(p.value, compareValue as any));
        if (!preset) {
            console.error(presetArray[0].modelId, value, isList, presetArray);
            throw new Error('Unknown model value');
        }
        return new subclass(preset.id);
    }
}
