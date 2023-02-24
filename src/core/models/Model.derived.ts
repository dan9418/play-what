import { CHORD_PRESETS, IChordPreset } from "./Chord.presets";
import { IScalePreset, SCALE_PRESETS } from "./Scale.presets";

export type AnyPodListPreset = IChordPreset | IScalePreset;

export const POD_LIST_PRESETS = [...SCALE_PRESETS, ...CHORD_PRESETS];

// export const logPresetJson = () => {
//   console.log("pw-presets notes", JSON.stringify(NOTE_PRESETS));
//   console.log("pw-presets intervals", JSON.stringify(INTERVAL_PRESETS));
//   console.log("pw-presets chords", JSON.stringify(CHORD_PRESETS));
//   console.log("pw-presets scales", JSON.stringify(SCALE_PRESETS));
// };
