import ArrayUtils from "../general/Array.utils";
import { IPreset, PresetMap } from "../models/Model.constants";
import { NoteId } from "../models/Note.presets";
import { getNoteWithOctave } from "../models/Note.utils";

export enum TuningId {
  Standard = "standard",
  StandardSeven = "standard-seven",
  StandardBass = "standard-bass",
  Flat = "flat",
  DoubleFlat = "double-flat",
  DropD = "drop-d",
  DADGAD = "dadgad",
  Banjo = "banjo",
  Violin = "violin",
  OpenA = "open-a",
  OpenB = "open-b",
  OpenC = "open-c",
  OpenD = "open-d",
  OpenE = "open-e",
  OpenF = "open-f",
  OpenG = "open-g",
}

export type TuningValue = number[];

export interface ITuningPreset extends IPreset<TuningId> {
  value: TuningValue;
}

const formatPreset = (
  presetId: TuningId,
  name: string,
  value: TuningValue
): ITuningPreset => ({
  presetId,
  name,
  value,
});

const getPitch = (noteId: NoteId, octave: number): number =>
  getNoteWithOctave(noteId, octave)[0];

export const TUNING_PRESET_MAP: PresetMap<TuningId, ITuningPreset> = new Map([
  [
    TuningId.Standard,
    formatPreset(TuningId.Standard, "Standard Guitar", [
      getPitch(NoteId.E, 5),
      getPitch(NoteId.B, 4),
      getPitch(NoteId.G, 4),
      getPitch(NoteId.D, 4),
      getPitch(NoteId.A, 3),
      getPitch(NoteId.E, 3),
    ]),
  ],
  [
    TuningId.Flat,
    formatPreset(TuningId.Flat, "Flat Gtr", [
      getPitch(NoteId.Eb, 5),
      getPitch(NoteId.Bb, 4),
      getPitch(NoteId.Gb, 4),
      getPitch(NoteId.Db, 4),
      getPitch(NoteId.Ab, 3),
      getPitch(NoteId.Eb, 3),
    ]),
  ],
  [
    TuningId.DoubleFlat,
    formatPreset(TuningId.DoubleFlat, "Double Flat Gtr", [
      getPitch(NoteId.D, 5),
      getPitch(NoteId.A, 4),
      getPitch(NoteId.F, 4),
      getPitch(NoteId.C, 4),
      getPitch(NoteId.G, 3),
      getPitch(NoteId.D, 3),
    ]),
  ],
  [
    TuningId.StandardSeven,
    formatPreset(TuningId.StandardSeven, "Standard 7-String Gtr", [
      getPitch(NoteId.E, 5),
      getPitch(NoteId.B, 4),
      getPitch(NoteId.G, 4),
      getPitch(NoteId.D, 4),
      getPitch(NoteId.A, 3),
      getPitch(NoteId.E, 3),
      getPitch(NoteId.B, 3),
    ]),
  ],
  [
    TuningId.StandardBass,
    formatPreset(TuningId.StandardBass, "Standard Bass", [
      getPitch(NoteId.G, 3),
      getPitch(NoteId.D, 3),
      getPitch(NoteId.A, 2),
      getPitch(NoteId.E, 2),
    ]),
  ],
  [
    TuningId.DropD,
    formatPreset(TuningId.DropD, "Drop D Gtr", [
      getPitch(NoteId.E, 5),
      getPitch(NoteId.B, 4),
      getPitch(NoteId.G, 4),
      getPitch(NoteId.D, 4),
      getPitch(NoteId.A, 3),
      getPitch(NoteId.D, 3),
    ]),
  ],
  [
    TuningId.DADGAD,
    formatPreset(TuningId.DADGAD, "DADGAD", [
      getPitch(NoteId.D, 5),
      getPitch(NoteId.A, 4),
      getPitch(NoteId.G, 4),
      getPitch(NoteId.D, 4),
      getPitch(NoteId.A, 3),
      getPitch(NoteId.D, 3),
    ]),
  ],
  // Unconfirmed
  /*[TuningId.Banjo, formatPreset(
        TuningId.Banjo,
        'Banjo',
        [
            getPitch(NoteId.G, 5),
            getPitch(NoteId.D, 4),
            getPitch(NoteId.G, 4),
            getPitch(NoteId.B, 4),
            getPitch(NoteId.D, 3)
        ]
    )],*/
  // Unconfirmed
  [
    TuningId.Violin,
    formatPreset(TuningId.Violin, "Violin", [
      getPitch(NoteId.E, 5),
      getPitch(NoteId.A, 4),
      getPitch(NoteId.D, 4),
      getPitch(NoteId.G, 4),
    ]),
  ],
  [
    TuningId.OpenA,
    formatPreset(TuningId.OpenA, "Open A", [
      getPitch(NoteId.E, 5),
      getPitch(NoteId.A, 4),
      getPitch(NoteId.E, 4),
      getPitch(NoteId.Cs, 4),
      getPitch(NoteId.A, 3),
      getPitch(NoteId.E, 3),
    ]),
  ],
  [
    TuningId.OpenB,
    formatPreset(TuningId.OpenB, "Open B", [
      getPitch(NoteId.Ds, 5),
      getPitch(NoteId.B, 4),
      getPitch(NoteId.Fs, 4),
      getPitch(NoteId.B, 4),
      getPitch(NoteId.Fs, 3),
      getPitch(NoteId.B, 3),
    ]),
  ],
  [
    TuningId.OpenC,
    formatPreset(TuningId.OpenC, "Open C", [
      getPitch(NoteId.E, 5),
      getPitch(NoteId.C, 4),
      getPitch(NoteId.G, 4),
      getPitch(NoteId.C, 4),
      getPitch(NoteId.G, 3),
      getPitch(NoteId.C, 3),
    ]),
  ],
  [
    TuningId.OpenD,
    formatPreset(TuningId.OpenD, "Open D", [
      getPitch(NoteId.D, 5),
      getPitch(NoteId.A, 4),
      getPitch(NoteId.Fs, 4),
      getPitch(NoteId.D, 4),
      getPitch(NoteId.A, 3),
      getPitch(NoteId.D, 3),
    ]),
  ],
  [
    TuningId.OpenE,
    formatPreset(TuningId.OpenE, "Open E", [
      getPitch(NoteId.E, 5),
      getPitch(NoteId.B, 4),
      getPitch(NoteId.Gs, 4),
      getPitch(NoteId.E, 4),
      getPitch(NoteId.B, 3),
      getPitch(NoteId.E, 3),
    ]),
  ],
  [
    TuningId.OpenF,
    formatPreset(TuningId.OpenF, "Open F", [
      getPitch(NoteId.F, 5),
      getPitch(NoteId.C, 4),
      getPitch(NoteId.F, 4),
      getPitch(NoteId.C, 4),
      getPitch(NoteId.A, 3),
      getPitch(NoteId.F, 3),
    ]),
  ],
  [
    TuningId.OpenG,
    formatPreset(TuningId.OpenG, "Open G", [
      getPitch(NoteId.D, 5),
      getPitch(NoteId.B, 4),
      getPitch(NoteId.G, 4),
      getPitch(NoteId.D, 4),
      getPitch(NoteId.G, 3),
      getPitch(NoteId.D, 3),
    ]),
  ],
]);

export const FRETBOARD_TUNING_VALUES = ArrayUtils.mapToArray(TUNING_PRESET_MAP);
