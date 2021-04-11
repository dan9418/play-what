import { NoteId } from "@pw/core/src/models/Pod/Note/Note.constants";
import { ChordId } from "@pw/core/src/models/PodList/Chord/Chord.constants";

type ISectionChord = [rootId: NoteId, chordId: ChordId, t: number];

interface ISectionConfig {
    name: string;
    chords: ISectionChord[]
}

export interface IChartConfig {
    name: string;
    sections: ISectionConfig[]
}

export const ALL_OF_ME_CONFIG: IChartConfig = {
    name: 'All of Me',
    sections: [
        {
            name: 'A',
            chords: [
                [NoteId.C, ChordId.Maj6, 16],
                [NoteId.E, ChordId.Dom7, 16],
                [NoteId.A, ChordId.Dom7, 16],
                [NoteId.D, ChordId.Min7, 16]
            ]
        },
        {
            name: 'B',
            chords: [
                [NoteId.E, ChordId.Dom7, 16],
                [NoteId.A, ChordId.Min7, 16],
                [NoteId.D, ChordId.Dom7, 16],
                [NoteId.D, ChordId.Min7, 8],
                [NoteId.G, ChordId.Dom7, 8]
            ]
        },
        {
            name: 'A\'',
            chords: [
                [NoteId.C, ChordId.Maj6, 16],
                [NoteId.E, ChordId.Dom7, 16],
                [NoteId.A, ChordId.Dom7, 16],
                [NoteId.D, ChordId.Min7, 16]
            ]
        },
        {
            name: 'C',
            chords: [
                [NoteId.C, ChordId.Maj6, 8],
                [NoteId.F, ChordId.Min6, 8],
                [NoteId.C, ChordId.Maj7, 8],
                [NoteId.A, ChordId.Dom7, 8],
                [NoteId.D, ChordId.Min7, 8],
                [NoteId.G, ChordId.Dom7, 8],
                [NoteId.C, ChordId.Maj7, 8]
            ]
        }
    ]
}
