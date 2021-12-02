import { NoteId, NOTE_PRESET_MAP } from "../../core/models/Pod/Note/Note.constants";
import { ScaleId, SCALE_PRESET_MAP } from "../../core/models/PodList/Scale/Scale.constants";
import { VoicingId, VOICING_PRESET_MAP } from "../../core/theory/Voicing.constants";
import DEFAULT_FRETBOARD_PROPS from "../../ui/viewers/fretboard/Fretboard.defaults";

export const PRACTICE_CAGED = [
    {
        root: NOTE_PRESET_MAP.get(NoteId.F).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Locrian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING_PRESET_MAP.get(VoicingId.Scale_DoubleOctave_EShape_1)
        }
    },
    {
        root: NOTE_PRESET_MAP.get(NoteId.Fs).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Ionian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING_PRESET_MAP.get(VoicingId.Scale_DoubleOctave_EShape_2)
        }
    },
    {
        root: NOTE_PRESET_MAP.get(NoteId.Gs).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Dorian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING_PRESET_MAP.get(VoicingId.Scale_DoubleOctave_DShape_1)
        }
    },
    {
        root: NOTE_PRESET_MAP.get(NoteId.As).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Phrygian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING_PRESET_MAP.get(VoicingId.Scale_DoubleOctave_CShape_1)
        }
    },
    {
        root: NOTE_PRESET_MAP.get(NoteId.B).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Lydian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING_PRESET_MAP.get(VoicingId.Scale_DoubleOctave_CShape_2)
        }
    },
    {
        root: NOTE_PRESET_MAP.get(NoteId.Cs).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Mixolydian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING_PRESET_MAP.get(VoicingId.Scale_DoubleOctave_AShape_1)
        }
    },
    {
        root: NOTE_PRESET_MAP.get(NoteId.Ds).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Aeolian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING_PRESET_MAP.get(VoicingId.Scale_DoubleOctave_GShape_1)
        }
    }
];

export const PRACTICE_PRESETS = [
    {
        id: 'CAGED',
        name: 'CAGED',
        value: PRACTICE_CAGED
    }
];
