import { NOTE } from "@pw/core/src/models/Note.constants";
import { INTERVAL_CHORD } from "@pw/core/src/models/IntervalChord.constants";
import { MODEL_ID } from "../components/core/MODEL";

export const TEST_SONG = {
	name: 'Test',
	modelId: MODEL_ID.Group,
	modelConfig: [
		{
			name: 'Test Section A',
			modelId: MODEL_ID.Group,
			modelConfig: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.G.value,
						intervals: INTERVAL_CHORD.Maj7.value
					}
				}
			]
		}
	]
};

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
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.G.value,
						intervals: INTERVAL_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.Bb.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.Eb.value,
						intervals: INTERVAL_CHORD.Dom7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.G.value,
						intervals: INTERVAL_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.B.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.E.value,
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
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.A.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.E.value,
						intervals: INTERVAL_CHORD.Dom7b9.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.A.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.Eb.value,
						intervals: INTERVAL_CHORD.Dom7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.Bb.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.D.value,
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
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.G.value,
						intervals: INTERVAL_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.Bb.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.Eb.value,
						intervals: INTERVAL_CHORD.Dom7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.G.value,
						intervals: INTERVAL_CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.B.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.E.value,
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
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.A.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.E.value,
						intervals: INTERVAL_CHORD.Dom7b9.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.A.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.C.value,
						intervals: INTERVAL_CHORD.Min6.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.B.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.Bb.value,
						intervals: INTERVAL_CHORD.HalfDim7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.A.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.D.value,
						intervals: INTERVAL_CHORD.Dom7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.G.value,
						intervals: INTERVAL_CHORD.Maj6.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.A.value,
						intervals: INTERVAL_CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.D.value,
						intervals: INTERVAL_CHORD.Dom7.value,
						t: 4
					}
				}
			]
		}
	]
};
