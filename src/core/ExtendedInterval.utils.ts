import {
  IIntervalPreset,
  IntervalId,
  INTERVAL_PRESET_MAP,
} from "./Interval.constants";
import { getExtensionInversionId } from "./Interval.utils";

export const reduceExtendedIntervalIds = (value: IntervalId[]) => {
  return value.map((id) => {
    const isExtended =
      id.includes("9") || id.includes("11") || id.includes("13");

    let intervalId = isExtended ? getExtensionInversionId(id) : id;

    return (INTERVAL_PRESET_MAP.get(intervalId) as IIntervalPreset).pod;
  });
};
