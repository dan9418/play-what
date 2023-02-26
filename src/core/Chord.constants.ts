import { PresetMap, Tag } from "./Core.constants";
import ArrayUtils from "./primitives/Array.utils";
import { IntervalId } from "./Interval.constants";
import { reduceExtendedIntervalIds } from "./ExtendedInterval.utils";
import { formatPodListPreset, IPodListPreset } from "./PodList.constants";

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

export interface IChordPreset extends IPodListPreset<ChordId> {}

const formatChordPreset = (
  presetId: ChordId,
  name: string,
  valueIds: IntervalId[],
  tags: Tag[] = [],
  aliases: string[] = []
): IChordPreset =>
  formatPodListPreset(
    presetId,
    name,
    valueIds,
    reduceExtendedIntervalIds(valueIds),
    tags,
    aliases
  );

export const CHORD_PRESET_MAP: PresetMap<ChordId, IChordPreset> = new Map([
  // Triads
  [
    ChordId.MajTriad,
    formatChordPreset(
      ChordId.MajTriad,
      "Major Triad",
      [IntervalId.P1, IntervalId.M3, IntervalId.P5],
      [Tag.Major, Tag.Triad]
    ),
  ],
  [
    ChordId.MinTriad,
    formatChordPreset(
      ChordId.MinTriad,
      "Minor Triad",
      [IntervalId.P1, IntervalId.m3, IntervalId.P5],
      [Tag.Minor, Tag.Triad]
    ),
  ],
  [
    ChordId.AugTriad,
    formatChordPreset(
      ChordId.AugTriad,
      "Augmented Triad",
      [IntervalId.P1, IntervalId.M3, IntervalId.A5],
      [Tag.Augmented, Tag.Triad]
    ),
  ],
  [
    ChordId.DimTriad,
    formatChordPreset(
      ChordId.DimTriad,
      "Diminished Triad",
      [IntervalId.P1, IntervalId.m3, IntervalId.d5],
      [Tag.Diminished, Tag.Triad]
    ),
  ],
  // Sevenths
  [
    ChordId.Maj7,
    formatChordPreset(
      ChordId.Maj7,
      "Major 7th",
      [IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.M7],
      [Tag.Major, Tag.Seventh]
    ),
  ],
  [
    ChordId.Min7,
    formatChordPreset(
      ChordId.Min7,
      "Minor 7th",
      [IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.m7],
      [Tag.Minor, Tag.Seventh]
    ),
  ],
  [
    ChordId.Dom7,
    formatChordPreset(
      ChordId.Dom7,
      "Dominant 7th",
      [IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.m7],
      [Tag.Dominant, Tag.Seventh]
    ),
  ],
  [
    ChordId.MinMaj7,
    formatChordPreset(
      ChordId.MinMaj7,
      "Minor-Major 7th",
      [IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.M7],
      [Tag.Minor, Tag.Seventh]
    ),
  ],
  [
    ChordId.Dim7,
    formatChordPreset(
      ChordId.Dim7,
      "Diminished 7th",
      [IntervalId.P1, IntervalId.m3, IntervalId.d5, IntervalId.d7],
      [Tag.Diminished, Tag.Seventh]
    ),
  ],
  [
    ChordId.HalfDim7,
    formatChordPreset(
      ChordId.HalfDim7,
      "Half-Diminished 7th",
      [IntervalId.P1, IntervalId.m3, IntervalId.d5, IntervalId.m7],
      [Tag.Diminished, Tag.Seventh],
      ["Minor 7th Flat 5"]
    ),
  ],
  [
    ChordId.Aug7,
    formatChordPreset(
      ChordId.Aug7,
      "Augmented 7th",
      [IntervalId.P1, IntervalId.M3, IntervalId.A5, IntervalId.m7],
      [Tag.Augmented, Tag.Seventh]
    ),
  ],
  [
    ChordId.AugMaj7,
    formatChordPreset(
      ChordId.AugMaj7,
      "Augmented Major 7th",
      [IntervalId.P1, IntervalId.M3, IntervalId.A5, IntervalId.M7],
      [Tag.Augmented, Tag.Seventh]
    ),
  ],
  // Sixths
  [
    ChordId.Maj6,
    formatChordPreset(
      ChordId.Maj6,
      "Major 6th",
      [IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.M6],
      [Tag.Major, Tag.Sixth]
    ),
  ],
  [
    ChordId.Min6,
    formatChordPreset(
      ChordId.Min6,
      "Minor 6th",
      [IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.M6],
      [Tag.Minor, Tag.Sixth]
    ),
  ],
  // Suspended
  [
    ChordId.Sus2,
    formatChordPreset(
      ChordId.Sus2,
      "Suspended 2nd",
      [IntervalId.P1, IntervalId.M2, IntervalId.P5],
      [Tag.Suspended]
    ),
  ],
  [
    ChordId.Sus4,
    formatChordPreset(
      ChordId.Sus4,
      "Suspended 4th",
      [IntervalId.P1, IntervalId.P4, IntervalId.P5],
      [Tag.Suspended]
    ),
  ],
]);

