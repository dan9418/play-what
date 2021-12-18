import { IPod, ModelId, PresetId, Tag } from './Model.constants';

export default class Model {
    modelId: ModelId;
    id: PresetId;
    name: string;
    tags: Tag[];

    getPreview() {
        return this.name || 'unnamed';
    }

    static fromValue = (presetArray, subclass, value: any, compareFn: any, reduceFn: any) => {
        const preset = presetArray.find(p => compareFn(p.value, reduceFn(value)));
        if (!preset) {
            console.error(presetArray[0].modelId, value, presetArray);
            throw new Error('Unknown model value');
        }
        return new subclass(preset.id);
    }

    static containsSubset = (podList: IPod[], subset: IPod[]): boolean => {
        for (let i = 0; i < subset.length; i++) {
            if (!podList.find(x => x[0] === subset[i][0] && x[1] === subset[i][1]))
                return false;
        }
        return true;
    };
}
