import { MAX_DEGREE, ROOT_DEGREE } from "../theory/Degree.constants";
import { MAX_PITCH, ROOT_PITCH } from "../theory/Pitch.constants";
import Chord from "./Chord";
import Scale from "./Scale";

export enum ModelType {
  Pod = "pod",
  PodList = "podlist",
}

export enum PresetType {
  Note = "notes",
  Interval = "intervals",
  Chord = "chords",
  Scale = "scales",
}

export const getPresetTypeText = (presetType: PresetType): string => {
  switch (presetType) {
    case PresetType.Chord:
      return "Chord";
    case PresetType.Scale:
      return "Scale";
    default:
      return "";
  }
};

export enum NoteId {
  C = "c",
  Cs = "c-sharp",
  Db = "d-flat",
  D = "d",
  Ds = "d-sharp",
  Eb = "e-flat",
  E = "e",
  Es = "e-sharp",
  Fb = "f-flat",
  F = "f",
  Fs = "f-sharp",
  Gb = "g-flat",
  G = "g",
  Gs = "g-sharp",
  Ab = "a-flat",
  A = "a",
  As = "a-sharp",
  Bb = "b-flat",
  B = "b",
  Bs = "b-sharp",
  Cb = "c-flat",
}

export enum IntervalId {
  P1 = "unison",
  m2 = "minor-2nd",
  M2 = "major-2nd",
  A2 = "augmented-2nd",
  d3 = "diminished-3rd",
  m3 = "minor-3rd",
  M3 = "major-3rd",
  A3 = "augmented-3rd",
  d4 = "diminished-4th",
  P4 = "perfect-4th",
  A4 = "augmented-4th",
  d5 = "diminished-5th",
  P5 = "perfect-5th",
  A5 = "augmented-5th",
  d6 = "diminished-6th",
  m6 = "minor-6th",
  M6 = "major-6th",
  A6 = "augmented-6th",
  d7 = "diminished-7th",
  m7 = "minor-7th",
  M7 = "major-7th",
  P8 = "octave",
  b9 = "flat-9th",
  x9 = "9th",
  s9 = "sharp-9th",
  b11 = "flat-11th",
  x11 = "11th",
  s11 = "sharp-11th",
  b13 = "flat-13th",
  x13 = "13th",
  s13 = "sharp-13th",
}

export enum ScaleId {
  // Diatonic
  Ionian = "ionian",
  Dorian = "dorian",
  Phrygian = "phrygian",
  Lydian = "lydian",
  Mixolydian = "mixolydian",
  Aeolian = "aeolian",
  Locrian = "locrian",
  // Pentatonic
  MajorPentatonic = "major-pentatonic",
  Egyptian = "egyptian",
  ManGong = "man-gong",
  Ritusen = "ritusen",
  MinorPentatonic = "minor-pentatonic",
  // Melodic Minor
  MelodicMinor = "melodic-minor",
  DorianFlat2 = "dorian-flat-2",
  LydianSharp5 = "lydian-sharp-5",
  LydianDominiant = "lydian-dominant",
  MixolydianFlatSix = "mixolydian-flat-6",
  AeolianFlat5 = "aeolian-flat-5",
  SuperLocrian = "super-locrian",
  // Harmonic Minor
  HarmonicMinor = "harmonic-minor",
  Locrian6 = "locrian-6",
  IonianSharp5 = "ionian-sharp-5",
  DorianSharp4 = "dorian-sharp-4",
  PhrygianDominant = "phrygian-dominant",
  LydianSharp2 = "lydian-sharp-2",
  SuperLocrianDoubleFlat7 = "super-locrian-double-flat-7",
  // Bebop
  DominantBebop = "dominant-bebop",
  MajorBebop = "major-bebop",
  // Blues
  MajorBlues = "major-blues",
  MinorBlues = "minor-blues",
  // Other
  Chromatic = "chromatic",
}

