import { ModelId, PresetId, Tag } from './Model.constants';

export default class Model {
    modelId: ModelId;
    id: PresetId;
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
        return fromId ? subclass.fromId(preset.id) : new subclass(preset.id);
    }
}
