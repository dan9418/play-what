import { getFrequency } from "./Frequency.utils";
import {
  CORE_INTERVALS,
  IIntervalPreset,
  INTERVAL_PRESET_MAP,
  IntervalId,
  getExtensionInversionId,
} from "./Interval.constants";
import {
  IIntervalQualityPreset,
  INTERVAL_QUALITY_PRESET_MAP,
  IntervalQualityId,
} from "./IntervalQuality.constants";
import { IPod, MAX_POD } from "./Pod.constants";
import { reducePod } from "./Pod.utils";

const getIsExtended = (pod: IPod): boolean => {
  return pod[0] > MAX_POD[0] || pod[1] > MAX_POD[1];
};

export const getName = (pod: IPod) => {
  const reduced = reducePod(pod);

  const [noteIndex, d] = reduced;
  const degreeIntervals = CORE_INTERVALS[d] as IIntervalPreset[];
  if (!degreeIntervals) return "?";

  const pIvl = degreeIntervals[0];
  const loIvl = pIvl;
  const hiIvl = degreeIntervals[degreeIntervals.length - 1];

  // determine core interval and quality
  let ivl: IIntervalPreset | undefined;
  let quality: IIntervalQualityPreset | undefined;
  if (degreeIntervals.length === 1) {
    ivl = pIvl; // perfect
    quality = INTERVAL_QUALITY_PRESET_MAP.get(
      IntervalQualityId.Perfect
    ) as IIntervalQualityPreset;
  } else if (noteIndex <= loIvl.pod[0]) {
    ivl = loIvl; // minor
    quality = INTERVAL_QUALITY_PRESET_MAP.get(
      IntervalQualityId.Minor
    ) as IIntervalQualityPreset;
  } else if (noteIndex >= hiIvl.pod[0]) {
    ivl = hiIvl; // major
    quality = INTERVAL_QUALITY_PRESET_MAP.get(
      IntervalQualityId.Major
    ) as IIntervalQualityPreset;
  }

  const offset = (ivl as IIntervalPreset).pod[0] - reduced[0];

  if (offset === 0)
    return `${(quality as IIntervalQualityPreset).symbol}${d + 1}`;
  else if (offset > 0)
    quality = INTERVAL_QUALITY_PRESET_MAP.get(
      IntervalQualityId.Diminished
    ) as IIntervalQualityPreset;
  // dim
  else if (offset < 0)
    quality = INTERVAL_QUALITY_PRESET_MAP.get(
      IntervalQualityId.Augmented
    ) as IIntervalQualityPreset; // aug

  const count = Math.abs(offset);
  const qualityStr = (quality as IIntervalQualityPreset).symbol.repeat(count);

  let value = `${qualityStr}${d + 1}`;

  const isExtended = getIsExtended(pod);

  if (isExtended) {
    value = getExtensionInversionId(value as IntervalId);
  }

  return value;
};

export const getNameFromId = (presetId: IntervalId) => {
  return (INTERVAL_PRESET_MAP.get(presetId) as IIntervalPreset).name || "";
};

export const getRatio = (pod: IPod) => {
  const [p] = pod;

  const baseline = getFrequency(0);
  const compareTo = getFrequency(p);

  const ratio = compareTo / baseline;

  return `1:${ratio.toFixed(2)}`;
};
