import {
  IIntervalQuality,
  IModelConfig,
  IntervalId,
  INTERVAL_QUALITY,
  IPod,
  MAX_POD,
} from "./Model.constants";
import { CORE_INTERVALS } from "./Model.presets";
import { getExtensionInversionId, reducePod } from "./Pod.static";

const getIsExtended = (pod: IPod): boolean => {
  return pod[0] > MAX_POD[0] || pod[1] > MAX_POD[1];
};

export const getName = (pod: IPod) => {
  const reduced = reducePod(pod);

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

  if (offset === 0) return `${(quality as IIntervalQuality).symbol}${d + 1}`;
  else if (offset > 0) quality = INTERVAL_QUALITY.dim; // dim
  else if (offset < 0) quality = INTERVAL_QUALITY.aug; // aug

  const count = Math.abs(offset);
  const qualityStr = (quality as IIntervalQuality).symbol.repeat(count);

  let value = `${qualityStr}${d + 1}`;

  const isExtended = getIsExtended(pod);

  if (isExtended) {
    value = getExtensionInversionId(value as IntervalId);
  }

  return value;
};
