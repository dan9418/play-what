import { IPod, NoteId } from './Model.constants';
import { NOTE_PRESETS, NOTE_PRESET_MAP } from './Model.presets';
import Pod from './Pod';

export default class Note extends Pod {

    id: NoteId;

    constructor(id: NoteId) {
        super(NOTE_PRESET_MAP, id);
    }

    static fromValue = (value: IPod) => Pod.fromValue(NOTE_PRESETS, Note, value);
}
