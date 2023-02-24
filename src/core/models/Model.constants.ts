export enum ModelType {
  Pod = "pod",
  PodList = "podlist",
  Voicing = "voicing",
  Tuning = "tuning",
  Accidental = "accidental",
  ChordQuality = "chord-quality",
  IntervalQuality = "interval-quality",
}

export enum PresetType {
  Note = "notes",
  Interval = "intervals",
  Chord = "chords",
  Scale = "scales",
}

const PRESET_TO_MODEL_MAP: Map<PresetType, ModelType> = new Map([
  [PresetType.Note, ModelType.Pod],
  [PresetType.Interval, ModelType.Pod],
  [PresetType.Chord, ModelType.PodList],
  [PresetType.Scale, ModelType.PodList],
]);

export enum Tag {
  Pentatonic = "Pentatonic",
  Hexatonic = "Hexatonic",
  Heptatonic = "Heptatonic",
  Octatonic = "Octatonic",
  Chromatic = "Chromatic",
  Blues = "Blues",
  Bebop = "Bebop",
  Exotic = "Exotic",
  MelodicMode = "MelodicMode",
  HarmonicMode = "HarmonicMode",
  Triad = "Triad",
  Suspended = "Suspended",
  Dominant = "Dominant",
  Altered = "Altered",
  Diatonic = "Diatonic",
  Major = "Major",
  Minor = "Minor",
  Diminished = "Diminished",
  Augmented = "Augmented",
  Perfect = "Perfect",
  Second = "Second",
  Third = "Third",
  Fourth = "Fourth",
  Fifth = "Fifth",
  Sixth = "Sixth",
  Seventh = "Seventh",
  Extended = "Extended",
}

export type PresetValue = any;

export interface IPreset<D extends string, V extends PresetValue> {
  name: string;
  presetId: D;
  value: V;
}

export type PresetMap<D extends string, IPreset> = Map<D, IPreset>;

// export const logPresetJson = () => {
//   console.log("pw-presets notes", JSON.stringify(NOTE_PRESETS));
//   console.log("pw-presets intervals", JSON.stringify(INTERVAL_PRESETS));
//   console.log("pw-presets chords", JSON.stringify(CHORD_PRESETS));
//   console.log("pw-presets scales", JSON.stringify(SCALE_PRESETS));
// };

// export const POD_LIST_PRESETS = [...SCALE_PRESETS, ...CHORD_PRESETS];
