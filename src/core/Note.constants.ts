import ArrayUtils from "./primitives/Array.utils";
import { PresetMap } from "./Core.constants";
import { formatPodPreset, IPod, IPodPreset } from "./Pod.constants";

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

export interface INotePreset extends IPodPreset<NoteId> {}

const formatNotePreset = (
  presetId: NoteId,
  name: string,
  pod: IPod
): INotePreset => formatPodPreset(presetId, name, pod);

export const NOTE_PRESET_MAP: PresetMap<NoteId, INotePreset> = new Map([
  [NoteId.C, formatNotePreset(NoteId.C, "C", [0, 0])],
  [NoteId.Cs, formatNotePreset(NoteId.Cs, "C#", [1, 0])],
  [NoteId.Db, formatNotePreset(NoteId.Db, "Db", [1, 1])],
  [NoteId.D, formatNotePreset(NoteId.D, "D", [2, 1])],
  [NoteId.Ds, formatNotePreset(NoteId.Ds, "D#", [3, 1])],
  [NoteId.Eb, formatNotePreset(NoteId.Eb, "Eb", [3, 2])],
  [NoteId.E, formatNotePreset(NoteId.E, "E", [4, 2])],
  [NoteId.Es, formatNotePreset(NoteId.Es, "E#", [5, 2])],
  [NoteId.Fb, formatNotePreset(NoteId.Fb, "Fb", [4, 3])],
  [NoteId.F, formatNotePreset(NoteId.F, "F", [5, 3])],
  [NoteId.Fs, formatNotePreset(NoteId.Fs, "F#", [6, 3])],
  [NoteId.Gb, formatNotePreset(NoteId.Gb, "Gb", [6, 4])],
  [NoteId.G, formatNotePreset(NoteId.G, "G", [7, 4])],
  [NoteId.Gs, formatNotePreset(NoteId.Gs, "G#", [8, 4])],
  [NoteId.Ab, formatNotePreset(NoteId.Ab, "Ab", [8, 5])],
  [NoteId.A, formatNotePreset(NoteId.A, "A", [9, 5])],
  [NoteId.As, formatNotePreset(NoteId.As, "A#", [10, 5])],
  [NoteId.Bb, formatNotePreset(NoteId.Bb, "Bb", [10, 6])],
  [NoteId.B, formatNotePreset(NoteId.B, "B", [11, 6])],
  [NoteId.Bs, formatNotePreset(NoteId.Bs, "B#", [0, 6])],
  [NoteId.Cb, formatNotePreset(NoteId.Cb, "Cb", [11, 0])],
]);

export const NOTE_PRESETS = ArrayUtils.mapToArray(
  NOTE_PRESET_MAP
) as INotePreset[];
