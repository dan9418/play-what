import { IModelConfig } from "../Model.constants";
import { INTERVAL_PRESETS } from "../Pod/Interval/Interval.constants";
import { CHORD_PRESETS } from "./Chord/Chord.constants";
import { SCALE_PRESETS } from "./Scale/Scale.constants";

const podToPodList = (podPresets: IModelConfig[]): IModelConfig[] =>
    podPresets.map(preset => ({ ...preset, value: [preset.value] as any }))

export const MASTER_PRESETS: IModelConfig[] = [
    ...podToPodList(INTERVAL_PRESETS),
    ...CHORD_PRESETS,
    ...SCALE_PRESETS
];
