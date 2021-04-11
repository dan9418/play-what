import { IModelValue, ModelId } from "@pw/core/src/models/Model.constants";
import { NOTE } from "@pw/core/src/models/Pod/Note/Note.constants";
import { CHORD } from "@pw/core/src/models/PodList/Chord/Chord.constants";

type ISectionChord = [rootId: string, chordId: string, t: number];

interface ISectionConfig {
    name: string;
    models: ISectionChord[]
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
            models: [
                ['C', 'Maj6', 16],
                ['E', 'Dom7', 16],
                ['A', 'Dom7', 16],
                ['D', 'Min7', 16]
            ]
        },
        {
            name: 'B',
            models: [
                ['E', 'Dom7', 16],
                ['A', 'Min7', 16],
                ['D', 'Dom7', 16],
                ['D', 'Min7', 8],
                ['G', 'Dom7', 8]
            ]
        },
        {
            name: 'A\'',
            models: [
                ['C', 'Maj6', 16],
                ['E', 'Dom7', 16],
                ['A', 'Dom7', 16],
                ['D', 'Min7', 16]
            ]
        },
        {
            name: 'C',
            models: [
                ['C', 'Maj6', 8],
                ['F', 'Min6', 8],
                ['C', 'Maj7', 8],
                ['A', 'Dom7', 8],
                ['D', 'Min7', 8],
                ['G', 'Dom7', 8],
                ['C', 'Maj7', 8]
            ]
        }
    ]
}

