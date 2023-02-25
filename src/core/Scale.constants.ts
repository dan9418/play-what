import { PresetMap, Tag } from "./Core.constants";
import { IntervalId } from "./Interval.constants";
import { reduceExtendedIntervalIds } from "./Interval.utils";
import { formatPodListPreset, IPodListPreset } from "./PodList.constants";
import ArrayUtils from "./primitives/Array.utils";

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

export interface IScalePreset extends IPodListPreset<ScaleId> {}

const formatScalePreset = (
  presetId: ScaleId,
  name: string,
  valueIds: IntervalId[],
  tags: Tag[] = [],
  aliases: string[] = []
): IScalePreset =>
  formatPodListPreset(
    presetId,
    name,
    valueIds,
    reduceExtendedIntervalIds(valueIds),
    tags,
    aliases
  );

export const SCALE_PRESET_MAP: PresetMap<ScaleId, IScalePreset> = new Map([
  // Diatonic
  [
    ScaleId.Ionian,
    formatScalePreset(
      ScaleId.Ionian,
      "Ionian",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.M7,
      ],
      [Tag.Heptatonic, Tag.Diatonic, Tag.Major],
      ["Major", "Diatonic"]
    ),
  ],
  [
    ScaleId.Dorian,
    formatScalePreset(
      ScaleId.Dorian,
      "Dorian",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Diatonic, Tag.Minor]
    ),
  ],
  [
    ScaleId.Phrygian,
    formatScalePreset(
      ScaleId.Phrygian,
      "Phrygian",
      [
        IntervalId.P1,
        IntervalId.m2,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.m6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Diatonic, Tag.Minor]
    ),
  ],
  [
    ScaleId.Lydian,
    formatScalePreset(
      ScaleId.Lydian,
      "Lydian",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.A4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.M7,
      ],
      [Tag.Heptatonic, Tag.Diatonic, Tag.Major]
    ),
  ],
  [
    ScaleId.Mixolydian,
    formatScalePreset(
      ScaleId.Mixolydian,
      "Mixolydian",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Diatonic, Tag.Major, Tag.Dominant]
    ),
  ],
  [
    ScaleId.Aeolian,
    formatScalePreset(
      ScaleId.Aeolian,
      "Aeolian",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.m6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Diatonic, Tag.Minor],
      ["Minor", "Natural Minor"]
    ),
  ],
  [
    ScaleId.Locrian,
    formatScalePreset(
      ScaleId.Locrian,
      "Locrian",
      [
        IntervalId.P1,
        IntervalId.m2,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.d5,
        IntervalId.m6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Diatonic, Tag.Minor]
    ),
  ],
  // Harmonic Minor
  [
    ScaleId.HarmonicMinor,
    formatScalePreset(
      ScaleId.HarmonicMinor,
      "Harmonic Minor",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.m6,
        IntervalId.M7,
      ],
      [Tag.Heptatonic, Tag.Minor, Tag.HarmonicMode]
    ),
  ],
  [
    ScaleId.Locrian6,
    formatScalePreset(
      ScaleId.Locrian6,
      "Locrian 6",
      [
        IntervalId.P1,
        IntervalId.m2,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.d5,
        IntervalId.M6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.HarmonicMode]
    ),
  ],
  [
    ScaleId.IonianSharp5,
    formatScalePreset(
      ScaleId.IonianSharp5,
      "Ionian #5",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.P4,
        IntervalId.A5,
        IntervalId.M6,
        IntervalId.M7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.HarmonicMode]
    ),
  ],
  [
    ScaleId.DorianSharp4,
    formatScalePreset(
      ScaleId.DorianSharp4,
      "Dorian #4",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.m3,
        IntervalId.A4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.HarmonicMode]
    ),
  ],
  [
    ScaleId.PhrygianDominant,
    formatScalePreset(
      ScaleId.PhrygianDominant,
      "Phrygian Dominant",
      [
        IntervalId.P1,
        IntervalId.m2,
        IntervalId.M3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.m6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.Dominant, Tag.HarmonicMode]
    ),
  ],
  [
    ScaleId.LydianSharp2,
    formatScalePreset(
      ScaleId.LydianSharp2,
      "Lydian #2",
      [
        IntervalId.P1,
        IntervalId.A2,
        IntervalId.M3,
        IntervalId.A4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.M7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.HarmonicMode]
    ),
  ],
  [
    ScaleId.SuperLocrianDoubleFlat7,
    formatScalePreset(
      ScaleId.SuperLocrianDoubleFlat7,
      "Super Locrian bb7",
      [
        IntervalId.P1,
        IntervalId.m2,
        IntervalId.m3,
        IntervalId.d4,
        IntervalId.d5,
        IntervalId.m6,
        IntervalId.d7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.HarmonicMode]
    ),
  ],
  // Melodic Minor
  [
    ScaleId.MelodicMinor,
    formatScalePreset(
      ScaleId.MelodicMinor,
      "Melodic Minor",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.M7,
      ],
      [Tag.Heptatonic, Tag.Minor, Tag.MelodicMode]
    ),
  ],
  [
    ScaleId.DorianFlat2,
    formatScalePreset(
      ScaleId.DorianFlat2,
      "Dorian b2",
      [
        IntervalId.P1,
        IntervalId.m2,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.MelodicMode]
    ),
  ],
  [
    ScaleId.LydianSharp5,
    formatScalePreset(
      ScaleId.LydianSharp5,
      "Lydian #5",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.A4,
        IntervalId.A5,
        IntervalId.M6,
        IntervalId.M7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.MelodicMode]
    ),
  ],
  [
    ScaleId.LydianDominiant,
    formatScalePreset(
      ScaleId.LydianDominiant,
      "Lydian Dominant",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.A4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.Dominant, Tag.MelodicMode]
    ),
  ],
  [
    ScaleId.MixolydianFlatSix,
    formatScalePreset(
      ScaleId.MixolydianFlatSix,
      "Mixolydian b6",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.m6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.MelodicMode]
    ),
  ],
  [
    ScaleId.AeolianFlat5,
    formatScalePreset(
      ScaleId.AeolianFlat5,
      "Aeolian b5",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.d5,
        IntervalId.m6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.MelodicMode]
    ),
  ],
  [
    ScaleId.SuperLocrian,
    formatScalePreset(
      ScaleId.SuperLocrian,
      "Super Locrian",
      [
        IntervalId.P1,
        IntervalId.m2,
        IntervalId.m3,
        IntervalId.d4,
        IntervalId.d5,
        IntervalId.m6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.MelodicMode],
      ["Altered"]
    ),
  ],
  // Pentatonic
  [
    ScaleId.MajorPentatonic,
    formatScalePreset(
      ScaleId.MajorPentatonic,
      "Major Pentatonic",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.P5,
        IntervalId.M6,
      ],
      [Tag.Pentatonic, Tag.Major]
    ),
  ],
  [
    ScaleId.Egyptian,
    formatScalePreset(
      ScaleId.Egyptian,
      "Egyptian",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.m7,
      ],
      [Tag.Pentatonic, Tag.Exotic]
    ),
  ],
  [
    ScaleId.ManGong,
    formatScalePreset(
      ScaleId.ManGong,
      "Man Gong",
      [
        IntervalId.P1,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.m6,
        IntervalId.m7,
      ],
      [Tag.Pentatonic, Tag.Exotic]
    ),
  ],
  [
    ScaleId.Ritusen,
    formatScalePreset(
      ScaleId.Ritusen,
      "Ritusen",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.M6,
      ],
      [Tag.Pentatonic, Tag.Exotic]
    ),
  ],
  [
    ScaleId.MinorPentatonic,
    formatScalePreset(
      ScaleId.MinorPentatonic,
      "Minor Pentatonic",
      [
        IntervalId.P1,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.m7,
      ],
      [Tag.Pentatonic, Tag.Minor]
    ),
  ],
  // Blues
  [
    ScaleId.MajorBlues,
    formatScalePreset(
      ScaleId.MajorBlues,
      "Major Blues",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.m3,
        IntervalId.M3,
        IntervalId.P5,
        IntervalId.M6,
      ],
      [Tag.Hexatonic, Tag.Blues, Tag.Major]
    ),
  ],
  [
    ScaleId.MinorBlues,
    formatScalePreset(
      ScaleId.MinorBlues,
      "Minor Blues",
      [
        IntervalId.P1,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.d5,
        IntervalId.P5,
        IntervalId.m7,
      ],
      [Tag.Hexatonic, Tag.Blues, Tag.Minor]
    ),
  ],
  // Bebop
  [
    ScaleId.DominantBebop,
    formatScalePreset(
      ScaleId.DominantBebop,
      "Dominant Bebob",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.m7,
        IntervalId.M7,
      ],
      [Tag.Octatonic, Tag.Bebop, Tag.Major, Tag.Dominant]
    ),
  ],
  [
    ScaleId.MajorBebop,
    formatScalePreset(
      ScaleId.MajorBebop,
      "Major Bebob",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.m6,
        IntervalId.M6,
        IntervalId.M7,
      ],
      [Tag.Octatonic, Tag.Bebop, Tag.Major]
    ),
  ],
]);

export const SCALE_PRESETS = ArrayUtils.mapToArray(SCALE_PRESET_MAP);
