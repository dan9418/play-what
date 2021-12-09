import { CHORD_PRESETS } from "./Chord.constants";
import { INTERVAL_PRESETS } from "./Interval.constants";
import { IModelConfig } from "./Model.constants";
import { SCALE_PRESETS } from "./Scale.constants";

export const podToPodList = (podPresets: IModelConfig[]): IModelConfig[] =>
    podPresets.map(preset => ({ ...preset, value: [preset.value] as any }));

export const MASTER_PRESETS: IModelConfig[] = [
    ...podToPodList(INTERVAL_PRESETS),
    ...CHORD_PRESETS,
    ...SCALE_PRESETS
];
