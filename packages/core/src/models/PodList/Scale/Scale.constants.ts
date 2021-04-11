import { IntervalId } from './../../Pod/Interval/Interval.constants';
import { IPod, IModelPreset } from './../../Model.constants';
import { INTERVAL_PRESET_MAP } from "../../Pod/Interval/Interval.constants";

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

const formatPreset = (id: ScaleId, name: string, intervalIds: IntervalId[]) => ({
	id,
	name,
	value: intervalIds.map(id => INTERVAL_PRESET_MAP[id].value)
});

export const SCALE_PRESET_MAP: { [x: string]: IModelPreset<IPod[]> } = {
	[ScaleId.Ionian]: formatPreset(ScaleId.Ionian, 'Ionian', [IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.M7]),
	[ScaleId.Dorian]: formatPreset(ScaleId.Dorian, 'Dorian', [IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.m7]),
	[ScaleId.Phrygian]: formatPreset(ScaleId.Phrygian, 'Phrygian', [IntervalId.P1, IntervalId.m2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.m7]),
	[ScaleId.PhrygianDom]: formatPreset(ScaleId.PhrygianDom, 'Phrygian Dominant', [IntervalId.P1, IntervalId.m2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.m7]),
	[ScaleId.Lydian]: formatPreset(ScaleId.Lydian, 'Lydian', [IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.A4, IntervalId.P5, IntervalId.M6, IntervalId.M7]),
	[ScaleId.Mixolydian]: formatPreset(ScaleId.Mixolydian, 'Mixolydian', [IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.m7]),
	[ScaleId.DomBebop]: formatPreset(ScaleId.DomBebop, 'Dominant Bebob', [IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.m7, IntervalId.M7]),
	[ScaleId.MajBebop]: formatPreset(ScaleId.MajBebop, 'Major Bebob', [IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.M6, IntervalId.M7]),
	[ScaleId.Aeolian]: formatPreset(ScaleId.Aeolian, 'Aeolian', [IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.m7]),
	[ScaleId.Locrian]: formatPreset(ScaleId.Locrian, 'Locrian', [IntervalId.P1, IntervalId.m2, IntervalId.m3, IntervalId.P4, IntervalId.d5, IntervalId.m6, IntervalId.m7]),
	[ScaleId.NaturalMinor]: formatPreset(ScaleId.NaturalMinor, 'Natural Minor', [IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.m7]),
	[ScaleId.HarmonicMinor]: formatPreset(ScaleId.HarmonicMinor, 'Harmonic Minor', [IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.M7]),
	[ScaleId.MelodicMinor]: formatPreset(ScaleId.MelodicMinor, 'Melodic Minor', [IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.M7]),
	[ScaleId.MajorPentatonic]: formatPreset(ScaleId.MajorPentatonic, 'Major Pentatonic', [IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P5, IntervalId.M6]),
	[ScaleId.MinorPentatonic]: formatPreset(ScaleId.MinorPentatonic, 'Minor Pentatonic', [IntervalId.P1, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m7]),
	[ScaleId.MajorBlues]: formatPreset(ScaleId.MajorBlues, 'Major Blues', [IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.M3, IntervalId.P5, IntervalId.M6]),
	[ScaleId.MinorBlues]: formatPreset(ScaleId.MinorBlues, 'Minor Blues', [IntervalId.P1, IntervalId.m3, IntervalId.P4, IntervalId.d5, IntervalId.P5, IntervalId.m7])
	//Chromatic: formatPreset(ScaleId.Chromatic, 'Chromatic', [IntervalId.P1, IntervalId.m2, IntervalId.M2, IntervalId.m3, IntervalId.M3, IntervalId.P4, IntervalId.A4, IntervalId.P5, IntervalId.m6, IntervalId.M6, IntervalId.m7, IntervalId.M7])
};

export const SCALE_VALUES = Object.values(SCALE_PRESET_MAP);

export const DEFAULT_SCALE_OPTIONS = {
	displayName: 'scale',
	intervalDisplayName: 'interval'
};
