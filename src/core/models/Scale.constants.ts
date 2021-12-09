import { IntervalId, INTERVAL_PRESET_MAP } from "./Interval.constants";
import { IModelConfig, ModelId, ScaleTag } from './Model.constants';

export enum ScaleId {
	Ionian = 'ionian',
	Dorian = 'dorian',
	Phrygian = 'phrygian',
	PhrygianDominant = 'phrygian-dominant',
	Lydian = 'lydian',
	Mixolydian = 'mixolydian',
	DominantBebop = 'dominant-bebop',
	MajorBebop = 'major-bebop',
	Aeolian = 'aeolian',
	Locrian = 'locrian',
	NaturalMinor = 'natural-minor',
	HarmonicMinor = 'harmonic-minor',
	MelodicMinor = 'melodic-minor',
	MajorPentatonic = 'major-pentatonic',
	MinorPentatonic = 'minor-pentatonic',
	MajorBlues = 'major-blues',
	MinorBlues = 'minor-blues',
	Chromatic = 'chromatic'
}

const formatPreset = (id: ScaleId, name: string, intervalIds: IntervalId[], tags = []): IModelConfig => ({
	id,
	name,
	value: intervalIds.map(id => INTERVAL_PRESET_MAP.get(id).value) as any,
	tags,
	modelId: ModelId.Scale
});

export const SCALE_PRESET_MAP = new Map<ScaleId, IModelConfig>([
	[ScaleId.Ionian, formatPreset(
		ScaleId.Ionian, 'Ionian',
		[IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.M7],
		[ScaleTag.Heptatonic, ScaleTag.Diatonic, ScaleTag.Major]
	)],
	[ScaleId.Dorian, formatPreset(
		ScaleId.Dorian, 'Dorian',
		[IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.m7],
		[ScaleTag.Heptatonic, ScaleTag.Diatonic, ScaleTag.Minor]
	)],
	[ScaleId.Phrygian, formatPreset(
		ScaleId.Phrygian, 'Phrygian',
		[IntervalId.P1, IntervalId.m2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.m7],
		[ScaleTag.Heptatonic, ScaleTag.Diatonic, ScaleTag.Minor]
	)],
	[ScaleId.Lydian, formatPreset(
		ScaleId.Lydian, 'Lydian',
		[IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.A4, IntervalId.P5, IntervalId.M6, IntervalId.M7],
		[ScaleTag.Heptatonic, ScaleTag.Diatonic, ScaleTag.Major]
	)],
	[ScaleId.Mixolydian, formatPreset(
		ScaleId.Mixolydian, 'Mixolydian',
		[IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.m7],
		[ScaleTag.Heptatonic, ScaleTag.Diatonic, ScaleTag.Major, ScaleTag.Dominant]
	)],
	[ScaleId.Aeolian, formatPreset(
		ScaleId.Aeolian, 'Aeolian',
		[IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.m7],
		[ScaleTag.Heptatonic, ScaleTag.Diatonic, ScaleTag.Minor]
	)],
	[ScaleId.Locrian, formatPreset(
		ScaleId.Locrian, 'Locrian',
		[IntervalId.P1, IntervalId.m2, IntervalId.m3, IntervalId.P4, IntervalId.d5, IntervalId.m6, IntervalId.m7],
		[ScaleTag.Heptatonic, ScaleTag.Diatonic, ScaleTag.Minor]
	)],
	[ScaleId.NaturalMinor, formatPreset(
		ScaleId.NaturalMinor, 'Natural Minor',
		[IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.m7],
		[ScaleTag.Heptatonic, ScaleTag.Diatonic, ScaleTag.Minor]
	)],
	[ScaleId.HarmonicMinor, formatPreset(
		ScaleId.HarmonicMinor, 'Harmonic Minor',
		[IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.M7],
		[ScaleTag.Heptatonic, ScaleTag.Minor]
	)],
	[ScaleId.MelodicMinor, formatPreset(
		ScaleId.MelodicMinor, 'Melodic Minor',
		[IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.M7],
		[ScaleTag.Heptatonic, ScaleTag.Minor]
	)],
	[ScaleId.MajorPentatonic, formatPreset(
		ScaleId.MajorPentatonic, 'Major Pentatonic',
		[IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P5, IntervalId.M6],
		[ScaleTag.Pentatonic, ScaleTag.Major]
	)],
	[ScaleId.MinorPentatonic, formatPreset(
		ScaleId.MinorPentatonic, 'Minor Pentatonic',
		[IntervalId.P1, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m7],
		[ScaleTag.Pentatonic, ScaleTag.Minor]
	)],
	[ScaleId.MajorBlues, formatPreset(
		ScaleId.MajorBlues, 'Major Blues',
		[IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.M3, IntervalId.P5, IntervalId.M6],
		[ScaleTag.Hexatonic, ScaleTag.Blues, ScaleTag.Major]
	)],
	[ScaleId.MinorBlues, formatPreset(
		ScaleId.MinorBlues, 'Minor Blues',
		[IntervalId.P1, IntervalId.m3, IntervalId.P4, IntervalId.d5, IntervalId.P5, IntervalId.m7],
		[ScaleTag.Hexatonic, ScaleTag.Blues, ScaleTag.Minor]
	)],
	[ScaleId.DominantBebop, formatPreset(
		ScaleId.DominantBebop, 'Dominant Bebob',
		[IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.m7, IntervalId.M7],
		[ScaleTag.Octatonic, ScaleTag.Bebop, ScaleTag.Major, ScaleTag.Dominant]
	)],
	[ScaleId.MajorBebop, formatPreset(
		ScaleId.MajorBebop, 'Major Bebob',
		[IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.M6, IntervalId.M7],
		[ScaleTag.Octatonic, ScaleTag.Bebop, ScaleTag.Major]
	)],
	[ScaleId.PhrygianDominant, formatPreset(
		ScaleId.PhrygianDominant, 'Phrygian Dominant',
		[IntervalId.P1, IntervalId.m2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.m7],
		[ScaleTag.Heptatonic, ScaleTag.Major, ScaleTag.Dominant]
	)]
]);

export const SCALE_PRESETS = Array.from(SCALE_PRESET_MAP).map(([k, v]) => v);

console.log('pw-gen scales', JSON.stringify(SCALE_PRESETS));

export const DEFAULT_SCALE_OPTIONS = {
	displayName: 'scale',
	intervalDisplayName: 'interval'
};
