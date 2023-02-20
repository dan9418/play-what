import { DEFAULT_DEGREE_COLOR_SCHEME } from "../theory/Degree.constants";
import TuningUtils from "../tuning/Tuning.utils";
import {
  IIntervalQuality,
  IModelConfig,
  IntervalId,
  INTERVAL_QUALITY,
  IPod,
  MAX_POD,
} from "./Model.constants";
import {
  CHORD_PRESETS,
  CORE_INTERVALS,
  INTERVAL_PRESET_MAP,
  SCALE_PRESETS,
} from "./Model.presets";
import Pod from "./Pod";
import {
  getExtensionInversionId,
  listContainsSubset,
  reducePod,
} from "./Pod.static";

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

  getIsExtended(): boolean {
    return this.pod[0] > MAX_POD[0] || this.pod[1] > MAX_POD[1];
  }

  getName() {
    const reduced = reducePod(this.pod);

    const [noteIndex, d] = reduced;
    const degreeIntervals = CORE_INTERVALS[d] as IModelConfig[];
    if (!degreeIntervals) return "?";

    const pIvl = degreeIntervals[0];
    const loIvl = pIvl;
    const hiIvl = degreeIntervals[degreeIntervals.length - 1];

    // determine core interval and quality
    let ivl: IModelConfig | undefined;
    let quality: IIntervalQuality | undefined;
    if (degreeIntervals.length === 1) {
      ivl = pIvl; // perfect
      quality = INTERVAL_QUALITY.perfect;
    } else if (noteIndex <= loIvl.value[0]) {
      ivl = loIvl; // minor
      quality = INTERVAL_QUALITY.min;
    } else if (noteIndex >= hiIvl.value[0]) {
      ivl = hiIvl; // major
      quality = INTERVAL_QUALITY.maj;
    }

    const offset = (ivl as IModelConfig).value[0] - reduced[0];

    this.offset = offset;

    if (offset === 0) return `${(quality as IIntervalQuality).symbol}${d + 1}`;
    else if (offset > 0) quality = INTERVAL_QUALITY.dim; // dim
    else if (offset < 0) quality = INTERVAL_QUALITY.aug; // aug

    const count = Math.abs(offset);
    const qualityStr = (quality as IIntervalQuality).symbol.repeat(count);

    let value = `${qualityStr}${d + 1}`;

    const isExtended = this.getIsExtended();

    if (isExtended) {
      value = getExtensionInversionId(value as IntervalId);
    }

    return value;
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
