import { ChordTag, IModelConfig, ModelId } from '../Model.constants';
import { IntervalId, INTERVAL_PRESET_MAP } from "../Interval/Interval.constants";

export enum ChordId {
	MajTriad = 'maj-triad',
	Maj6 = 'maj-6',
	Maj7 = 'maj-7',
	MinTriad = 'min-triad',
	Min6 = 'min-6',
	Min7 = 'min-7',
	MinMaj7 = 'min-maj-7',
	Dom7 = 'dom-7',
	Dom7b9 = 'dom-7-b9',
	AugTriad = 'aug-triad',
	Aug7 = 'aug-7',
	AugMaj7 = 'aug-maj-7',
	DimTriad = 'dim-triad',
	Dim7 = 'dim-7',
	HalfDim7 = 'half-dim-7',
	Sus2 = 'sus-2',
	Sus4 = 'sus-4',
}

const formatPreset = (id: ChordId, name: string, intervalIds: IntervalId[], tags = [], _ = []): IModelConfig => {
	return {
		id,
		name,
		value: intervalIds.map(id => INTERVAL_PRESET_MAP.get(id).value) as any,
		tags,
		voicings: [],
		modelId: ModelId.Note
	}
};

export const CHORD_PRESET_MAP = new Map<ChordId, IModelConfig>([
	[ChordId.MajTriad, formatPreset(
		ChordId.MajTriad,
		'Major Triad',
		[IntervalId.P1, IntervalId.M3, IntervalId.P5],
		[ChordTag.Major, ChordTag.Triad]
	)],
	[ChordId.Maj6, formatPreset(
		ChordId.Maj6,
		'Major 6th',
		[IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.M6],
		[ChordTag.Major, ChordTag.Sixth]
	)],
	[ChordId.Maj7, formatPreset(
		ChordId.Maj7,
		'Major 7th',
		[IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.M7],
		[ChordTag.Major, ChordTag.Seventh]
	)],
	[ChordId.MinTriad, formatPreset(
		ChordId.MinTriad,
		'Minor Triad',
		[IntervalId.P1, IntervalId.m3, IntervalId.P5],
		[ChordTag.Minor, ChordTag.Triad]
	)],
	[ChordId.Min6, formatPreset(
		ChordId.Min6,
		'Minor 6th',
		[IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.M6],
		[ChordTag.Minor, ChordTag.Sixth]
	)],
	[ChordId.Min7, formatPreset(
		ChordId.Min7,
		'Minor 7th',
		[IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.m7],
		[ChordTag.Minor, ChordTag.Seventh]
	)],
	[ChordId.MinMaj7, formatPreset(
		ChordId.MinMaj7,
		'Minor-Major 7th',
		[IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.M7],
		[ChordTag.Minor, ChordTag.Seventh]
	)],
	[ChordId.Dom7, formatPreset(
		ChordId.Dom7,
		'Dominant 7th',
		[IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.m7],
		[ChordTag.Dominant, ChordTag.Seventh]
	)],
	[ChordId.Dom7b9, formatPreset(
		ChordId.Dom7b9,
		'Dominant 7th (b9)',
		[IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.m7, IntervalId.b9],
		[ChordTag.Dominant, ChordTag.Extended]
	)],
	[ChordId.AugTriad, formatPreset(
		ChordId.AugTriad,
		'Augmented Triad',
		[IntervalId.P1, IntervalId.M3, IntervalId.A5],
		[ChordTag.Augmented, ChordTag.Triad]
	)],
	[ChordId.Aug7, formatPreset(
		ChordId.Aug7,
		'Augmented 7th',
		[IntervalId.P1, IntervalId.M3, IntervalId.A5, IntervalId.m7],
		[ChordTag.Augmented, ChordTag.Seventh]
	)],
	[ChordId.AugMaj7, formatPreset(
		ChordId.AugMaj7,
		'Augmented Major 7th',
		[IntervalId.P1, IntervalId.M3, IntervalId.A5, IntervalId.M7],
		[ChordTag.Augmented, ChordTag.Seventh]
	)],
	[ChordId.DimTriad, formatPreset(
		ChordId.DimTriad,
		'Diminished Triad',
		[IntervalId.P1, IntervalId.m3, IntervalId.d5],
		[ChordTag.Diminished, ChordTag.Triad]
	)],
	[ChordId.Dim7, formatPreset(
		ChordId.Dim7,
		'Diminished 7th',
		[IntervalId.P1, IntervalId.m3, IntervalId.d5, IntervalId.d7],
		[ChordTag.Diminished, ChordTag.Seventh]
	)],
	[ChordId.HalfDim7, formatPreset(
		ChordId.HalfDim7,
		'Half-Diminished 7th',
		[IntervalId.P1, IntervalId.m3, IntervalId.d5, IntervalId.m7],
		[ChordTag.Diminished, ChordTag.Seventh]
	)],
	[ChordId.Sus2, formatPreset(
		ChordId.Sus2,
		'Suspended 2nd',
		[IntervalId.P1, IntervalId.M2, IntervalId.P5],
		[ChordTag.Suspended, ChordTag.Triad]
	)],
	[ChordId.Sus4, formatPreset(
		ChordId.Sus4,
		'Suspended 4th',
		[IntervalId.P1, IntervalId.P4, IntervalId.P5],
		[ChordTag.Suspended, ChordTag.Triad]
	)]
]);

export const CHORD_PRESETS = Array.from(CHORD_PRESET_MAP).map(([k, v]) => v);

console.log('pw-gen chords', JSON.stringify(CHORD_PRESETS));

export const DEFAULT_CHORD_OPTIONS = {
	displayName: 'chord',
	intervalDisplayName: 'interval'
};
