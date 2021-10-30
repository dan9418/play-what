import { NoteId, NOTE_PRESET_MAP } from "../../../../core/src/models/Pod/Note/Note.constants";
import { VOICING } from "../../../../core/src/models/PodList/Chord/Chord.constants";
import { ScaleId, SCALE_PRESET_MAP } from "../../../../core/src/models/PodList/Scale/Scale.constants";
import DEFAULT_FRETBOARD_PROPS from "../../../../ui/src/viewers/fretboard/Fretboard.defaults";

export const DEFAULT_DATA_LIST = [
    {
        root: NOTE_PRESET_MAP.get(NoteId.F).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Ionian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING.CAGED_SCALE_IONIAN
        }
    },
    {
        root: NOTE_PRESET_MAP.get(NoteId.G).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Dorian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING.CAGED_SCALE_DORIAN
        }
    },
    {
        root: NOTE_PRESET_MAP.get(NoteId.A).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Phrygian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING.CAGED_SCALE_PHRYGIAN
        }
    }, {
        root: NOTE_PRESET_MAP.get(NoteId.C).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Mixolydian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING.CAGED_SCALE_MIXOLYDIAN
        }
    },
    {
        root: NOTE_PRESET_MAP.get(NoteId.D).value,
        intervals: SCALE_PRESET_MAP.get(ScaleId.Aeolian).value,
        viewerProps: {
            ...DEFAULT_FRETBOARD_PROPS,
            voicing: VOICING.CAGED_SCALE_AEOLIAN
        }
    }
]
