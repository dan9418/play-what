import Model from './Model';
import { ChordId, IPod, ModelId, ScaleId } from './Model.constants';
import ModelUtils from './Model.utils';
import Note from './Note';

export default class Pod extends Model {

    id: ChordId | ScaleId;
    value: IPod[];
    rootPreset: Note;

    constructor(presetMap, presetId: ChordId | ScaleId, options) {
        super(presetMap, presetId);

        if (options && options.root) {
            this.applyRoot(options.root);
        }
    }

    applyRoot(root) {
        let note;
        try {
            note = new Note(root);;
        }
        catch (e) {
            console.error(e);
            throw new Error('Unable to apply root');
        }
        this.rootPreset = note;
        return this;
    }

    getIntervalListPods() {
        return this.value;
    }

    getIntervalListString() {
        return ModelUtils.getName(this.value, ModelId.Interval);
    }

    getSubsets() { return super.getSubsets(true); }

    getSupersets() { return super.getSupersets(true); }

}
