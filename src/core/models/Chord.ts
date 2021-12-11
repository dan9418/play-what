import Model from './Model';
import { ChordId, IPod } from './Model.constants';
import { CHORD_PRESETS, CHORD_PRESET_MAP } from './Model.presets';
import PodList from './PodList';

export default class Chord extends PodList {

    constructor(id: ChordId, options = undefined) {
        super(CHORD_PRESET_MAP, id, options);
    }

    static fromValue = (value: IPod[]) => Model.fromValue(CHORD_PRESETS, Chord, value);
}
