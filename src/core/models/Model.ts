import { ModelType, ModelId, Tag } from './Model.constants';

export default class Model {
    modelType: ModelType;
    modelId: ModelId;
    name: string;
    tags: Tag[];
    aliases: string[];

    getPreview() {
        return this.name || 'unnamed';
    }

    static fromValue(presetArray, subclass, value: any, compareFn: any, reduceFn: any, fromId = false) {
        const preset = presetArray.find(p => compareFn(p.value, reduceFn(value)));
        if (!preset) {
            console.error(presetArray[0].modelId, value, presetArray);
            throw new Error('Unknown model value');
        }
        return fromId ? subclass.fromId(preset.modelId) : new subclass(preset.modelId);
    }
}
