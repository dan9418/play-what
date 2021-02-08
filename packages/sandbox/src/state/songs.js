import { CHORD, NOTE } from "@pw/core/src/Pod.presets";
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
						intervals: CHORD.Maj7.value
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
			name: 'A',
			modelId: MODEL_ID.Group,
			modelConfig: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.G.value,
						intervals: CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.Bb.value,
						intervals: CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.Eb.value,
						intervals: CHORD.Dom7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.G.value,
						intervals: CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.B.value,
						intervals: CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.E.value,
						intervals: CHORD.Dom7b9.value,
						t: 4
					}
				}
			]
		},
		{
			id: 'B',
			name: 'B',
			modelId: MODEL_ID.Group,
			modelConfig: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.A.value,
						intervals: CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.E.value,
						intervals: CHORD.Dom7b9.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.A.value,
						intervals: CHORD.Min7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.Eb.value,
						intervals: CHORD.Dom7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.Bb.value,
						intervals: CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.D.value,
						intervals: CHORD.Dom7b9.value,
						t: 8
					}
				}
			]
		},
		{
			id: 'A\'',
			name: 'A',
			modelId: MODEL_ID.Group,
			modelConfig: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.G.value,
						intervals: CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.Bb.value,
						intervals: CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.Eb.value,
						intervals: CHORD.Dom7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.G.value,
						intervals: CHORD.Maj7.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.B.value,
						intervals: CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.E.value,
						intervals: CHORD.Dom7b9.value,
						t: 4
					}
				}
			]
		},
		{
			id: 'C',
			name: 'C',
			modelId: MODEL_ID.Group,
			modelConfig: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.A.value,
						intervals: CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.E.value,
						intervals: CHORD.Dom7b9.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.A.value,
						intervals: CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.C.value,
						intervals: CHORD.Min6.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.B.value,
						intervals: CHORD.Min7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.Bb.value,
						intervals: CHORD.HalfDim7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.A.value,
						intervals: CHORD.Min7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.D.value,
						intervals: CHORD.Dom7.value,
						t: 2
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.G.value,
						intervals: CHORD.Maj6.value,
						t: 8
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.A.value,
						intervals: CHORD.Min7.value,
						t: 4
					}
				},
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.D.value,
						intervals: CHORD.Dom7.value,
						t: 4
					}
				}
			]
		}
	]
};
