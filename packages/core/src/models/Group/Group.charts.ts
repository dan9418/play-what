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

export const AUTUMN_LEAVES_CONFIG: IChartConfig = {
    name: 'Autumn Leaves',
    sections: [
        {
            name: 'A',
            chords: [
                [NoteId.C, ChordId.Min7, 16],
                [NoteId.F, ChordId.Dom7, 16],
                [NoteId.Bb, ChordId.Maj7, 16],
                [NoteId.Eb, ChordId.Maj7, 16],
                [NoteId.A, ChordId.HalfDim7, 16],
                [NoteId.D, ChordId.Dom7, 16],
                [NoteId.G, ChordId.Min6, 32]
            ]
        },
        {
            name: 'A\'',
            chords: [
                [NoteId.C, ChordId.Min7, 16],
                [NoteId.F, ChordId.Dom7, 16],
                [NoteId.Bb, ChordId.Maj7, 16],
                [NoteId.Eb, ChordId.Maj7, 16],
                [NoteId.A, ChordId.HalfDim7, 16],
                [NoteId.D, ChordId.Dom7, 16],
                [NoteId.G, ChordId.Min6, 32]
            ]
        },
        {
            name: 'B',
            chords: [
                [NoteId.A, ChordId.Maj6, 16],
                [NoteId.D, ChordId.Dom7, 16],
                [NoteId.G, ChordId.Dom7, 32],
                [NoteId.C, ChordId.Min7, 16],
                [NoteId.F, ChordId.Min7, 16],
                [NoteId.Bb, ChordId.Min7, 32]
            ]
        },
        {
            name: 'C',
            chords: [
                [NoteId.A, ChordId.HalfDim7, 16],
                [NoteId.D, ChordId.Dom7, 16],
                [NoteId.G, ChordId.Min7, 8],
                [NoteId.C, ChordId.Dom7, 8],
                [NoteId.F, ChordId.Min7, 8],
                [NoteId.Bb, ChordId.Dom7, 8],
                [NoteId.A, ChordId.HalfDim7, 16],
                [NoteId.D, ChordId.Dom7, 16],
                [NoteId.G, ChordId.Min7, 32]
            ]
        }
    ]
}

