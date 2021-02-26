import { MODEL_ID } from "@pw/core/src/models/helpers/Model.constants";
import { RELATIVE_CHORD } from "@pw/core/src/models/RelativeChord.constants";
import { NOTE } from "@pw/core/src/models/Note.constants";

export const OUT_OF_NOWHERE = {
	id: 'outOfNowhere',
	name: 'Out of Nowhere',
	modelId: MODEL_ID.Group,
	modelData: [
		{
			name: 'Section A',
			modelId: MODEL_ID.Group,
			modelData: [
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.Bb.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.Eb.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.B.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.E.value,
						intervals: RELATIVE_CHORD.Dom7b9.value,
						t: 4
					}
				}
			]
		},
		{
			name: 'Section B',
			modelId: MODEL_ID.Group,
			modelData: [
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.E.value,
						intervals: RELATIVE_CHORD.Dom7b9.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.Eb.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.Bb.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.D.value,
						intervals: RELATIVE_CHORD.Dom7b9.value,
						t: 8
					}
				}
			]
		},
		{
			name: 'Section A',
			modelId: MODEL_ID.Group,
			modelData: [
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.Bb.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.Eb.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.B.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.E.value,
						intervals: RELATIVE_CHORD.Dom7b9.value,
						t: 4
					}
				}
			]
		},
		{
			name: 'Section C',
			modelId: MODEL_ID.Group,
			modelData: [
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.E.value,
						intervals: RELATIVE_CHORD.Dom7b9.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.C.value,
						intervals: RELATIVE_CHORD.Min6.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.B.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.Bb.value,
						intervals: RELATIVE_CHORD.HalfDim7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.D.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Maj6.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.D.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 4
					}
				}
			]
		}
	]
};

export const ALL_OF_ME = {
	id: 'allOfMe',
	name: 'All of Me',
	modelId: MODEL_ID.Group,
	modelData: [
		{
			name: 'Section A',
			modelId: MODEL_ID.Group,
			modelData: [
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.C.value,
						intervals: RELATIVE_CHORD.Maj6.value,
						t: 16
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.E.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 16
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 16
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.D.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 16
					}
				}
			]
		},
		{
			name: 'Section B',
			modelId: MODEL_ID.Group,
			modelData: [
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.E.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 16
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 16
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.D.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 16
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.D.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 8
					}
				}
			]
		},
		{
			name: 'Section A\'',
			modelId: MODEL_ID.Group,
			modelData: [
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.C.value,
						intervals: RELATIVE_CHORD.Maj6.value,
						t: 16
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.E.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 16
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 16
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.C.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 16
					}
				}
			]
		},
		{
			name: 'Section C',
			modelId: MODEL_ID.Group,
			modelData: [
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.F.value,
						intervals: RELATIVE_CHORD.Maj6.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.F.value,
						intervals: RELATIVE_CHORD.Min6.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.C.value,
						intervals: RELATIVE_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.D.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelData: {
						root: NOTE.C.value,
						intervals: RELATIVE_CHORD.Maj6.value,
						t: 16
					}
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
