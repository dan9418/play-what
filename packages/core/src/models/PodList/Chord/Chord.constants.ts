import { INTERVAL_PRESET_MAP } from "../../Pod/Interval/Interval.constants";
import { IPod, IPreset, PresetTag } from './../../Model.constants';
import { IntervalId } from './../../Pod/Interval/Interval.constants';

export enum ChordId {
	MajTri = 'MajTri',
	Maj6 = 'Maj6',
	Maj7 = 'Maj7',
	MinTri = 'MinTri',
	Min6 = 'Min6',
	Min7 = 'Min7',
	MinMaj7 = 'MinMaj7',
	Dom7 = 'Dom7',
	Dom7b9 = 'Dom7b9',
	AugTri = 'AugTri',
	Aug7 = 'Aug7',
	AugM7 = 'AugM7',
	DimTri = 'DimTri',
	Dim7 = 'Dim7',
	HalfDim7 = 'HalfDim7',
	Sus2 = 'Sus2',
	Sus4 = 'Sus4',
}

interface IVoicing {
	id: string;
	name: string;
	value: number[];
}

const formatVoicing = (id: string, name: string, value: number[]) => ({
	id,
	name,
	value
});

const VOICING = {
	v7_E: formatVoicing('v_E', 'Barre (E root)', [1, 5, 3, 7, 5, 1]),
	v7_A: formatVoicing('v7_A', 'Barre (A root)', [5, 3, 7, 5, 1, null]),
	v7_E_b9: formatVoicing('v_E', 'Barre (E root)', [1, 5, 2, 7, 5, 1]),
	v7_A_b9: formatVoicing('v7_A', 'Barre (A root)', [5, 2, 7, 5, 1, null]),
	v6_E: formatVoicing('v_E', 'Barre (E root)', [1, 5, 3, 6, 5, 1]),
	v6_A: formatVoicing('v7_A', 'Barre (A root)', [5, 3, 6, 5, 1, null]),
	v_E: formatVoicing('v_E', 'Barre (E root)', [1, 5, 3, 1, 5, 1]),
	v_A: formatVoicing('v7_A', 'Barre (A root)', [5, 3, 1, 5, 1, null])
}


const CAGED_TRIAD_VOICINGS = [
	formatVoicing('C', 'C Shape', [3, 1, 5, 3, 1, null]),
	formatVoicing('A', 'A Shape', [5, 3, 1, 5, 1, null]),
	formatVoicing('G', 'G Shape', [1, 5, 1, 5, 3, 1]),
	formatVoicing('E', 'E Shape', [1, 5, 3, 1, 5, 1]),
	formatVoicing('D', 'D Shape', [3, 1, 5, 1, null, null])
];

const CAGED_SIXTH_VOICINGS = [
	formatVoicing('C', 'C Shape', [3, 6, 5, 3, 1, null]),
	formatVoicing('A', 'A Shape', [5, 3, 6, 5, 1, null]),
	formatVoicing('G', 'G Shape', [6, 5, 1, 5, 3, 1]),
	formatVoicing('E', 'E Shape', [1, 5, 3, 6, 5, 1]),
	formatVoicing('D', 'D Shape', [3, 6, 5, 1, null, null])
];

const CAGED_SEVENTH_VOICINGS = [
	formatVoicing('C', 'C Shape', [3, 7, 5, 3, 1, null]),
	formatVoicing('A', 'A Shape', [5, 3, 7, 5, 1, null]),
	formatVoicing('G', 'G Shape', [7, 5, 1, 5, 3, 1]),
	formatVoicing('E', 'E Shape', [1, 5, 3, 7, 5, 1]),
	formatVoicing('D', 'D Shape', [3, 7, 5, 1, null, null])
];

const VOICING_TRIADS = [VOICING.v_A, VOICING.v_E];
const VOICING_SEVENTHS = [VOICING.v7_A, VOICING.v7_E];
const VOICING_SEVENTHS_b9 = [VOICING.v7_A_b9, VOICING.v7_E_b9];
const VOICING_SIXTHS = [VOICING.v6_A, VOICING.v6_E];

const formatPreset = (id: ChordId, name: string, intervalIds: IntervalId[], tags = [], _ = []) => {
	let voicings = CAGED_TRIAD_VOICINGS;
	if (tags.includes(PresetTag.Sixth)) {
		voicings = CAGED_SIXTH_VOICINGS
	}
	if (tags.includes(PresetTag.Seventh)) {
		voicings = CAGED_SEVENTH_VOICINGS
	}

	return {
		id,
		name,
		value: intervalIds.map(id => INTERVAL_PRESET_MAP.get(id).value),
		tags: [PresetTag.Chord, ...tags],
		voicings
	}
};

