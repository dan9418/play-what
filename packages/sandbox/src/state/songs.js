import { CHORD, NOTE } from "@pw/core/src/Pod.presets";

export const OUT_OF_NOWHERE = {
	id: 'outOfNowhere',
	name: 'Out of Nowhere',
	sections: [
		{
			id: 'A1',
			name: 'A',
			concepts: [
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
			concepts: [
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
			id: 'A2',
			name: 'A',
			concepts: [
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
			concepts: [
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
