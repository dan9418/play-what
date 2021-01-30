import { CHORD, NOTE, SCALE } from "@pw/core/src/Pod.presets";

export const TEST_SONG = {
	id: 'test',
	name: 'test',
	sections: [
		{
			id: 'A',
			name: 'A',
			blocks: [
				{
					keyCenter: NOTE.A.value,
					intervals: SCALE.Major.value,
					t: 4
				},
				{
					keyCenter: NOTE.B.value,
					intervals: SCALE.Major.value,
					t: 4
				},
				{
					keyCenter: NOTE.C.value,
					intervals: SCALE.Major.value,
					t: 4
				},
				{
					keyCenter: NOTE.D.value,
					intervals: SCALE.Major.value,
					t: 4
				}
			]
		},
		{
			id: 'B',
			name: 'B',
			blocks: [
				{
					keyCenter: NOTE.A.value,
					intervals: CHORD.Maj.value,
					t: 4
				},
				{
					keyCenter: NOTE.B.value,
					intervals: CHORD.Maj.value,
					t: 4
				},
				{
					keyCenter: NOTE.C.value,
					intervals: CHORD.Maj.value,
					t: 8
				}
			]
		}
	]
};

export const OUT_OF_NOWHERE = {
	id: 'outOfNowhere',
	name: 'Out of Nowhere',
	sections: [
		{
			id: 'A',
			name: 'A',
			blocks: [
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
			blocks: [
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
			blocks: [
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
			blocks: [
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

const SONGS = {
	test: TEST_SONG,
	outOfNowhere: OUT_OF_NOWHERE
};

export default SONGS;
