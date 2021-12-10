import Model from './Model';
import { IntervalId, IPod, NoteId } from './Model.constants';
import ModelUtils from './Model.utils';

export default class Pod extends Model {

    id: NoteId | IntervalId;
    value: IPod;

    constructor(presetMap, presetId: NoteId | IntervalId) {
        super(presetMap, presetId);
    }

    getIntervalListPods() {
        return [this.value];
    }

    static fromValue = (presetArray, subclass, value: IPod) => {
        const preset = presetArray.find(p => ModelUtils.areEqual(p.value, ModelUtils.reduce(value)));
        if (!preset) throw new Error('Unknown pod value');
        return new subclass(preset.id);
    }
}