/*
export const OUT_OF_NOWHERE = {
    modelId: ModelId.Group,
    modelOptions: {
        name: 'Out of Nowhere'
    },
    modelValue: [
        {
            modelId: ModelId.Group,
            modelOptions: {
                name: 'Section A'
            },
            modelValue: [
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Maj7.value,
                    modelOptions: {
                        modelRoot: NOTE.G.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.Bb.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7.value,
                    modelOptions: {
                        modelRoot: NOTE.Eb.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Maj7.value,
                    modelOptions: {
                        modelRoot: NOTE.G.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.B.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7b9.value,
                    modelOptions: {
                        modelRoot: NOTE.E.value,
                        t: 4
                    }
                }
            ]
        },
        {
            modelId: ModelId.Group,
            modelOptions: {
                name: 'Section B'
            },
            modelValue: [
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.A.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7b9.value,
                    modelOptions: {
                        modelRoot: NOTE.E.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.A.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7.value,
                    modelOptions: {
                        modelRoot: NOTE.Eb.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.Bb.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7b9.value,
                    modelOptions: {
                        modelRoot: NOTE.D.value,
                        t: 8
                    }
                }
            ]
        },
        {
            modelId: ModelId.Group,
            modelOptions: {
                name: 'Section A'
            },
            modelValue: [
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Maj7.value,
                    modelOptions: {
                        modelRoot: NOTE.G.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.Bb.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7.value,
                    modelOptions: {
                        modelRoot: NOTE.Eb.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Maj7.value,
                    modelOptions: {
                        modelRoot: NOTE.G.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.B.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7b9.value,
                    modelOptions: {
                        modelRoot: NOTE.E.value,
                        t: 4
                    }
                }
            ]
        },
        {
            modelId: ModelId.Group,
            modelOptions: {
                name: 'Section C'
            },
            modelValue: [
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.A.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7b9.value,
                    modelOptions: {
                        modelRoot: NOTE.E.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.A.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min6.value,
                    modelOptions: {
                        modelRoot: NOTE.C.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.B.value,
                        t: 2
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.HalfDim7.value,
                    modelOptions: {
                        modelRoot: NOTE.Bb.value,
                        t: 2
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.A.value,
                        t: 2
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7.value,
                    modelOptions: {
                        modelRoot: NOTE.D.value,
                        t: 2
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Maj6.value,
                    modelOptions: {
                        modelRoot: NOTE.G.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.A.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7.value,
                    modelOptions: {
                        modelRoot: NOTE.D.value,
                        t: 4
                    }
                }
            ]
        }
    ]
};

export const IT_COULD_HAPPEN_TO_YOU = {
    modelId: ModelId.Group,
    modelOptions: {
        name: 'It Could Happen To You'
    },
    modelValue: [
        {
            modelId: ModelId.Group,
            modelOptions: {
                name: 'Section A'
            },
            modelValue: [
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Maj7.value,
                    modelOptions: {
                        modelRoot: NOTE.Eb.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.HalfDim7.value,
                    modelOptions: {
                        modelRoot: NOTE.G.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7b9.value,
                    modelOptions: {
                        modelRoot: NOTE.Eb.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.F.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.HalfDim7.value,
                    modelOptions: {
                        modelRoot: NOTE.A.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7b9.value,
                    modelOptions: {
                        modelRoot: NOTE.D.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Maj7.value,
                    modelOptions: {
                        modelRoot: NOTE.Eb.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7.value,
                    modelOptions: {
                        modelRoot: NOTE.Ab.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.HalfDim7.value,
                    modelOptions: {
                        modelRoot: NOTE.G.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7b9.value,
                    modelOptions: {
                        modelRoot: NOTE.C.value,
                        t: 8
                    }
                }
            ]
        },
        {
            modelId: ModelId.Group,
            modelOptions: {
                name: 'Section B'
            },
            modelValue: [
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.F.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min6.value,
                    modelOptions: {
                        modelRoot: NOTE.Ab.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Maj7.value,
                    modelOptions: {
                        modelRoot: NOTE.Eb.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.HalfDim7.value,
                    modelOptions: {
                        modelRoot: NOTE.D.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7b9.value,
                    modelOptions: {
                        modelRoot: NOTE.G.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.C.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7.value,
                    modelOptions: {
                        modelRoot: NOTE.F.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.F.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7.value,
                    modelOptions: {
                        modelRoot: NOTE.Bb.value,
                        t: 8
                    }
                }
            ]
        },
        {
            modelId: ModelId.Group,
            modelOptions: {
                name: 'Section A\''
            },
            modelValue: [
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Maj7.value,
                    modelOptions: {
                        modelRoot: NOTE.Eb.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.HalfDim7.value,
                    modelOptions: {
                        modelRoot: NOTE.G.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7b9.value,
                    modelOptions: {
                        modelRoot: NOTE.Eb.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.F.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.HalfDim7.value,
                    modelOptions: {
                        modelRoot: NOTE.A.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7b9.value,
                    modelOptions: {
                        modelRoot: NOTE.D.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Maj7.value,
                    modelOptions: {
                        modelRoot: NOTE.Eb.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7.value,
                    modelOptions: {
                        modelRoot: NOTE.Ab.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.HalfDim7.value,
                    modelOptions: {
                        modelRoot: NOTE.G.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7b9.value,
                    modelOptions: {
                        modelRoot: NOTE.C.value,
                        t: 8
                    }
                }
            ]
        },
        {
            modelId: ModelId.Group,
            modelOptions: {
                name: 'Section C'
            },
            modelValue: [
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.F.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min6.value,
                    modelOptions: {
                        modelRoot: NOTE.Ab.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Maj7.value,
                    modelOptions: {
                        modelRoot: NOTE.Eb.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7.value,
                    modelOptions: {
                        modelRoot: NOTE.Ab.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.HalfDim7.value,
                    modelOptions: {
                        modelRoot: NOTE.G.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7b9.value,
                    modelOptions: {
                        modelRoot: NOTE.C.value,
                        t: 4
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Min7.value,
                    modelOptions: {
                        modelRoot: NOTE.F.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Dom7.value,
                    modelOptions: {
                        modelRoot: NOTE.Bb.value,
                        t: 8
                    }
                },
                {
                    modelId: ModelId.Chord,
                    modelValue: CHORD.Maj7.value,
                    modelOptions: {
                        modelRoot: NOTE.Eb.value,
                        t: 16
                    }
                }
            ]
        }
    ]
};
*/
