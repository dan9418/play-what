import { NoteId, NOTE_PRESET_MAP } from "../../../../core/src/models/Pod/Note/Note.constants";
import { VOICING } from "../../../../core/src/models/PodList/Chord/Chord.constants";
import { ScaleId, SCALE_PRESET_MAP } from "../../../../core/src/models/PodList/Scale/Scale.constants";
import DEFAULT_FRETBOARD_PROPS from "../../../../ui/src/viewers/fretboard/Fretboard.defaults";

export const PRACTICE_CAGED = [
    {
        root: NOTE_PRESET_MAP.get(NoteId.F).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Locrian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING.CAGED_E_SCALE
        }
    },
    {
        root: NOTE_PRESET_MAP.get(NoteId.Fs).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Ionian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING.CAGED_E_SCALE_2
        }
    },
    {
        root: NOTE_PRESET_MAP.get(NoteId.Gs).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Dorian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING.CAGED_D_SCALE
        }
    },
    {
        root: NOTE_PRESET_MAP.get(NoteId.As).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Phrygian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING.CAGED_C_SCALE
        }
    },
    {
        root: NOTE_PRESET_MAP.get(NoteId.B).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Lydian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING.CAGED_C_SCALE
        }
    },
    {
        root: NOTE_PRESET_MAP.get(NoteId.Cs).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Mixolydian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING.CAGED_A_SCALE
        }
    },
    {
        root: NOTE_PRESET_MAP.get(NoteId.Ds).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Aeolian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING.CAGED_G_SCALE
        }
    }
]
