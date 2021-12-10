import IntervalUtils from "./Interval.utils";
import Model from "./Model";
import { IntervalId, IPod } from './Model.constants';
import { INTERVAL_PRESETS, INTERVAL_PRESET_MAP } from './Model.presets';
import Pod from "./Pod";

export default class IntervalSpan extends Pod {

    id: IntervalId;

    constructor(id: IntervalId) {
        super(INTERVAL_PRESET_MAP, id);
    }

    getName = () => {
        return IntervalUtils.getName(this.value);
    }

    static fromValue = (value: IPod) => Model.fromValue(INTERVAL_PRESETS, IntervalSpan, value);

}