interface IExtendedChordConfig {
  chordId: ChordId;
  name: string;
  baseChordId: ChordId;
  extensions: IntervalId[];
}

const addExtendedChordPreset = (config: IExtendedChordConfig) => {
  const { chordId, name, baseChordId, extensions } = config;
  const basePreset = CHORD_PRESET_MAP.get(baseChordId) as IChordPreset;

  let baseIds = basePreset.valueIds as IntervalId[];

  const extensionPreset = formatChordPreset(
    chordId,
    name,
    [...baseIds, ...extensions],
    [...basePreset.tags, Tag.Extended],
    basePreset.aliases
  );

  return CHORD_PRESET_MAP.set(chordId, extensionPreset);
};

const EXTENDED_CHORDS: IExtendedChordConfig[] = [
  {
    name: "Dominant b9",
    chordId: ChordId.DomFlat9,
    baseChordId: ChordId.Dom7,
    extensions: [IntervalId.b9],
  },
  {
    name: "Dominant 9",
    chordId: ChordId.Dom9,
    baseChordId: ChordId.Dom7,
    extensions: [IntervalId.x9],
  },
  {
    name: "Dominant #9",
    chordId: ChordId.DomSharp9,
    baseChordId: ChordId.Dom7,
    extensions: [IntervalId.s9],
  },
  {
    name: "Dominant 11",
    chordId: ChordId.Dom11,
    baseChordId: ChordId.Dom7,
    extensions: [IntervalId.x11],
  },
  {
    name: "Dominant #11",
    chordId: ChordId.DomSharp11,
    baseChordId: ChordId.Dom7,
    extensions: [IntervalId.s11],
  },
  {
    name: "Dominant b13",
    chordId: ChordId.DomFlat13,
    baseChordId: ChordId.Dom7,
    extensions: [IntervalId.b13],
  },
  {
    name: "Dominant 13",
    chordId: ChordId.Dom13,
    baseChordId: ChordId.Dom7,
    extensions: [IntervalId.x13],
  },
  /*{
          name: 'Dominant b5', chordId: ChordId.DomFlat5, baseChordId: ChordId.Dom7, extensions: [
              IntervalId.d9
          ]
      },
      {
          name: 'Dominant #5', chordId: ChordId.DomSharp5, baseChordId: ChordId.Dom7, extensions: [
              IntervalId.A5
          ]
      },*/
  {
    name: "Minor b9",
    chordId: ChordId.MinFlat9,
    baseChordId: ChordId.Min7,
    extensions: [IntervalId.b9],
  },
  {
    name: "Minor 9",
    chordId: ChordId.Min9,
    baseChordId: ChordId.Min7,
    extensions: [IntervalId.x9],
  },
  {
    name: "Minor 11",
    chordId: ChordId.Min11,
    baseChordId: ChordId.Min7,
    extensions: [IntervalId.x11],
  },
  {
    name: "Minor 13",
    chordId: ChordId.Min13,
    baseChordId: ChordId.Min7,
    extensions: [IntervalId.x13],
  },
  {
    name: "Major 9",
    chordId: ChordId.Maj9,
    baseChordId: ChordId.Maj7,
    extensions: [IntervalId.x9],
  },
  {
    name: "Major 11",
    chordId: ChordId.Maj11,
    baseChordId: ChordId.Maj7,
    extensions: [IntervalId.x11],
  },
  {
    name: "Major #11",
    chordId: ChordId.MajSharp11,
    baseChordId: ChordId.Maj7,
    extensions: [IntervalId.s11],
  },
  {
    name: "Major 13",
    chordId: ChordId.Maj13,
    baseChordId: ChordId.Maj7,
    extensions: [IntervalId.x13],
  },
  /*{
          name: 'Major #5', chordId: ChordId.MajSharp5, baseChordId: ChordId.Maj7, extensions: [
              IntervalId.x9
          ]
      }*/
];

EXTENDED_CHORDS.forEach((chord) => addExtendedChordPreset(chord));
export const CHORD_PRESETS = ArrayUtils.mapToArray(CHORD_PRESET_MAP);
