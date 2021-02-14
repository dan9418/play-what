import { MODEL_ID } from "@pw/core/src/models/helpers/Model.constants";
import { RELATIVE_CHORD } from "@pw/core/src/models/RelativeChord.constants";
import { NOTE } from "@pw/core/src/models/Note.constants";

export const OUT_OF_NOWHERE = {
	id: 'outOfNowhere',
	name: 'Out of Nowhere',
	modelId: MODEL_ID.Group,
	modelConfig: [
		{
			id: 'A',
			name: 'Section A',
			modelId: MODEL_ID.Group,
			modelConfig: [
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.Bb.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.Eb.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.B.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.E.value,
						intervals: RELATIVE_CHORD.Dom7b9.value,
						t: 4
					}
				}
			]
		},
		{
			id: 'B',
			name: 'Section B',
			modelId: MODEL_ID.Group,
			modelConfig: [
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.E.value,
						intervals: RELATIVE_CHORD.Dom7b9.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.Eb.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.Bb.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.D.value,
						intervals: RELATIVE_CHORD.Dom7b9.value,
						t: 8
					}
				}
			]
		},
		{
			id: 'A\'',
			name: 'Section A',
			modelId: MODEL_ID.Group,
			modelConfig: [
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.Bb.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.Eb.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.B.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.E.value,
						intervals: RELATIVE_CHORD.Dom7b9.value,
						t: 4
					}
				}
			]
		},
		{
			id: 'C',
			name: 'Section C',
			modelId: MODEL_ID.Group,
			modelConfig: [
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.E.value,
						intervals: RELATIVE_CHORD.Dom7b9.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.C.value,
						intervals: RELATIVE_CHORD.Min6.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.B.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.Bb.value,
						intervals: RELATIVE_CHORD.HalfDim7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.D.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.G.value,
						intervals: RELATIVE_CHORD.Maj6.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.A.value,
						intervals: RELATIVE_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.D.value,
						intervals: RELATIVE_CHORD.Dom7.value,
						t: 4
					}
				}
			]
		}
	]
};
