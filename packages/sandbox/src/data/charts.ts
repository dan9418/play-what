import { MODEL_ID } from "@pw/core/src/models/Model.constants";
import { NOTE } from "@pw/core/src/models/Pod/Note/Note.constants";
import { RELATIVE_CHORD } from "@pw/core/src/models/PodList/Chord/RelativeChord/RelativeChord.constants";

export const OUT_OF_NOWHERE = {
	modelId: MODEL_ID.Group,
	modelOptions: {
		name: 'Out of Nowhere',
	},
	modelValue: [
		{
			modelId: MODEL_ID.Group,
			modelOptions: {
				name: 'Section A',
			},
			modelValue: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj7.value,
					modelOptions: {
						modelRoot: NOTE.G.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.Bb.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.Eb.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj7.value,
					modelOptions: {
						modelRoot: NOTE.G.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.B.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7b9.value,
					modelOptions: {
						modelRoot: NOTE.E.value,
						t: 4
					}
				}
			]
		},
		{
			modelId: MODEL_ID.Group,
			modelOptions: {
				name: 'Section B',
			},
			modelValue: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.A.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7b9.value,
					modelOptions: {
						modelRoot: NOTE.E.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.A.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.Eb.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.Bb.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7b9.value,
					modelOptions: {
						modelRoot: NOTE.D.value,
						t: 8
					}
				}
			]
		},
		{
			modelId: MODEL_ID.Group,
			modelOptions: {
				name: 'Section A',
			},
			modelValue: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj7.value,
					modelOptions: {
						modelRoot: NOTE.G.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.Bb.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.Eb.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj7.value,
					modelOptions: {
						modelRoot: NOTE.G.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.B.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7b9.value,
					modelOptions: {
						modelRoot: NOTE.E.value,
						t: 4
					}
				}
			]
		},
		{
			modelId: MODEL_ID.Group,
			modelOptions: {
				name: 'Section C',
			},
			modelValue: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.A.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7b9.value,
					modelOptions: {
						modelRoot: NOTE.E.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.A.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min6.value,
					modelOptions: {
						modelRoot: NOTE.C.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.B.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.HalfDim7.value,
					modelOptions: {
						modelRoot: NOTE.Bb.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.A.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.D.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj6.value,
					modelOptions: {
						modelRoot: NOTE.G.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.A.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,
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
	modelId: MODEL_ID.Group,
	modelOptions: {
		name: 'All of Me'
	},
	modelValue: [
		{
			modelId: MODEL_ID.Group,
			modelOptions: {
				name: 'Section A'
			},
			modelValue: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj6.value,
					modelOptions: {
						modelRoot: NOTE.C.value,
						t: 16
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.E.value,
						t: 16
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.A.value,
						t: 16
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.D.value,
						t: 16
					}
				}
			]
		},
		{
			modelId: MODEL_ID.Group,
			modelOptions: {
				name: 'Section B'
			},
			modelValue: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.E.value,
						t: 16
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.A.value,
						t: 16
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.D.value,
						t: 16
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.D.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.G.value,
						t: 8
					}
				}
			]
		},
		{
			modelId: MODEL_ID.Group,
			modelOptions: {
				name: 'Section A\'',
			},
			modelValue: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj6.value,
					modelOptions: {
						modelRoot: NOTE.C.value,
						t: 16
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.E.value,
						t: 16
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.A.value,
						t: 16
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.C.value,
						t: 16
					}
				}
			]
		},
		{
			modelId: MODEL_ID.Group,
			modelOptions: {
				name: 'Section C',
			},
			modelValue: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj6.value,
					modelOptions: {
						modelRoot: NOTE.F.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min6.value,
					modelOptions: {
						modelRoot: NOTE.F.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj7.value,
					modelOptions: {
						modelRoot: NOTE.C.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.A.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,
					modelOptions: {
						modelRoot: NOTE.D.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,
					modelOptions: {
						modelRoot: NOTE.G.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj6.value,
					modelOptions: {
						modelRoot: NOTE.C.value,
						t: 16
					}
				}
			]
		}
	]
};

export const CHART_VALUES = [
	OUT_OF_NOWHERE,
	ALL_OF_ME
];
