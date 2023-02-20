import { DEFAULT_DEGREE_COLOR_SCHEME } from "../theory/Degree.constants";
import TuningUtils from "../tuning/Tuning.utils";
import { getName } from "./Interval.utils";
import { IntervalId, IPod } from "./Model.constants";
import {
  CHORD_PRESETS,
  INTERVAL_PRESET_MAP,
  SCALE_PRESETS,
} from "./Model.presets";
import Pod from "./Pod";
import { listContainsSubset } from "./Pod.static";

export default class IntervalSpan extends Pod {
  presetId: IntervalId;
  offset: number;

  constructor(presetId: IntervalId) {
    super(INTERVAL_PRESET_MAP.get(presetId));
  }

  getColor(): string | undefined {
    return this.equals(new IntervalSpan(IntervalId.P1)) ? "red" : "#555";

    return DEFAULT_DEGREE_COLOR_SCHEME[this.pod[1]];
  }

  getName() {
    return getName(this.pod);
  }

  getRatio() {
    const [p] = this.pod;

    const baseline = TuningUtils.getFrequency(0);
    const compareTo = TuningUtils.getFrequency(p);

    const ratio = compareTo / baseline;

    return `1:${ratio.toFixed(2)}`;
  }

  isInSuperset(superset: IPod[]) {
    if (superset.length <= 1) return false;
    return listContainsSubset(superset, [this.pod]);
  }

  getSupersets() {
    const result: any[] = [];

    const chords = CHORD_PRESETS.filter((preset) =>
      this.isInSuperset(preset.value)
    );

    if (chords.length) {
      result.push({
        modelName: "Chords",
        values: chords,
      });
    }

    const scales = SCALE_PRESETS.filter((preset) =>
      this.isInSuperset(preset.value)
    );

    if (scales.length) {
      result.push({
        modelName: "Scales",
        values: scales,
      });
    }

    return result;
  }
}
