import { MODEL_ID } from "@pw/core/src/models/Model.constants";
import { NOTE } from "@pw/core/src/models/Pod/Note/Note.constants";
import { RELATIVE_CHORD } from "@pw/core/src/models/PodList/Chord/RelativeChord/RelativeChord.constants";

export const OUT_OF_NOWHERE = {
	id: 'outOfNowhere',
	name: 'Out of Nowhere',
	modelId: MODEL_ID.Group,
	modelValue: [
		{
			name: 'Section A',
			modelId: MODEL_ID.Group,
			modelValue: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj7.value,

					root: NOTE.G.value,
					t: 8

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,

					root: NOTE.Bb.value,
					t: 4

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,

					root: NOTE.Eb.value,
					t: 4

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj7.value,

					root: NOTE.G.value,
					t: 8

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,

					root: NOTE.B.value,
					t: 4

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7b9.value,

					root: NOTE.E.value,
					t: 4

				}
			]
		},
		{
			name: 'Section B',
			modelId: MODEL_ID.Group,
			modelValue: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,

					root: NOTE.A.value,
					t: 4

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7b9.value,

					root: NOTE.E.value,
					t: 4

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,

					root: NOTE.A.value,
					t: 8

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,

					root: NOTE.Eb.value,
					t: 8

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,

					root: NOTE.Bb.value,
					t: 4

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7b9.value,

					root: NOTE.D.value,
					t: 8

				}
			]
		},
		{
			name: 'Section A',
			modelId: MODEL_ID.Group,
			modelValue: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj7.value,

					root: NOTE.G.value,
					t: 8

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,

					root: NOTE.Bb.value,
					t: 4

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,

					root: NOTE.Eb.value,
					t: 4

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj7.value,

					root: NOTE.G.value,
					t: 8

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,

					root: NOTE.B.value,
					t: 4

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7b9.value,

					root: NOTE.E.value,
					t: 4

				}
			]
		},
		{
			name: 'Section C',
			modelId: MODEL_ID.Group,
			modelValue: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,

					root: NOTE.A.value,
					t: 4

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7b9.value,

					root: NOTE.E.value,
					t: 4

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,

					root: NOTE.A.value,
					t: 4

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min6.value,

					root: NOTE.C.value,
					t: 4

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,

					root: NOTE.B.value,
					t: 2

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.HalfDim7.value,

					root: NOTE.Bb.value,
					t: 2

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,

					root: NOTE.A.value,
					t: 2

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,

					root: NOTE.D.value,
					t: 2

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj6.value,

					root: NOTE.G.value,
					t: 8

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,

					root: NOTE.A.value,
					t: 4

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,

					root: NOTE.D.value,
					t: 4

				}
			]
		}
	]
};

export const ALL_OF_ME = {
	id: 'allOfMe',
	name: 'All of Me',
	modelId: MODEL_ID.Group,
	modelValue: [
		{
			name: 'Section A',
			modelId: MODEL_ID.Group,
			modelValue: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj6.value,

					root: NOTE.C.value,
					t: 16

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,

					root: NOTE.E.value,
					t: 16

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,

					root: NOTE.A.value,
					t: 16

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,

					root: NOTE.D.value,
					t: 16

				}
			]
		},
		{
			name: 'Section B',
			modelId: MODEL_ID.Group,
			modelValue: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,

					root: NOTE.E.value,
					t: 16

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,

					root: NOTE.A.value,
					t: 16

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,

					root: NOTE.D.value,
					t: 16

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,

					root: NOTE.D.value,
					t: 8

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,

					root: NOTE.G.value,
					t: 8

				}
			]
		},
		{
			name: 'Section A\'',
			modelId: MODEL_ID.Group,
			modelValue: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj6.value,

					root: NOTE.C.value,
					t: 16

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,

					root: NOTE.E.value,
					t: 16

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,

					root: NOTE.A.value,
					t: 16

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,

					root: NOTE.C.value,
					t: 16

				}
			]
		},
		{
			name: 'Section C',
			modelId: MODEL_ID.Group,
			modelValue: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj6.value,

					root: NOTE.F.value,
					t: 8

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min6.value,

					root: NOTE.F.value,
					t: 8

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj7.value,

					root: NOTE.C.value,
					t: 8

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,

					root: NOTE.A.value,
					t: 8

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Min7.value,

					root: NOTE.D.value,
					t: 8

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Dom7.value,

					root: NOTE.G.value,
					t: 8

				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelValue: RELATIVE_CHORD.Maj6.value,

					root: NOTE.C.value,
					t: 16

				}
			]
		}
	]

};


const CHART_VALUES = [
	OUT_OF_NOWHERE,
	ALL_OF_ME
]

export default CHART_VALUES;
