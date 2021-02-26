import { MODEL_ID } from "@pw/core/src/models/helpers/Model.constants";
import { RELATIVE_CHORD } from "@pw/core/src/models/RelativeChord.constants";
import { NOTE } from "@pw/core/src/models/Note.constants";

export const OUT_OF_NOWHERE = {
	id: 'outOfNowhere',
	name: 'Out of Nowhere',
	childModelId: MODEL_ID.Group,
	modelData: [
		{
			pathId: 'A',
			name: 'Section A',
			childModelId: MODEL_ID.Group,
			childData: [
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.Bb.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.Eb.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 4
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.B.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.E.value,
						intervals: RELATIVE_CHORD.Dom7b9.value,
						t: 4
					}
				}
			]
		},
		{
			pathId: 'B',
			name: 'Section B',
			childModelId: MODEL_ID.Group,
			childData: [
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.E.value,
						intervals: RELATIVE_CHORD.Dom7b9.value,
						t: 4
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 8
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.Eb.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 8
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.Bb.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.D.value,
						intervals: RELATIVE_CHORD.Dom7b9.value,
						t: 8
					}
				}
			]
		},
		{
			pathId: 'A\'',
			name: 'Section A',
			childModelId: MODEL_ID.Group,
			childData: [
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.Bb.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.Eb.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 4
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.B.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.E.value,
						intervals: RELATIVE_CHORD.Dom7b9.value,
						t: 4
					}
				}
			]
		},
		{
			pathId: 'C',
			name: 'Section C',
			childModelId: MODEL_ID.Group,
			childData: [
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.E.value,
						intervals: RELATIVE_CHORD.Dom7b9.value,
						t: 4
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.C.value,
						intervals: RELATIVE_CHORD.Min6.value,
						t: 4
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.B.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 2
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.Bb.value,
						intervals: RELATIVE_CHORD.HalfDim7.value,
						t: 2
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 2
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.D.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 2
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Maj6.value,
						t: 8
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
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
	childModelId: MODEL_ID.Group,
	modelData: [
		{
			pathId: 'A',
			name: 'Section A',
			childModelId: MODEL_ID.Group,
			childData: [
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.C.value,
						intervals: RELATIVE_CHORD.Maj6.value,
						t: 16
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.E.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 16
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 16
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.D.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 16
					}
				}
			]
		},
		{
			pathId: 'B',
			name: 'Section B',
			childModelId: MODEL_ID.Group,
			childData: [
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.E.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 16
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 16
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.D.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 16
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.D.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 8
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 8
					}
				}
			]
		},
		{
			pathId: 'A\'',
			name: 'Section A\'',
			childModelId: MODEL_ID.Group,
			childData: [
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.C.value,
						intervals: RELATIVE_CHORD.Maj6.value,
						t: 16
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.E.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 16
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 16
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.C.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 16
					}
				}
			]
		},
		{
			pathId: 'C',
			name: 'Section C',
			childModelId: MODEL_ID.Group,
			childData: [
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.F.value,
						intervals: RELATIVE_CHORD.Maj6.value,
						t: 8
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.F.value,
						intervals: RELATIVE_CHORD.Min6.value,
						t: 8
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.C.value,
						intervals: RELATIVE_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 8
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.D.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 8
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 8
					}
				},
				{
					childModelId: MODEL_ID.Chord,
					childData: {
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
