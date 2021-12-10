import { IModelConfig, ModelId, PresetId, Tag } from './Model.constants';

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
}