export const BLUE_BOSSA_CONFIG: IChartConfig = {
    name: 'Blue Bossa',
    sections: [
        {
            name: 'A',
            chords: [
                [NoteId.C, ChordId.Min7, 32],
                [NoteId.F, ChordId.Min6, 16],
                [NoteId.Bb, ChordId.Dom7, 16],
                [NoteId.D, ChordId.HalfDim7, 16],
                [NoteId.G, ChordId.Dom7, 16],
                [NoteId.C, ChordId.Min7, 32]
            ]
        },
        {
            name: 'B',
            chords: [
                [NoteId.Eb, ChordId.Min7, 16],
                [NoteId.Ab, ChordId.Dom7, 16],
                [NoteId.Db, ChordId.Maj7, 32],
                [NoteId.D, ChordId.HalfDim7, 16],
                [NoteId.G, ChordId.Dom7, 16],
                [NoteId.C, ChordId.Min7, 16],
                [NoteId.D, ChordId.HalfDim7, 16],
                [NoteId.G, ChordId.Dom7, 16]
            ]
        }
    ]
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

export const IT_COULD_HAPPEN_TO_YOU_CONFIG: IChartConfig = {
    name: 'It Could Happen To You',
    sections: [
        {
            name: 'A',
            chords: [
                [NoteId.Eb, ChordId.Maj7, 16],
                [NoteId.G, ChordId.HalfDim7, 8],
                [NoteId.C, ChordId.Dom7b9, 8],
                [NoteId.F, ChordId.Min7, 16],
                [NoteId.A, ChordId.HalfDim7, 8],
                [NoteId.D, ChordId.Dom7b9, 8],
                [NoteId.Eb, ChordId.Maj7, 16],
                [NoteId.Ab, ChordId.Dom7, 16],
                [NoteId.G, ChordId.HalfDim7, 16],
                [NoteId.C, ChordId.Dom7b9, 16]
            ]
        },
        {
            name: 'B',
            chords: [
                [NoteId.F, ChordId.Min7, 16],
                [NoteId.Ab, ChordId.Min6, 16],
                [NoteId.Eb, ChordId.Maj7, 16],
                [NoteId.D, ChordId.HalfDim7, 8],
                [NoteId.G, ChordId.Dom7b9, 8],
                [NoteId.C, ChordId.Min7, 16],
                [NoteId.F, ChordId.Dom7, 16],
                [NoteId.F, ChordId.Min7, 16],
                [NoteId.Bb, ChordId.Dom7, 16]
            ]
        },
        {
            name: 'A\'',
            chords: [
                [NoteId.Eb, ChordId.Maj7, 16],
                [NoteId.G, ChordId.HalfDim7, 8],
                [NoteId.C, ChordId.Dom7b9, 8],
                [NoteId.F, ChordId.Min7, 16],
                [NoteId.A, ChordId.HalfDim7, 8],
                [NoteId.D, ChordId.Dom7b9, 8],
                [NoteId.Eb, ChordId.Maj7, 16],
                [NoteId.Ab, ChordId.Dom7, 16],
                [NoteId.G, ChordId.HalfDim7, 16],
                [NoteId.C, ChordId.Dom7b9, 16]
            ]
        },
        {
            name: 'C',
            chords: [
                [NoteId.F, ChordId.Min7, 16],
                [NoteId.Ab, ChordId.Min6, 16],
                [NoteId.Eb, ChordId.Maj7, 8],
                [NoteId.Ab, ChordId.Dom7, 8],
                [NoteId.G, ChordId.HalfDim7, 8],
                [NoteId.C, ChordId.Dom7b9, 8],
                [NoteId.F, ChordId.Min7, 16],
                [NoteId.Bb, ChordId.Dom7b9, 16],
                [NoteId.Eb, ChordId.Maj7, 32]
            ]
        }
    ]
}

export const SWEET_GEORGIA_BROWN_CONFIG: IChartConfig = {
    name: 'Sweet Georgia Brown',
    sections: [
        {
            name: 'A',
            chords: [
                [NoteId.F, ChordId.Dom7, 64],
                [NoteId.Bb, ChordId.Dom7, 64]
            ]
        },
        {
            name: 'B',
            chords: [
                [NoteId.Eb, ChordId.Dom7, 64],
                [NoteId.Ab, ChordId.Maj7, 16],
                [NoteId.Bb, ChordId.Dom7, 8],
                [NoteId.Eb, ChordId.Min7, 8],
                [NoteId.Ab, ChordId.Dom7, 16],
                [NoteId.G, ChordId.Dom7, 8],
                [NoteId.C, ChordId.Dom7, 8]
            ]
        },
        {
            name: 'A\'',
            chords: [
                [NoteId.F, ChordId.Dom7, 64],
                [NoteId.Bb, ChordId.Dom7, 64]
            ]
        },
        {
            name: 'C',
            chords: [
                [NoteId.F, ChordId.Min7, 8],
                [NoteId.G, ChordId.HalfDim7, 8],
                [NoteId.C, ChordId.Dom7b9, 8],
                [NoteId.F, ChordId.Min7, 8],
                [NoteId.G, ChordId.HalfDim7, 8],
                [NoteId.C, ChordId.Dom7b9, 8],
                [NoteId.Ab, ChordId.Dom7, 8],
                [NoteId.G, ChordId.Dom7, 8],
                [NoteId.Gb, ChordId.Dom7, 8],
                [NoteId.F, ChordId.Dom7, 8],
                [NoteId.Bb, ChordId.Min7, 8],
                [NoteId.Eb, ChordId.Dom7, 8],
                [NoteId.Ab, ChordId.Maj7, 8]
            ]
        }
    ]
}

export const SO_WHAT_CONFIG: IChartConfig = {
    name: 'So What',
    sections: [
        {
            name: 'A',
            chords: [
                [NoteId.D, ChordId.Min7, 16],
                [NoteId.D, ChordId.Min7, 16],
                [NoteId.Eb, ChordId.Min7, 16],
                [NoteId.D, ChordId.Min7, 16]
            ]
        }
    ]
}



export const ON_GREEN_DOLPIN_STREET_CONFIG: IChartConfig = {
    name: 'On Green Dolphin Street',
    sections: [
        {
            name: 'A',
            chords: [
                [NoteId.C, ChordId.Maj7, 32],
                [NoteId.C, ChordId.Min7, 32],
                [NoteId.D, ChordId.Dom7, 16],
                [NoteId.Db, ChordId.Maj7, 16],
                [NoteId.C, ChordId.Maj7, 16],
                [NoteId.E, ChordId.Min7, 8],
                [NoteId.A, ChordId.Maj7, 8]
            ]
        },
        {
            name: 'B',
            chords: [
                [NoteId.D, ChordId.Min7, 16],
                [NoteId.G, ChordId.Dom7, 16],
                [NoteId.C, ChordId.Maj7, 32],
                [NoteId.F, ChordId.Min7, 8],
                [NoteId.Bb, ChordId.Dom7, 8],
                [NoteId.Eb, ChordId.Maj7, 8],
                [NoteId.D, ChordId.Min7, 8],
                [NoteId.G, ChordId.Dom7, 8]
            ]
        },
        {
            name: 'A\'',
            chords: [
                [NoteId.C, ChordId.Maj7, 32],
                [NoteId.C, ChordId.Min7, 32],
                [NoteId.D, ChordId.Dom7, 16],
                [NoteId.Db, ChordId.Maj7, 16],
                [NoteId.C, ChordId.Maj7, 16],
                [NoteId.E, ChordId.Min7, 8],
                [NoteId.A, ChordId.Maj7, 8]
            ]
        },
        {
            name: 'C',
            chords: [
                [NoteId.D, ChordId.Min7, 8],
                [NoteId.D, ChordId.Min7, 8],
                [NoteId.B, ChordId.HalfDim7, 8],
                [NoteId.E, ChordId.Dom7b9, 8],
                [NoteId.A, ChordId.Min7, 8],
                [NoteId.A, ChordId.Min7, 8],
                [NoteId.Fs, ChordId.HalfDim7, 8],
                [NoteId.B, ChordId.Dom7b9, 8],
                [NoteId.E, ChordId.Min7, 8],
                [NoteId.A, ChordId.Min7, 8],
                [NoteId.D, ChordId.Min7, 8],
                [NoteId.G, ChordId.Maj7, 8],
                [NoteId.C, ChordId.Maj7, 8]
            ]
        }
    ]
}

export const HAVE_YOU_MET_MISS_JONES_CONFIG: IChartConfig = {
    name: 'Have You Met Miss Jones?',
    sections: [
        {
            name: 'A',
            chords: [
                [NoteId.F, ChordId.Maj7, 16],
                [NoteId.Fs, ChordId.DimTri, 16],
                [NoteId.G, ChordId.Min7, 16],
                [NoteId.C, ChordId.Dom7, 16],
                [NoteId.A, ChordId.Min7, 16],
                [NoteId.D, ChordId.Min7, 16],
                [NoteId.G, ChordId.Min7, 16],
                [NoteId.C, ChordId.Dom7, 16]
            ]
        },
        {
            name: 'B',
            chords: [
                [NoteId.Bb, ChordId.Maj7, 16],
                [NoteId.Ab, ChordId.Min7, 16],
                [NoteId.Db, ChordId.Dom7, 16],
                [NoteId.Gb, ChordId.Maj7, 16],
                [NoteId.E, ChordId.Min7, 16],
                [NoteId.A, ChordId.Dom7, 16],
                [NoteId.D, ChordId.Maj7, 16],
                [NoteId.Ab, ChordId.Min7, 16],
                [NoteId.Db, ChordId.Dom7, 16],
                [NoteId.Gb, ChordId.Maj7, 16],
                [NoteId.G, ChordId.Min7, 16],
                [NoteId.C, ChordId.Dom7, 16]
            ]
        },
        {
            name: 'A\'',
            chords: [
                [NoteId.F, ChordId.Maj7, 16],
                [NoteId.Fs, ChordId.DimTri, 16],
                [NoteId.G, ChordId.Min7, 16],
                [NoteId.C, ChordId.Dom7, 16],
                [NoteId.A, ChordId.Min7, 16],
                [NoteId.D, ChordId.Min7, 16],
                [NoteId.C, ChordId.Min7, 16],
                [NoteId.F, ChordId.Dom7, 16]
            ]
        },
        {
            name: 'A\'\'',
            chords: [
                [NoteId.F, ChordId.Maj7, 16],
                [NoteId.Fs, ChordId.DimTri, 16],
                [NoteId.G, ChordId.Min7, 16],
                [NoteId.C, ChordId.Dom7, 16],
                [NoteId.A, ChordId.Min7, 16],
                [NoteId.D, ChordId.Min7, 16],
                [NoteId.G, ChordId.Min7, 8],
                [NoteId.C, ChordId.Dom7, 8],
                [NoteId.F, ChordId.Maj7, 16]
            ]
        }
    ]
}



export const ALL_THE_THINGS_YOU_ARE_CONFIG: IChartConfig = {
    name: 'All The Things You Are',
    sections: [
        {
            name: 'A',
            chords: [
                [NoteId.F, ChordId.Min7, 16],
                [NoteId.Bb, ChordId.Min7, 16],
                [NoteId.Eb, ChordId.Dom7, 16],
                [NoteId.Ab, ChordId.Maj7, 16],
                [NoteId.Db, ChordId.Maj7, 16],
                [NoteId.G, ChordId.Dom7, 16],
                [NoteId.C, ChordId.Maj7, 32]
            ]
        },
        {
            name: 'A\'',
            chords: [
                [NoteId.C, ChordId.Min7, 16],
                [NoteId.F, ChordId.Min7, 16],
                [NoteId.Bb, ChordId.Dom7, 16],
                [NoteId.Eb, ChordId.Maj7, 16],
                [NoteId.Ab, ChordId.Maj7, 16],
                [NoteId.A, ChordId.Min7, 8],
                [NoteId.D, ChordId.Dom7, 8],
                [NoteId.G, ChordId.Maj7, 16],
                [NoteId.E, ChordId.Dom7, 16]
            ]
        },
        {
            name: 'B',
            chords: [
                [NoteId.A, ChordId.Min7, 16],
                [NoteId.D, ChordId.Dom7, 16],
                [NoteId.G, ChordId.Maj7, 32],
                [NoteId.Fs, ChordId.Min7, 16],
                [NoteId.B, ChordId.Dom7, 16],
                [NoteId.E, ChordId.Maj7, 16],
                [NoteId.C, ChordId.Dom7, 16]
            ]
        },
        {
            name: 'A\'\'',
            chords: [
                [NoteId.F, ChordId.Min7, 16],
                [NoteId.Bb, ChordId.Min7, 16],
                [NoteId.Eb, ChordId.Dom7, 16],
                [NoteId.Ab, ChordId.Maj7, 16],
                [NoteId.Db, ChordId.Maj7, 16],
                [NoteId.G, ChordId.Maj7, 16],
                [NoteId.C, ChordId.Min7, 16],
                [NoteId.B, ChordId.DimTri, 16],
                [NoteId.Bb, ChordId.Min7, 16],
                [NoteId.Eb, ChordId.Dom7, 16],
                [NoteId.Ab, ChordId.Maj7, 32]
            ]
        }
    ]
}



export const STELLA_BY_STARLIGHT_CONFIG: IChartConfig = {
    name: 'Stella By Starlight',
    sections: [
        {
            name: 'A',
            chords: [
                [NoteId.E, ChordId.HalfDim7, 16],
                [NoteId.A, ChordId.Dom7, 16],
                [NoteId.C, ChordId.Min7, 16],
                [NoteId.F, ChordId.Dom7, 16],
                [NoteId.F, ChordId.Min7, 16],
                [NoteId.Db, ChordId.Dom7, 16],
                [NoteId.Eb, ChordId.Maj7, 16],
                [NoteId.Ab, ChordId.Dom7, 16]
            ]
        },
        {
            name: 'B',
            chords: [
                [NoteId.Bb, ChordId.Maj7, 16],
                [NoteId.E, ChordId.HalfDim7, 8],
                [NoteId.A, ChordId.Dom7b9, 8],
                [NoteId.D, ChordId.Min7, 16],
                [NoteId.Bb, ChordId.Min7, 8],
                [NoteId.Eb, ChordId.Maj7, 8],
                [NoteId.F, ChordId.Maj7, 16],
                [NoteId.E, ChordId.HalfDim7, 8],
                [NoteId.A, ChordId.Dom7b9, 8],
                [NoteId.A, ChordId.HalfDim7, 16],
                [NoteId.D, ChordId.Dom7b9, 16]
            ]
        },
        {
            name: 'C',
            chords: [
                [NoteId.G, ChordId.Dom7, 32],
                [NoteId.C, ChordId.Min7, 32],
                [NoteId.Ab, ChordId.Dom7, 32],
                [NoteId.Bb, ChordId.Maj7, 32]
            ]
        },
        {
            name: 'A\'',
            chords: [
                [NoteId.E, ChordId.HalfDim7, 16],
                [NoteId.A, ChordId.Dom7b9, 16],
                [NoteId.D, ChordId.HalfDim7, 16],
                [NoteId.G, ChordId.Dom7b9, 16],
                [NoteId.C, ChordId.HalfDim7, 16],
                [NoteId.F, ChordId.Dom7b9, 16],
                [NoteId.Bb, ChordId.Maj7, 32]
            ]
        }

    ]
}

export const OUT_OF_NOWHERE_CONFIG: IChartConfig = {
    name: 'Out Of Nowhere',
    sections: [
        {
            name: 'A',
            chords: [
                [NoteId.C, ChordId.MajTri, 16]
            ]
        }
    ]
}

export const ITS_A_BLUE_WORLD_CONFIG: IChartConfig = {
    name: 'It\'s A Blue World',
    sections: [
        {
            name: 'A',
            chords: [
                [NoteId.C, ChordId.MajTri, 16]
            ]
        }
    ]
}

export const ALONE_AGAIN_CONFIG: IChartConfig = {
    name: 'Alone Again',
    sections: [
        {
            name: 'A',
            chords: [
                [NoteId.G, ChordId.Maj7, 16],
                [NoteId.B, ChordId.Min7, 16],
                [NoteId.D, ChordId.Min7, 16],
                [NoteId.A, ChordId.Min7, 16],
                [NoteId.B, ChordId.Min7, 8],
                [NoteId.E, ChordId.Dom7, 8],
                [NoteId.C, ChordId.Min7, 16],
                [NoteId.G, ChordId.Maj7, 8],
                [NoteId.G, ChordId.AugTri, 8],
                [NoteId.G, ChordId.Maj6, 8],
                [NoteId.Fs, ChordId.Dom7, 8],
                [NoteId.B, ChordId.Min7, 16],
                [NoteId.D, ChordId.Min7, 8],
                [NoteId.E, ChordId.Dom7, 8],
                [NoteId.A, ChordId.Min7, 16],
                [NoteId.C, ChordId.Min7, 16],
                [NoteId.G, ChordId.Maj7, 16],
                [NoteId.B, ChordId.Min7, 8],
                [NoteId.E, ChordId.Dom7, 8],
                [NoteId.A, ChordId.Min7, 8],
                [NoteId.D, ChordId.Dom7, 8],
                [NoteId.G, ChordId.Maj7, 16]
            ]
        },
        {
            name: 'B',
            chords: [
                [NoteId.Bb, ChordId.Maj7, 16],
                [NoteId.F, ChordId.Maj7, 16],
                [NoteId.C, ChordId.Min7, 8],
                [NoteId.D, ChordId.Dom7, 8],
                [NoteId.Bb, ChordId.Maj7, 16],
                [NoteId.D, ChordId.Maj7, 16],
                [NoteId.A, ChordId.Min7, 8],
                [NoteId.D, ChordId.Dom7, 8]
            ]
        }
    ]
}
