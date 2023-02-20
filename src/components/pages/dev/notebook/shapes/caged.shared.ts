import Chord from "../../../../../core/models/Chord";
import {
  ChordId,
  NoteId,
  ScaleId,
} from "../../../../../core/models/Model.constants";
import Note from "../../../../../core/models/Note";
import Scale from "../../../../../core/models/Scale";
import { VoicingId } from "../../../../../viewers/fretboard/Fretboard.voicing";

const ROOT = Note.fromId(NoteId.C);

const SCALE = new Scale(ScaleId.Ionian, { root: ROOT });
const SCALE_NOTES = SCALE.notes as Note[];

export const DIATONIC_ITEMS = [
  {
    model: Scale,
    presetId: ScaleId.Ionian,
    rootId: SCALE_NOTES[0].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_EShape_2,
  },
  {
    model: Scale,
    presetId: ScaleId.Dorian,
    rootId: SCALE_NOTES[1].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_DShape_1,
  },
  {
    model: Scale,
    presetId: ScaleId.Phrygian,
    rootId: SCALE_NOTES[2].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_CShape_1,
  },
  {
    model: Scale,
    presetId: ScaleId.Lydian,
    rootId: SCALE_NOTES[3].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_CShape_2,
  },
  {
    model: Scale,
    presetId: ScaleId.Mixolydian,
    rootId: SCALE_NOTES[4].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_AShape_1,
  },
  {
    model: Scale,
    presetId: ScaleId.Aeolian,
    rootId: SCALE_NOTES[5].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_GShape_1,
  },
  {
    model: Scale,
    presetId: ScaleId.Locrian,
    rootId: SCALE_NOTES[6].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_EShape_1,
  },
];

export const ROMAN_NUMERAL_ITEMS = [
  {
    model: Chord,
    presetId: ChordId.Maj7,
    rootId: SCALE_NOTES[0].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_EShape_2,
  },
  {
    model: Chord,
    presetId: ChordId.Min7,
    rootId: SCALE_NOTES[1].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_DShape_1,
  },
  {
    model: Chord,
    presetId: ChordId.Min7,
    rootId: SCALE_NOTES[2].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_CShape_1,
  },
  {
    model: Chord,
    presetId: ChordId.Maj7,
    rootId: SCALE_NOTES[3].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_CShape_2,
  },
  {
    model: Chord,
    presetId: ChordId.Dom7,
    rootId: SCALE_NOTES[4].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_AShape_1,
  },
  {
    model: Chord,
    presetId: ChordId.Min7,
    rootId: SCALE_NOTES[5].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_GShape_1,
  },
  {
    model: Chord,
    presetId: ChordId.HalfDim7,
    rootId: SCALE_NOTES[6].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_EShape_1,
  },
];

export const PENTATONIC_ITEMS = [
  {
    model: Scale,
    presetId: ScaleId.MajorPentatonic,
    rootId: SCALE_NOTES[0].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_EShape_2,
  },
  {
    model: Scale,
    presetId: ScaleId.Egyptian,
    rootId: SCALE_NOTES[1].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_DShape_1,
  },
  {
    model: Scale,
    presetId: ScaleId.ManGong,
    rootId: SCALE_NOTES[2].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_CShape_1,
  },
  {
    model: Scale,
    presetId: ScaleId.Ritusen,
    rootId: SCALE_NOTES[4].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_AShape_1,
  },
  {
    model: Scale,
    presetId: ScaleId.MinorPentatonic,
    rootId: SCALE_NOTES[5].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_CShape_1,
  },
];

export const TRIAD_ITEMS = [
  {
    model: Chord,
    presetId: ChordId.MajTriad,
    rootId: SCALE_NOTES[0].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_EShape_2,
  },
  {
    model: Chord,
    presetId: ChordId.MinTriad,
    rootId: SCALE_NOTES[1].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_DShape_1,
  },
  {
    model: Chord,
    presetId: ChordId.MinTriad,
    rootId: SCALE_NOTES[2].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_CShape_1,
  },
  {
    model: Chord,
    presetId: ChordId.MajTriad,
    rootId: SCALE_NOTES[3].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_CShape_2,
  },
  {
    model: Chord,
    presetId: ChordId.MajTriad,
    rootId: SCALE_NOTES[4].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_AShape_1,
  },
  {
    model: Chord,
    presetId: ChordId.MinTriad,
    rootId: SCALE_NOTES[5].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_GShape_1,
  },
  {
    model: Chord,
    presetId: ChordId.DimTriad,
    rootId: SCALE_NOTES[6].presetId,
    voicingId: VoicingId.Scale_DoubleOctave_EShape_1,
  },
];

export const SHAPE_ITEMS = [
  {
    model: Chord,
    presetId: ChordId.MajTriad,
    rootId: NoteId.C,
    //voicingId: VoicingId.Scale_DoubleOctave_EShape_2,
  },
  {
    model: Chord,
    presetId: ChordId.MajTriad,
    rootId: NoteId.C,
    //voicingId: VoicingId.Scale_DoubleOctave_DShape_1,
  },
  {
    model: Chord,
    presetId: ChordId.MajTriad,
    rootId: NoteId.C,
    //voicingId: VoicingId.Scale_DoubleOctave_CShape_1,
  },
  {
    model: Chord,
    presetId: ChordId.MajTriad,
    rootId: NoteId.C,
    //voicingId: VoicingId.Scale_DoubleOctave_CShape_2,
  },
  {
    model: Chord,
    presetId: ChordId.MajTriad,
    rootId: NoteId.C,
    //voicingId: VoicingId.Scale_DoubleOctave_AShape_1,
  },
];
