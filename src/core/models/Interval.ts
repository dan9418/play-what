import IntervalUtils from "./Interval.utils";
import { IntervalId, IPod } from './Model.constants';
import { INTERVAL_PRESETS, INTERVAL_PRESET_MAP, MASTER_PRESETS } from './Model.presets';
import ModelUtils from './Model.utils';
import Pod from "./Pod";

export default class IntervalSpan extends Pod {

    id: IntervalId;

    constructor(id: IntervalId) {
        super(INTERVAL_PRESET_MAP, id);
    }

    getName = () => {
        return IntervalUtils.getName(this.value);
    }

    getSubsets = () => {
        return MASTER_PRESETS.filter(preset => ModelUtils.containsSubset([this.value], preset.value));
    }

    getSupersets = () => {
        return MASTER_PRESETS.filter(preset => ModelUtils.containsSubset(preset.value, [this.value]));
    }

    static fromValue = (value: IPod) => Pod.fromValue(INTERVAL_PRESETS, IntervalSpan, value);

}
