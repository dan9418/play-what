import { MODEL_ID } from "@pw/core/src/models/helpers/Model.constants";
import { INTERVAL_CHORD } from "@pw/core/src/models/IntervalChord.constants";
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
						intervals: INTERVAL_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.Bb.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.Eb.value,
						intervals: INTERVAL_CHORD.Dom7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.G.value,
						intervals: INTERVAL_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.B.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.E.value,
						intervals: INTERVAL_CHORD.Dom7b9.value,
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
						intervals: INTERVAL_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.E.value,
						intervals: INTERVAL_CHORD.Dom7b9.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.A.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.Eb.value,
						intervals: INTERVAL_CHORD.Dom7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.Bb.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.D.value,
						intervals: INTERVAL_CHORD.Dom7b9.value,
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
						intervals: INTERVAL_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.Bb.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.Eb.value,
						intervals: INTERVAL_CHORD.Dom7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.G.value,
						intervals: INTERVAL_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.B.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.E.value,
						intervals: INTERVAL_CHORD.Dom7b9.value,
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
						intervals: INTERVAL_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.E.value,
						intervals: INTERVAL_CHORD.Dom7b9.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.A.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.C.value,
						intervals: INTERVAL_CHORD.Min6.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.B.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.Bb.value,
						intervals: INTERVAL_CHORD.HalfDim7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.A.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.D.value,
						intervals: INTERVAL_CHORD.Dom7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.G.value,
						intervals: INTERVAL_CHORD.Maj6.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.A.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.Chord,
					modelConfig: {
						root: NOTE.D.value,
						intervals: INTERVAL_CHORD.Dom7.value,
						t: 4
					}
				}
			]
		}
	]
};
