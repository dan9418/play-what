import { IPod, ModelId } from './Model.constants';
import { MASTER_PRESETS } from './Model.presets';
import ModelUtils from './Model.utils';
import Note from './Note';
import { ScaleId, SCALE_PRESETS, SCALE_PRESET_MAP } from './Scale.constants';

export default class Scale {

    preset: any;
    rootPreset: any;

    constructor(id: ScaleId, options = undefined) {
        const preset = SCALE_PRESET_MAP.get(id);
        if (!preset) throw new Error('Unknown scale id');

        if (options && options.root) {
            this.applyRoot(options.root);
        }

        this.preset = preset;
    }

    getName = () => {
        return this.preset.name;
    }

    getIntervalListPods = () => {
        return this.preset.value;
    }

    getIntervalListString = () => {
        return ModelUtils.getName(this.preset.value, ModelId.Interval)
    }

    getSubsets = () => {
        return MASTER_PRESETS.filter(preset => ModelUtils.containsSubset(this.preset.value, preset.value));
    }

    getSupersets = () => {
        return MASTER_PRESETS.filter(preset => ModelUtils.containsSubset(preset.value, this.preset.value));
    }

    applyRoot = (root) => {
        this.rootPreset = new Note(root).preset;
        return this;
    }

    getNoteListPods = () => {
        return ModelUtils.addPodList(this.rootPreset.value, this.preset.value);
    }

    getNoteListClasses = () => {
        return this.getNoteListPods().map(pod => Note.fromValue(pod));
    }

    static fromValue = (value: IPod[]) => {
        const preset = SCALE_PRESETS.find(p => ModelUtils.areEqualList(p.value, value));
        if (!preset) throw new Error('Unknown scale value');
        return new Scale(preset.id as ScaleId);
    }
}
