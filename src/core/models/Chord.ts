import { ChordId, CHORD_PRESETS, CHORD_PRESET_MAP } from './Chord.constants';
import { IPod, ModelId } from './Model.constants';
import { MASTER_PRESETS } from './Model.presets';
import ModelUtils from './Model.utils';

export default class Chord {

    preset: any;

    constructor(id: ChordId) {
        const preset = CHORD_PRESET_MAP.get(id);
        if (!preset) throw new Error('Unknown chord id');

        this.preset = preset;
    }

    getName = () => {
        return this.preset.name;
    }

    getIntervalListPods = () => {
        return this.preset.value;
    }

    getIntervalListString = () => {
        return ModelUtils.getName(this.preset.value, ModelId.Interval);
    }

    getSubsets = () => {
        return MASTER_PRESETS.filter(preset => ModelUtils.containsSubset(this.preset.value, preset.value));
    }

    getSupersets = () => {
        return MASTER_PRESETS.filter(preset => ModelUtils.containsSubset(preset.value, this.preset.value));
    }

    static fromValue = (value: IPod[]) => {
        const preset = CHORD_PRESETS.find(p => ModelUtils.areEqualList(p.value, value));
        if (!preset) throw new Error('Unknown chord value');
        return new Chord(preset.id as ChordId);
    }
}
