import { ModelId } from "@pw/core/src/models/Model.constants";
import { NOTE } from "@pw/core/src/models/Pod/Note/Note.constants";
import { CHORD } from "@pw/core/src/models/PodList/Chord/Chord.constants";

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

export const ALL_OF_ME = {
	modelId: ModelId.Group,
	modelOptions: {
		name: 'All of Me'
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
					modelValue: CHORD.Maj6.value,
					modelOptions: {
						modelRoot: NOTE.C.value,
						t: 16
					}
				},
				{
					modelId: ModelId.Chord,
					modelValue: CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.E.value,
						t: 16
					}
				},
				{
					modelId: ModelId.Chord,
					modelValue: CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.A.value,
						t: 16
					}
				},
				{
					modelId: ModelId.Chord,
					modelValue: CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.D.value,
						t: 16
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
					modelValue: CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.E.value,
						t: 16
					}
				},
				{
					modelId: ModelId.Chord,
					modelValue: CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.A.value,
						t: 16
					}
				},
				{
					modelId: ModelId.Chord,
					modelValue: CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.D.value,
						t: 16
					}
				},
				{
					modelId: ModelId.Chord,
					modelValue: CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.D.value,
						t: 8
					}
				},
				{
					modelId: ModelId.Chord,
					modelValue: CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.G.value,
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
					modelValue: CHORD.Maj6.value,
					modelOptions: {
						modelRoot: NOTE.C.value,
						t: 16
					}
				},
				{
					modelId: ModelId.Chord,
					modelValue: CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.E.value,
						t: 16
					}
				},
				{
					modelId: ModelId.Chord,
					modelValue: CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.A.value,
						t: 16
					}
				},
				{
					modelId: ModelId.Chord,
					modelValue: CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.C.value,
						t: 16
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
					modelValue: CHORD.Maj6.value,
					modelOptions: {
						modelRoot: NOTE.F.value,
						t: 8
					}
				},
				{
					modelId: ModelId.Chord,
					modelValue: CHORD.Min6.value,
					modelOptions: {
						modelRoot: NOTE.F.value,
						t: 8
					}
				},
				{
					modelId: ModelId.Chord,
					modelValue: CHORD.Maj7.value,
					modelOptions: {
						modelRoot: NOTE.C.value,
						t: 8
					}
				},
				{
					modelId: ModelId.Chord,
					modelValue: CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.A.value,
						t: 8
					}
				},
				{
					modelId: ModelId.Chord,
					modelValue: CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.D.value,
						t: 8
					}
				},
				{
					modelId: ModelId.Chord,
					modelValue: CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.G.value,
						t: 8
					}
				},
				{
					modelId: ModelId.Chord,
					modelValue: CHORD.Maj6.value,
					modelOptions: {
						modelRoot: NOTE.C.value,
						t: 16
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


export const CHART_VALUES = [
	OUT_OF_NOWHERE,
	ALL_OF_ME,
	IT_COULD_HAPPEN_TO_YOU
];
