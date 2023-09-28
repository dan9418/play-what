import {
  ChordId,
  CHORD_PRESETS,
  CHORD_PRESET_MAP,
  IChordPreset,
} from "./Chord.constants";
import { PresetType } from "./Core.constants";
import { IntervalId, INTERVAL_PRESET_MAP } from "./Interval.constants";
import { NoteId, NOTE_PRESET_MAP } from "./Note.constants";
import {
  IScalePreset,
  ScaleId,
  SCALE_PRESETS,
  SCALE_PRESET_MAP,
} from "./Scale.constants";

export type AnyPodListPreset = IChordPreset | IScalePreset;

export const POD_LIST_PRESETS: AnyPodListPreset[] = [
  ...SCALE_PRESETS,
  ...CHORD_PRESETS,
];


export const POD_LIST_PRESET_TYPE_OPTIONS = [
  {
    id: PresetType.Chord,
    name: "Chords",
    value: PresetType.Chord,
    data: CHORD_PRESETS,
  },
  {
    id: PresetType.Scale,
    name: "Scales",
    value: PresetType.Scale,
    data: SCALE_PRESETS,
  },
];

export type PresetId = NoteId | IntervalId | ChordId | ScaleId;

export const getPreset = (presetType?: PresetType, presetId?: PresetId) => {
  switch (presetType) {
    case PresetType.Note:
      return NOTE_PRESET_MAP.get(presetId as NoteId);
    case PresetType.Interval:
      return INTERVAL_PRESET_MAP.get(presetId as IntervalId);
    case PresetType.Chord:
      return CHORD_PRESET_MAP.get(presetId as ChordId);
    case PresetType.Scale:
      return SCALE_PRESET_MAP.get(presetId as ScaleId);
  }
};

// export const logPresetJson = () => {
//   console.log("pw-presets notes", JSON.stringify(NOTE_PRESETS));
//   console.log("pw-presets intervals", JSON.stringify(INTERVAL_PRESETS));
//   console.log("pw-presets chords", JSON.stringify(CHORD_PRESETS));
//   console.log("pw-presets scales", JSON.stringify(SCALE_PRESETS));
// };