export enum ChordId {
  MajTriad = "major-triad",
  Maj6 = "major-6th",
  Maj7 = "major-7th",
  MinTriad = "minor-triad",
  Min6 = "minor-6th",
  Min7 = "minor-7th",
  MinMaj7 = "minor-major-7th",
  Dom7 = "dominant-7th",
  AugTriad = "augmented-triad",
  Aug7 = "augmented-7th",
  AugMaj7 = "augmented-major-7th",
  DimTriad = "diminished-triad",
  Dim7 = "diminished-7th",
  HalfDim7 = "half-diminished-7th",
  Sus2 = "suspended-2nd",
  Sus4 = "suspended-4th",
  DomFlat9 = "dominant-flat-9th",
  Dom9 = "dominant-9th",
  DomSharp9 = "dominant-sharp-9th",
  Dom11 = "dominant-1th",
  DomSharp11 = "dominant-sharp-11th",
  DomFlat13 = "dominant-flat-13th",
  Dom13 = "dominant-13th",
  MinFlat9 = "minor-flat-9th",
  Min9 = "minor-9th",
  Min11 = "minor-11th",
  Min13 = "minor-13th",
  Maj9 = "major-9th",
  Maj11 = "major-11th",
  MajSharp11 = "major-sharp-11th",
  Maj13 = "major-13th",
  MajFlat5 = "major-flat-5",
  MajSharp5 = "major-sharp-5",
}

export type PresetId = NoteId | IntervalId | ChordId | ScaleId;

export interface IModelConfig {
  modelType: ModelType;
  presetId: string;
  name: string;
  tags: Tag[];
  aliases: string[];
  value: any;
}

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

export type IPod = [number, number];

export const MAX_POD: IPod = [MAX_PITCH, MAX_DEGREE];

export const DEFAULT_POD: IPod = [ROOT_PITCH, ROOT_DEGREE];

interface IAccidental {
  id: string;
  name: string;
  symbol: string;
  value: number;
}

export const ACCIDENTAL: { [x: string]: IAccidental } = {
  doubleFlat: {
    id: "doubleFlat",
    name: "Double Flat",
    symbol: "bb",
    value: -2,
  },
  flat: {
    id: "flat",
    name: "Flat",
    symbol: "b",
    value: -1,
  },
  natural: {
    id: "natural",
    name: "Natural",
    symbol: "♮",
    value: 0,
  },
  sharp: {
    id: "sharp",
    name: "Sharp",
    symbol: "#",
    value: 1,
  },
  doubleSharp: {
    id: "doubleSharp",
    name: "Double Sharp",
    symbol: "##",
    value: 2,
  },
};

export const ACCIDENTAL_VALUES = Object.values(ACCIDENTAL);

export interface IIntervalQuality {
  id: string;
  name: string;
  symbol: string;
  up?: string;
  down?: string;
}

export const INTERVAL_QUALITY: { [x: string]: IIntervalQuality } = {
  dim: {
    id: "dim",
    name: "Diminished",
    symbol: "d",
    down: undefined,
    up: "min",
  },
  min: {
    id: "min",
    name: "Minor",
    symbol: "m",
    down: "dim",
    up: "maj",
  },
  perfect: {
    id: "perfect",
    name: "Perfect",
    symbol: "P",
    down: "dim",
    up: "aug",
  },
  maj: {
    id: "maj",
    name: "Major",
    symbol: "M",
    down: "min",
    up: "aug",
  },
  aug: {
    id: "aug",
    name: "Augmented",
    symbol: "A",
    down: "maj",
    up: undefined,
  },
};

export const INTERVAL_QUALITY_VALUES = Object.values(INTERVAL_QUALITY);

export interface IChordQuality {
  id: string;
  name: {
    long: string;
    medium: string;
    short: string;
    minimal: string;
    jazz: string;
  };
}

export const CHORD_QUALITY: { [x: string]: IChordQuality } = {
  major: {
    id: "major",
    name: {
      long: "Major",
      medium: "Maj",
      short: "M",
      minimal: "",
      jazz: "Δ",
    },
  },
  minor: {
    id: "minor",
    name: {
      long: "Minor",
      medium: "Min",
      short: "m",
      minimal: "m",
      jazz: "-",
    },
  },
  dominant: {
    id: "dominant",
    name: {
      long: "Dominant",
      medium: "Dom",
      short: "7",
      minimal: "7",
      jazz: "⁷",
    },
  },
  halfDiminished: {
    id: "halfDiminished",
    name: {
      long: "Half-Diminished",
      medium: "Half-Dim",
      short: "ø",
      minimal: "ø",
      jazz: "ø",
    },
  },
  diminished: {
    id: "diminished",
    name: {
      long: "Diminished",
      medium: "Dim",
      short: "d",
      minimal: "d",
      jazz: "o",
    },
  },
  augmented: {
    id: "augmented",
    name: {
      long: "Augmented",
      medium: "Aug",
      short: "A",
      minimal: "",
      jazz: "+",
    },
  },
};

export const CHORD_QUALITY_VALUES = Object.values(CHORD_QUALITY);
