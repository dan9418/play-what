import Chord from "../../../../../core/models/Chord";
import {
  ChordId,
  IPod,
  NoteId,
  ScaleId,
} from "../../../../../core/models/Model.constants";
import {
  getNoteFromId,
  getNoteFromPod,
} from "../../../../../core/models/Note.utils";
import Scale from "../../../../../core/models/Scale";
import { VoicingId } from "../../../../../viewers/fretboard/Fretboard.voicing";

const ROOT = getNoteFromId(NoteId.C);

const SCALE = new Scale(ScaleId.Ionian, { root: ROOT });
const SCALE_NOTES = SCALE.notePods as IPod[];

export const DIATONIC_ITEMS = [
  {
    model: Scale,
    presetId: ScaleId.Ionian,
    rootId: getNoteFromPod(SCALE_NOTES[0]),
    voicingId: VoicingId.Scale_DoubleOctave_EShape_2,
  },
  {
    model: Scale,
    presetId: ScaleId.Dorian,
    rootId: getNoteFromPod(SCALE_NOTES[1]),
    voicingId: VoicingId.Scale_DoubleOctave_DShape_1,
  },
  {
    model: Scale,
    presetId: ScaleId.Phrygian,
    rootId: getNoteFromPod(SCALE_NOTES[2]),
    voicingId: VoicingId.Scale_DoubleOctave_CShape_1,
  },
  {
    model: Scale,
    presetId: ScaleId.Lydian,
    rootId: getNoteFromPod(SCALE_NOTES[3]),
    voicingId: VoicingId.Scale_DoubleOctave_CShape_2,
  },
  {
    model: Scale,
    presetId: ScaleId.Mixolydian,
    rootId: getNoteFromPod(SCALE_NOTES[4]),
    voicingId: VoicingId.Scale_DoubleOctave_AShape_1,
  },
  {
    model: Scale,
    presetId: ScaleId.Aeolian,
    rootId: getNoteFromPod(SCALE_NOTES[5]),
    voicingId: VoicingId.Scale_DoubleOctave_GShape_1,
  },
  {
    model: Scale,
    presetId: ScaleId.Locrian,
    rootId: getNoteFromPod(SCALE_NOTES[6]),
    voicingId: VoicingId.Scale_DoubleOctave_EShape_1,
  },
];

export const ROMAN_NUMERAL_ITEMS = [
  {
    model: Chord,
    presetId: ChordId.Maj7,
    rootId: getNoteFromPod(SCALE_NOTES[0]),
    voicingId: VoicingId.Scale_DoubleOctave_EShape_2,
  },
  {
    model: Chord,
    presetId: ChordId.Min7,
    rootId: getNoteFromPod(SCALE_NOTES[1]),
    voicingId: VoicingId.Scale_DoubleOctave_DShape_1,
  },
  {
    model: Chord,
    presetId: ChordId.Min7,
    rootId: getNoteFromPod(SCALE_NOTES[2]),
    voicingId: VoicingId.Scale_DoubleOctave_CShape_1,
  },
  {
    model: Chord,
    presetId: ChordId.Maj7,
    rootId: getNoteFromPod(SCALE_NOTES[3]),
    voicingId: VoicingId.Scale_DoubleOctave_CShape_2,
  },
  {
    model: Chord,
    presetId: ChordId.Dom7,
    rootId: getNoteFromPod(SCALE_NOTES[4]),
    voicingId: VoicingId.Scale_DoubleOctave_AShape_1,
  },
  {
    model: Chord,
    presetId: ChordId.Min7,
    rootId: getNoteFromPod(SCALE_NOTES[5]),
    voicingId: VoicingId.Scale_DoubleOctave_GShape_1,
  },
  {
    model: Chord,
    presetId: ChordId.HalfDim7,
    rootId: getNoteFromPod(SCALE_NOTES[6]),
    voicingId: VoicingId.Scale_DoubleOctave_EShape_1,
  },
];

export const PENTATONIC_ITEMS = [
  {
    model: Scale,
    presetId: ScaleId.MajorPentatonic,
    rootId: getNoteFromPod(SCALE_NOTES[0]),
    voicingId: VoicingId.Scale_DoubleOctave_EShape_2,
  },
  {
    model: Scale,
    presetId: ScaleId.Egyptian,
    rootId: getNoteFromPod(SCALE_NOTES[1]),
    voicingId: VoicingId.Scale_DoubleOctave_DShape_1,
  },
  {
    model: Scale,
    presetId: ScaleId.ManGong,
    rootId: getNoteFromPod(SCALE_NOTES[2]),
    voicingId: VoicingId.Scale_DoubleOctave_CShape_1,
  },
  {
    model: Scale,
    presetId: ScaleId.Ritusen,
    rootId: getNoteFromPod(SCALE_NOTES[4]),
    voicingId: VoicingId.Scale_DoubleOctave_AShape_1,
  },
  {
    model: Scale,
    presetId: ScaleId.MinorPentatonic,
    rootId: getNoteFromPod(SCALE_NOTES[5]),
    voicingId: VoicingId.Scale_DoubleOctave_CShape_1,
  },
];

export const TRIAD_ITEMS = [
  {
    model: Chord,
    presetId: ChordId.MajTriad,
    rootId: getNoteFromPod(SCALE_NOTES[0]),
    voicingId: VoicingId.Scale_DoubleOctave_EShape_2,
  },
  {
    model: Chord,
    presetId: ChordId.MinTriad,
    rootId: getNoteFromPod(SCALE_NOTES[1]),
    voicingId: VoicingId.Scale_DoubleOctave_DShape_1,
  },
  {
    model: Chord,
    presetId: ChordId.MinTriad,
    rootId: getNoteFromPod(SCALE_NOTES[2]),
    voicingId: VoicingId.Scale_DoubleOctave_CShape_1,
  },
  {
    model: Chord,
    presetId: ChordId.MajTriad,
    rootId: getNoteFromPod(SCALE_NOTES[3]),
    voicingId: VoicingId.Scale_DoubleOctave_CShape_2,
  },
  {
    model: Chord,
    presetId: ChordId.MajTriad,
    rootId: getNoteFromPod(SCALE_NOTES[4]),
    voicingId: VoicingId.Scale_DoubleOctave_AShape_1,
  },
  {
    model: Chord,
    presetId: ChordId.MinTriad,
    rootId: getNoteFromPod(SCALE_NOTES[5]),
    voicingId: VoicingId.Scale_DoubleOctave_GShape_1,
  },
  {
    model: Chord,
    presetId: ChordId.DimTriad,
    rootId: getNoteFromPod(SCALE_NOTES[6]),
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
