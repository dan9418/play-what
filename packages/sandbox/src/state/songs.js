import { CHORD, NOTE } from "@pw/core/src/Pod.presets";
import { MODEL_ID } from "../components/core/MODEL";

export const TEST_SONG = {
	path: [{
		name: 'Test',
		pathId: 'test',
		modelId: MODEL_ID.RelativeChord
	}],
	data: {
		keyCenter: NOTE.G.value,
		intervals: CHORD.Maj7.value
	}
};

/*export const TEST_SONG = {
	id: 'test',
	name: 'Test',
	items: [
		{
			id: 'A',
			name: 'A',
			items: [
				{
					modelId: MODEL_ID.RelativeChord,
					modelConfig: {
						keyCenter: NOTE.G.value,
						intervals: CHORD.Maj7.value
					},
					t: 8
				}
			]
		}
	]
};*/

export const OUT_OF_NOWHERE = {
	id: 'outOfNowhere',
	name: 'Out of Nowhere',
	items: [
		{
			id: 'A',
			name: 'A',
			items: [
				{
					keyCenter: NOTE.G.value,
					intervals: CHORD.Maj7.value,
					t: 8
				},
				{
					keyCenter: NOTE.Bb.value,
					intervals: CHORD.Min7.value,
					t: 4
				},
				{
					keyCenter: NOTE.Eb.value,
					intervals: CHORD.Dom7.value,
					t: 4
				},
				{
					keyCenter: NOTE.G.value,
					intervals: CHORD.Maj7.value,
					t: 8
				},
				{
					keyCenter: NOTE.B.value,
					intervals: CHORD.Min7.value,
					t: 4
				},
				{
					keyCenter: NOTE.E.value,
					intervals: CHORD.Dom7b9.value,
					t: 4
				}
			]
		},
		{
			id: 'B',
			name: 'B',
			items: [
				{
					keyCenter: NOTE.A.value,
					intervals: CHORD.Min7.value,
					t: 4
				},
				{
					keyCenter: NOTE.E.value,
					intervals: CHORD.Dom7b9.value,
					t: 4
				},
				{
					keyCenter: NOTE.A.value,
					intervals: CHORD.Min7.value,
					t: 8
				},
				{
					keyCenter: NOTE.Eb.value,
					intervals: CHORD.Dom7.value,
					t: 8
				},
				{
					keyCenter: NOTE.Bb.value,
					intervals: CHORD.Min7.value,
					t: 4
				},
				{
					keyCenter: NOTE.D.value,
					intervals: CHORD.Dom7b9.value,
					t: 8
				}
			]
		},
		{
			id: 'A\'',
			name: 'A',
			items: [
				{
					keyCenter: NOTE.G.value,
					intervals: CHORD.Maj7.value,
					t: 8
				},
				{
					keyCenter: NOTE.Bb.value,
					intervals: CHORD.Min7.value,
					t: 4
				},
				{
					keyCenter: NOTE.Eb.value,
					intervals: CHORD.Dom7.value,
					t: 4
				},
				{
					keyCenter: NOTE.G.value,
					intervals: CHORD.Maj7.value,
					t: 8
				},
				{
					keyCenter: NOTE.B.value,
					intervals: CHORD.Min7.value,
					t: 4
				},
				{
					keyCenter: NOTE.E.value,
					intervals: CHORD.Dom7b9.value,
					t: 4
				}
			]
		},
		{
			id: 'C',
			name: 'C',
			items: [
				{
					keyCenter: NOTE.A.value,
					intervals: CHORD.Min7.value,
					t: 4
				},
				{
					keyCenter: NOTE.E.value,
					intervals: CHORD.Dom7b9.value,
					t: 4
				},
				{
					keyCenter: NOTE.A.value,
					intervals: CHORD.Min7.value,
					t: 4
				},
				{
					keyCenter: NOTE.C.value,
					intervals: CHORD.Min6.value,
					t: 4
				},
				{
					keyCenter: NOTE.B.value,
					intervals: CHORD.Min7.value,
					t: 2
				},
				{
					keyCenter: NOTE.Bb.value,
					intervals: CHORD.HalfDim7.value,
					t: 2
				},
				{
					keyCenter: NOTE.A.value,
					intervals: CHORD.Min7.value,
					t: 2
				},
				{
					keyCenter: NOTE.D.value,
					intervals: CHORD.Dom7.value,
					t: 2
				},
				{
					keyCenter: NOTE.G.value,
					intervals: CHORD.Maj6.value,
					t: 8
				},
				{
					keyCenter: NOTE.A.value,
					intervals: CHORD.Min7.value,
					t: 4
				},
				{
					keyCenter: NOTE.D.value,
					intervals: CHORD.Dom7.value,
					t: 4
				}
			]
		}
	]
};
