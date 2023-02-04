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
    modelId: ScaleId.Ionian,
    rootId: SCALE_NOTES[0].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_EShape_2,
  },
  {
    model: Scale,
    modelId: ScaleId.Dorian,
    rootId: SCALE_NOTES[1].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_DShape_1,
  },
  {
    model: Scale,
    modelId: ScaleId.Phrygian,
    rootId: SCALE_NOTES[2].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_CShape_1,
  },
  {
    model: Scale,
    modelId: ScaleId.Lydian,
    rootId: SCALE_NOTES[3].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_CShape_2,
  },
  {
    model: Scale,
    modelId: ScaleId.Mixolydian,
    rootId: SCALE_NOTES[4].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_AShape_1,
  },
  {
    model: Scale,
    modelId: ScaleId.Aeolian,
    rootId: SCALE_NOTES[5].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_GShape_1,
  },
  {
    model: Scale,
    modelId: ScaleId.Locrian,
    rootId: SCALE_NOTES[6].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_EShape_1,
  },
];

export const ROMAN_NUMERAL_ITEMS = [
  {
    model: Chord,
    modelId: ChordId.Maj7,
    rootId: SCALE_NOTES[0].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_EShape_2,
  },
  {
    model: Chord,
    modelId: ChordId.Min7,
    rootId: SCALE_NOTES[1].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_DShape_1,
  },
  {
    model: Chord,
    modelId: ChordId.Min7,
    rootId: SCALE_NOTES[2].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_CShape_1,
  },
  {
    model: Chord,
    modelId: ChordId.Maj7,
    rootId: SCALE_NOTES[3].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_CShape_2,
  },
  {
    model: Chord,
    modelId: ChordId.Dom7,
    rootId: SCALE_NOTES[4].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_AShape_1,
  },
  {
    model: Chord,
    modelId: ChordId.Min7,
    rootId: SCALE_NOTES[5].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_GShape_1,
  },
  {
    model: Chord,
    modelId: ChordId.HalfDim7,
    rootId: SCALE_NOTES[6].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_EShape_1,
  },
];

export const PENTATONIC_ITEMS = [
  {
    model: Scale,
    modelId: ScaleId.MajorPentatonic,
    rootId: SCALE_NOTES[0].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_EShape_2,
  },
  {
    model: Scale,
    modelId: ScaleId.Egyptian,
    rootId: SCALE_NOTES[1].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_DShape_1,
  },
  {
    model: Scale,
    modelId: ScaleId.ManGong,
    rootId: SCALE_NOTES[2].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_CShape_1,
  },
  {
    model: Scale,
    modelId: ScaleId.Ritusen,
    rootId: SCALE_NOTES[4].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_AShape_1,
  },
  {
    model: Scale,
    modelId: ScaleId.MinorPentatonic,
    rootId: SCALE_NOTES[5].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_CShape_1,
  },
];

export const TRIAD_ITEMS = [
  {
    model: Chord,
    modelId: ChordId.MajTriad,
    rootId: SCALE_NOTES[0].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_EShape_2,
  },
  {
    model: Chord,
    modelId: ChordId.MinTriad,
    rootId: SCALE_NOTES[1].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_DShape_1,
  },
  {
    model: Chord,
    modelId: ChordId.MinTriad,
    rootId: SCALE_NOTES[2].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_CShape_1,
  },
  {
    model: Chord,
    modelId: ChordId.MajTriad,
    rootId: SCALE_NOTES[3].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_CShape_2,
  },
  {
    model: Chord,
    modelId: ChordId.MajTriad,
    rootId: SCALE_NOTES[4].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_AShape_1,
  },
  {
    model: Chord,
    modelId: ChordId.MinTriad,
    rootId: SCALE_NOTES[5].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_GShape_1,
  },
  {
    model: Chord,
    modelId: ChordId.DimTriad,
    rootId: SCALE_NOTES[6].modelId,
    voicingId: VoicingId.Scale_DoubleOctave_EShape_1,
  },
];

export const CAGED_ITEMS = [
  {
    model: Chord,
    modelId: ChordId.MajTriad,
    rootId: SCALE_NOTES[0].modelId,
    voicingId: VoicingId.Chord_Triad_CShape_1,
  },
  {
    model: Chord,
    modelId: ChordId.MajTriad,
    rootId: SCALE_NOTES[0].modelId,
    voicingId: VoicingId.Chord_Triad_AShape_1,
  },
  {
    model: Chord,
    modelId: ChordId.MajTriad,
    rootId: SCALE_NOTES[0].modelId,
    voicingId: VoicingId.Chord_Triad_GShape_1,
  },
  {
    model: Chord,
    modelId: ChordId.MajTriad,
    rootId: SCALE_NOTES[0].modelId,
    voicingId: VoicingId.Chord_Triad_EShape_1,
  },
  {
    model: Chord,
    modelId: ChordId.MajTriad,
    rootId: SCALE_NOTES[0].modelId,
    voicingId: VoicingId.Chord_Triad_DShape_1,
  },
];
