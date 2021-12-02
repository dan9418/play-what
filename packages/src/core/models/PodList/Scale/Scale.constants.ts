import { INTERVAL_PRESET_MAP } from "../../Pod/Interval/Interval.constants";
import { IPod, IPreset, PresetTag } from '../../Model.constants';
import { IntervalId } from '../../Pod/Interval/Interval.constants';

export enum ScaleId {
	Ionian = 'Ionian',
	Dorian = 'Dorian',
	Phrygian = 'Phrygian',
	PhrygianDom = 'PhrygianDom',
	Lydian = 'Lydian',
	Mixolydian = 'Mixolydian',
	DomBebop = 'DomBebop',
	MajBebop = 'MajBebop',
	Aeolian = 'Aeolian',
	Locrian = 'Locrian',
	NaturalMinor = 'NaturalMinor',
	HarmonicMinor = 'HarmonicMinor',
	MelodicMinor = 'MelodicMinor',
	MajorPentatonic = 'MajorPentatonic',
	MinorPentatonic = 'MinorPentatonic',
	MajorBlues = 'MajorBlues',
	MinorBlues = 'MinorBlues',
	Chromatic = 'Chromatic'
}

const formatPreset = (id: ScaleId, name: string, intervalIds: IntervalId[], tags = []) => ({
	id,
	name,
	value: intervalIds.map(id => INTERVAL_PRESET_MAP.get(id).value),
	tags: [PresetTag.Scale, ...tags]
});

export const SCALE_PRESET_MAP = new Map<ScaleId, IPreset<IPod[]>>([
	[ScaleId.Ionian, formatPreset(
		ScaleId.Ionian, 'Ionian',
		[IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.M7],
		[PresetTag.Heptatonic, PresetTag.Diatonic, PresetTag.Major]
	)],
	[ScaleId.Dorian, formatPreset(
		ScaleId.Dorian, 'Dorian',
		[IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.m7],
		[PresetTag.Heptatonic, PresetTag.Diatonic, PresetTag.Minor]
	)],
	[ScaleId.Phrygian, formatPreset(
		ScaleId.Phrygian, 'Phrygian',
		[IntervalId.P1, IntervalId.m2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.m7],
		[PresetTag.Heptatonic, PresetTag.Diatonic, PresetTag.Minor]
	)],
	[ScaleId.Lydian, formatPreset(
		ScaleId.Lydian, 'Lydian',
		[IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.A4, IntervalId.P5, IntervalId.M6, IntervalId.M7],
		[PresetTag.Heptatonic, PresetTag.Diatonic, PresetTag.Major]
	)],
	[ScaleId.Mixolydian, formatPreset(
		ScaleId.Mixolydian, 'Mixolydian',
		[IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.m7],
		[PresetTag.Heptatonic, PresetTag.Diatonic, PresetTag.Major, PresetTag.Dominant]
	)],
	[ScaleId.Aeolian, formatPreset(
		ScaleId.Aeolian, 'Aeolian',
		[IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.m7],
		[PresetTag.Heptatonic, PresetTag.Diatonic, PresetTag.Minor]
	)],
	[ScaleId.Locrian, formatPreset(
		ScaleId.Locrian, 'Locrian',
		[IntervalId.P1, IntervalId.m2, IntervalId.m3, IntervalId.P4, IntervalId.d5, IntervalId.m6, IntervalId.m7],
		[PresetTag.Heptatonic, PresetTag.Diatonic, PresetTag.Minor]
	)],
	[ScaleId.NaturalMinor, formatPreset(
		ScaleId.NaturalMinor, 'Natural Minor',
		[IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.m7],
		[PresetTag.Heptatonic, PresetTag.Diatonic, PresetTag.Minor]
	)],
	[ScaleId.HarmonicMinor, formatPreset(
		ScaleId.HarmonicMinor, 'Harmonic Minor',
		[IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.M7],
		[PresetTag.Heptatonic, PresetTag.Minor]
	)],
	[ScaleId.MelodicMinor, formatPreset(
		ScaleId.MelodicMinor, 'Melodic Minor',
		[IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.M7],
		[PresetTag.Heptatonic, PresetTag.Minor]
	)],
	[ScaleId.MajorPentatonic, formatPreset(
		ScaleId.MajorPentatonic, 'Major Pentatonic',
		[IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P5, IntervalId.M6],
		[PresetTag.Pentatonic, PresetTag.Major]
	)],
	[ScaleId.MinorPentatonic, formatPreset(
		ScaleId.MinorPentatonic, 'Minor Pentatonic',
		[IntervalId.P1, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m7],
		[PresetTag.Pentatonic, PresetTag.Minor]
	)],
	[ScaleId.MajorBlues, formatPreset(
		ScaleId.MajorBlues, 'Major Blues',
		[IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.M3, IntervalId.P5, IntervalId.M6],
		[PresetTag.Hexatonic, PresetTag.Blues, PresetTag.Major]
	)],
	[ScaleId.MinorBlues, formatPreset(
		ScaleId.MinorBlues, 'Minor Blues',
		[IntervalId.P1, IntervalId.m3, IntervalId.P4, IntervalId.d5, IntervalId.P5, IntervalId.m7],
		[PresetTag.Hexatonic, PresetTag.Blues, PresetTag.Minor]
	)],
	[ScaleId.DomBebop, formatPreset(
		ScaleId.DomBebop, 'Dominant Bebob',
		[IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.m7, IntervalId.M7],
		[PresetTag.Octatonic, PresetTag.Bebop, PresetTag.Major, PresetTag.Dominant]
	)],
	[ScaleId.MajBebop, formatPreset(
		ScaleId.MajBebop, 'Major Bebob',
		[IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.M6, IntervalId.M7],
		[PresetTag.Octatonic, PresetTag.Bebop, PresetTag.Major]
	)],
	[ScaleId.PhrygianDom, formatPreset(
		ScaleId.PhrygianDom, 'Phrygian Dominant',
		[IntervalId.P1, IntervalId.m2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.m7],
		[PresetTag.Heptatonic, PresetTag.Major, PresetTag.Dominant]
	)]
]);

export const SCALE_PRESETS = Array.from(SCALE_PRESET_MAP).map(([k, v]) => v);

export const DEFAULT_SCALE_OPTIONS = {
	displayName: 'scale',
	intervalDisplayName: 'interval'
};