export const CHORD_PRESET_MAP = new Map<ChordId, IPreset<IPod[]>>([
	[ChordId.MajTri, formatPreset(
		ChordId.MajTri,
		'Major Triad',
		[IntervalId.P1, IntervalId.M3, IntervalId.P5],
		[PresetTag.Major, PresetTag.Triad],
		VOICING_TRIADS
	)],
	[ChordId.Maj6, formatPreset(
		ChordId.Maj6,
		'Major 6th',
		[IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.M6],
		[PresetTag.Major, PresetTag.Sixth],
		VOICING_SIXTHS
	)],
	[ChordId.Maj7, formatPreset(
		ChordId.Maj7,
		'Major 7th',
		[IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.M7],
		[PresetTag.Major, PresetTag.Seventh],
		VOICING_SEVENTHS
	)],
	[ChordId.MinTri, formatPreset(
		ChordId.MinTri,
		'Minor Triad',
		[IntervalId.P1, IntervalId.m3, IntervalId.P5],
		[PresetTag.Minor, PresetTag.Triad],
		VOICING_TRIADS
	)],
	[ChordId.Min6, formatPreset(
		ChordId.Min6,
		'Minor 6th',
		[IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.M6],
		[PresetTag.Minor, PresetTag.Sixth],
		VOICING_SIXTHS
	)],
	[ChordId.Min7, formatPreset(
		ChordId.Min7,
		'Minor 7th',
		[IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.m7],
		[PresetTag.Minor, PresetTag.Seventh],
		VOICING_SEVENTHS
	)],
	[ChordId.MinMaj7, formatPreset(
		ChordId.MinMaj7,
		'Minor-Major 7th',
		[IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.M7],
		[PresetTag.Minor, PresetTag.Seventh],
		VOICING_SEVENTHS
	)],
	[ChordId.Dom7, formatPreset(
		ChordId.Dom7,
		'Dominant 7th',
		[IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.m7],
		[PresetTag.Dominant, PresetTag.Seventh],
		VOICING_SEVENTHS
	)],
	[ChordId.Dom7b9, formatPreset(
		ChordId.Dom7b9,
		'Dominant 7th (b9)',
		[IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.m7, IntervalId.m2],
		[PresetTag.Dominant, PresetTag.Extended],
		VOICING_SEVENTHS_b9
	)],
	[ChordId.AugTri, formatPreset(
		ChordId.AugTri,
		'Augmented Triad',
		[IntervalId.P1, IntervalId.M3, IntervalId.A5],
		[PresetTag.Augmented, PresetTag.Triad],
		VOICING_TRIADS
	)],
	[ChordId.Aug7, formatPreset(
		ChordId.Aug7,
		'Augmented 7th',
		[IntervalId.P1, IntervalId.M3, IntervalId.A5, IntervalId.m7],
		[PresetTag.Augmented, PresetTag.Seventh],
		VOICING_SEVENTHS
	)],
	[ChordId.AugM7, formatPreset(
		ChordId.AugM7,
		'Augmented Major 7th',
		[IntervalId.P1, IntervalId.M3, IntervalId.A5, IntervalId.M7],
		[PresetTag.Augmented, PresetTag.Seventh],
		VOICING_SEVENTHS
	)],
	[ChordId.DimTri, formatPreset(
		ChordId.DimTri,
		'Diminished Triad',
		[IntervalId.P1, IntervalId.m3, IntervalId.d5],
		[PresetTag.Diminished, PresetTag.Triad],
		VOICING_TRIADS
	)],
	[ChordId.Dim7, formatPreset(
		ChordId.Dim7,
		'Diminished 7th',
		[IntervalId.P1, IntervalId.m3, IntervalId.d5, IntervalId.d7],
		[PresetTag.Diminished, PresetTag.Seventh],
		VOICING_SEVENTHS
	)],
	[ChordId.HalfDim7, formatPreset(
		ChordId.HalfDim7,
		'Half-Diminished 7th',
		[IntervalId.P1, IntervalId.m3, IntervalId.d5, IntervalId.m7],
		[PresetTag.Diminished, PresetTag.Seventh],
		VOICING_SEVENTHS
	)],
	[ChordId.Sus2, formatPreset(
		ChordId.Sus2,
		'Suspended 2nd',
		[IntervalId.P1, IntervalId.M2, IntervalId.P5],
		[PresetTag.Suspended, PresetTag.Triad]
	)],
	[ChordId.Sus4, formatPreset(
		ChordId.Sus4,
		'Suspended 4th',
		[IntervalId.P1, IntervalId.P4, IntervalId.P5],
		[PresetTag.Suspended, PresetTag.Triad]
	)]
]);

export const CHORD_PRESETS = Array.from(CHORD_PRESET_MAP).map(([k, v]) => v);

export const DEFAULT_CHORD_OPTIONS = {
	displayName: 'chord',
	intervalDisplayName: 'interval'
};
