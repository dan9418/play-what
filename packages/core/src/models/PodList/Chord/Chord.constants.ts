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

const formatPreset = (id: ChordId, name: string, intervalIds: IntervalId[], tags = []) => ({
	id,
	name,
	value: intervalIds.map(id => INTERVAL_PRESET_MAP.get(id).value),
	tags: [PresetTag.Chord, ...tags]
});


export const CHORD_PRESET_MAP = new Map<ChordId, IPreset<IPod[]>>([
	[ChordId.MajTri, formatPreset(
		ChordId.MajTri,
		'Major Triad',
		[IntervalId.P1, IntervalId.M3, IntervalId.P5],
		[PresetTag.Major, PresetTag.Triad]
	)],
	[ChordId.Maj6, formatPreset(
		ChordId.Maj6,
		'Major 6th',
		[IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.M6],
		[PresetTag.Major, PresetTag.Sixth]
	)],
	[ChordId.Maj7, formatPreset(
		ChordId.Maj7,
		'Major 7th',
		[IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.M7],
		[PresetTag.Major, PresetTag.Seventh]
	)],
	[ChordId.MinTri, formatPreset(
		ChordId.MinTri,
		'Minor Triad',
		[IntervalId.P1, IntervalId.m3, IntervalId.P5],
		[PresetTag.Minor, PresetTag.Triad]
	)],
	[ChordId.Min6, formatPreset(
		ChordId.Min6,
		'Minor 6th',
		[IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.M6],
		[PresetTag.Minor, PresetTag.Sixth]
	)],
	[ChordId.Min7, formatPreset(
		ChordId.Min7,
		'Minor 7th',
		[IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.m7],
		[PresetTag.Minor, PresetTag.Seventh]
	)],
	[ChordId.MinMaj7, formatPreset(
		ChordId.MinMaj7,
		'Minor-Major 7th',
		[IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.M7],
		[PresetTag.Minor, PresetTag.Seventh]
	)],
	[ChordId.Dom7, formatPreset(
		ChordId.Dom7,
		'Dominant 7th',
		[IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.m7],
		[PresetTag.Dominant, PresetTag.Seventh]
	)],
	[ChordId.Dom7b9, formatPreset(
		ChordId.Dom7b9,
		'Dominant 7th (b9)',
		[IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.m7, IntervalId.m2],
		[PresetTag.Dominant, PresetTag.Extended]
	)],
	[ChordId.AugTri, formatPreset(
		ChordId.AugTri,
		'Augmented Triad',
		[IntervalId.P1, IntervalId.M3, IntervalId.A5],
		[PresetTag.Augmented, PresetTag.Triad]
	)],
	[ChordId.Aug7, formatPreset(
		ChordId.Aug7,
		'Augmented 7th',
		[IntervalId.P1, IntervalId.M3, IntervalId.A5, IntervalId.m7],
		[PresetTag.Augmented, PresetTag.Seventh]
	)],
	[ChordId.AugM7, formatPreset(
		ChordId.AugM7,
		'Augmented Major 7th',
		[IntervalId.P1, IntervalId.M3, IntervalId.A5, IntervalId.M7],
		[PresetTag.Augmented, PresetTag.Seventh]
	)],
	[ChordId.DimTri, formatPreset(
		ChordId.DimTri,
		'Diminished Triad',
		[IntervalId.P1, IntervalId.m3, IntervalId.d5],
		[PresetTag.Diminished, PresetTag.Triad]
	)],
	[ChordId.Dim7, formatPreset(
		ChordId.Dim7,
		'Diminished 7th',
		[IntervalId.P1, IntervalId.m3, IntervalId.d5, IntervalId.d7],
		[PresetTag.Diminished, PresetTag.Seventh]
	)],
	[ChordId.HalfDim7, formatPreset(
		ChordId.HalfDim7,
		'Half-Diminished 7th',
		[IntervalId.P1, IntervalId.m3, IntervalId.d5, IntervalId.m7],
		[PresetTag.Diminished, PresetTag.Seventh]
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
