import IntervalSpan from '@pw-core/models/Interval';
import Model from './Model';
import { ChordId, IPod, ScaleId } from './Model.constants';
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

    getIntervalListClasses() {
        return this.value.map((pod) => IntervalSpan.fromValue(pod));
    }

    getIntervalListString() {
        const nameArr = this.value.map((pod) => IntervalSpan.getName(pod));
        return nameArr.join(', ');
    }

    getNoteListString() {
        const nameArr = this.value.map((pod) => Note.getName(pod));
        return nameArr.join(', ');
    }

    getNoteListClasses() {
        return this.value.map((pod) => Note.fromValue(pod));
    }

    getSubsets() { return super.getSubsets(true); }

    getSupersets() { return super.getSupersets(true); }

    getPreview() {
        return this.getIntervalListString();
    }

}
