import { getName } from "./Interval.utils";
import { IntervalId } from "./Model.constants";
import { INTERVAL_PRESET_MAP } from "./Model.presets";
import Pod from "./Pod";

export default class IntervalSpan extends Pod {
  presetId: IntervalId;
  offset: number;

  constructor(presetId: IntervalId) {
    super(INTERVAL_PRESET_MAP.get(presetId));
  }

  getName() {
    return getName(this.pod);
  }
}
