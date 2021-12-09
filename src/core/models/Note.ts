import { IPod } from './Model.constants';
import ModelUtils from './Model.utils';
import { NoteId, NOTE_PRESETS, NOTE_PRESET_MAP } from './Note.constants';

export default class Note {

    preset: any;

    constructor(id: NoteId) {
        const preset = NOTE_PRESET_MAP.get(id);
        if (!preset) throw new Error('Unknown interval id');

        this.preset = preset;
    }

    getName = () => {
        return this.preset.name;
    }

    getIntervalListPods = () => {
        return [this.preset.value];
    }

    static fromValue = (value: IPod) => {
        const preset = NOTE_PRESETS.find(p => ModelUtils.areEqual(p.value, value));
        if (!preset) throw new Error('Unknown note value');
        return new Note(preset.id as NoteId);
    }
}
