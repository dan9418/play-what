import { IntervalId, INTERVAL_PRESETS, INTERVAL_PRESET_MAP } from './Interval.constants';
import IntervalUtils from "./Interval.utils";
import { IPod } from './Model.constants';
import { MASTER_PRESETS } from './Model.presets';
import ModelUtils from './Model.utils';

export default class IntervalSpan {

    preset: any;

    constructor(id: IntervalId) {
        const preset = INTERVAL_PRESET_MAP.get(id);
        if (!preset) throw new Error('Unknown interval id');

        this.preset = preset;
    }

    getName = () => {
        return IntervalUtils.getName(this.preset.value);
    }

    getIntervalListPods = () => {
        return [this.preset.value];
    }

    getSubsets = () => {
        return MASTER_PRESETS.filter(preset => ModelUtils.containsSubset([this.preset.value], preset.value));
    }

    getSupersets = () => {
        return MASTER_PRESETS.filter(preset => ModelUtils.containsSubset(preset.value, [this.preset.value]));
    }

    static fromValue = (value: IPod) => {
        const preset = INTERVAL_PRESETS.find(p => ModelUtils.areEqual(p.value, value));
        if (!preset) throw new Error('Unknown interval value');
        return new IntervalSpan(preset.id as IntervalId);
    }
}
