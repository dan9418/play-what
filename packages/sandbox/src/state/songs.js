import { CHORD, NOTE, SCALE } from "@pw/core/src/Pod.presets";

export const TEST_SONG = {
	id: 'test',
	type: 'group',
	subType: null,
	data: [
		{
			id: 'A',
			type: 'group',
			subType: null,
			data: [
				{
					keyCenter: NOTE.A.value,
					intervals: SCALE.Major.value,
					t: 8
				},
				{
					keyCenter: NOTE.B.value,
					intervals: SCALE.Major.value,
					t: 8
				}
			]
		},
		{
			id: 'B',
			type: 'block',
			subType: null,
			data: {
				keyCenter: NOTE.A.value,
				intervals: SCALE.Major.value,
				t: 8
			}
		},
		{
			id: 'C',
			type: 'podList',
			subType: 'scale',
			data: SCALE.Major.value

		},
		{
			id: 'C',
			type: 'pod',
			subType: 'note',
			data: NOTE.A.value
		},
		{
			id: 'D',
			type: 'podIndex',
			subType: 'degree',
			data: 0
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
