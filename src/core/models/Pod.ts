import Model from './Model';
import { IntervalId, IPod, NoteId } from './Model.constants';

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
        const preset = presetArray.find(p => Model.areEqual(p.value, Model.reduce(value)));
        if (!preset) throw new Error('Unknown pod value');
        return new subclass(preset.id);
    }
}
