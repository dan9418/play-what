import { IPod } from "../../Model.constants";
import { IModelPreset } from './../../Model.constants';

export enum IntervalId {
	P1 = 'P1',
	m2 = 'm2',
	M2 = 'M2',
	A2 = 'A2',
	d3 = 'd3',
	m3 = 'm3',
	M3 = 'M3',
	A3 = 'A3',
	d4 = 'd4',
	P4 = 'P4',
	A4 = 'A4',
	d5 = 'd5',
	P5 = 'P5',
	A5 = 'A5',
	d6 = 'd6',
	m6 = 'm6',
	M6 = 'M6',
	A6 = 'A6',
	d7 = 'd7',
	m7 = 'm7',
	M7 = 'M7',
	P8 = 'P8'
}

const formatPreset = (id: IntervalId, name: string, value: IPod) => ({ id, name, value });

export const INTERVAL_PRESET_MAP = new Map<IntervalId, IModelPreset<IPod>>([
	[IntervalId.P1, formatPreset(
		IntervalId.P1,
		'Perfect Unison',
		[0, 0]
	)],
	[IntervalId.m2, formatPreset(
		IntervalId.m2,
		'Minor 2nd',
		[1, 1]
	)],
	[IntervalId.M2, formatPreset(
		IntervalId.M2,
		'Major 2nd',
		[2, 1]
	)],
	[IntervalId.A2, formatPreset(
		IntervalId.A2,
		'Augmented 2nd',
		[3, 1]
	)],
	[IntervalId.d3, formatPreset(
		IntervalId.d3,
		'Diminished 3rd',
		[2, 2]
	)],
	[IntervalId.m3, formatPreset(
		IntervalId.m3,
		'Minor 3rd',
		[3, 2]
	)],
	[IntervalId.M3, formatPreset(
		IntervalId.M3,
		'Major 3rd',
		[4, 2]
	)],
	[IntervalId.A3, formatPreset(
		IntervalId.A3,
		'Augmented 3rd',
		[5, 2]
	)],
	[IntervalId.d4, formatPreset(
		IntervalId.d4,
		'Diminished 4th',
		[4, 3]
	)],
	[IntervalId.P4, formatPreset(
		IntervalId.P4,
		'Perfect 4th',
		[5, 3]
	)],
	[IntervalId.A4, formatPreset(
		IntervalId.A4,
		'Augmented 4th',
		[6, 3]
	)],
	[IntervalId.d5, formatPreset(
		IntervalId.d5,
		'Diminished 5th',
		[6, 4]
	)],
	[IntervalId.P5, formatPreset(
		IntervalId.P5,
		'Perfect 5th',
		[7, 4]
	)],
	[IntervalId.A5, formatPreset(
		IntervalId.A5,
		'Augmented 5th',
		[8, 4]
	)],
	[IntervalId.d6, formatPreset(
		IntervalId.d6,
		'Diminished 6th',
		[7, 5]
	)],
	[IntervalId.m6, formatPreset(
		IntervalId.m6,
		'Minor 6th',
		[8, 5]
	)],
	[IntervalId.M6, formatPreset(
		IntervalId.M6,
		'Major 6th',
		[9, 5]
	)],
	[IntervalId.A6, formatPreset(
		IntervalId.A6,
		'Augmented 6th',
		[10, 5]
	)],
	[IntervalId.d7, formatPreset(
		IntervalId.d7,
		'Diminished 7th',
		[9, 6]
	)],
	[IntervalId.m7, formatPreset(
		IntervalId.m7,
		'Minor 7th',
		[10, 6]
	)],
	[IntervalId.M7, formatPreset(
		IntervalId.M7,
		'Major 7th',
		[11, 6]
	)],
	[IntervalId.P8, formatPreset(
		IntervalId.P8,
		'Octave',
		[12, 7]
	)]
]);

export const INTERVAL_PRESETS = Array.from(INTERVAL_PRESET_MAP).map(([k, v]) => v);

export const CORE_INTERVALS = [
	[INTERVAL_PRESET_MAP.get(IntervalId.P1)],
	[INTERVAL_PRESET_MAP.get(IntervalId.m2), INTERVAL_PRESET_MAP.get(IntervalId.M2)],
	[INTERVAL_PRESET_MAP.get(IntervalId.m3), INTERVAL_PRESET_MAP.get(IntervalId.M3)],
	[INTERVAL_PRESET_MAP.get(IntervalId.P4)],
	[INTERVAL_PRESET_MAP.get(IntervalId.P5)],
	[INTERVAL_PRESET_MAP.get(IntervalId.m6), INTERVAL_PRESET_MAP.get(IntervalId.M6)],
	[INTERVAL_PRESET_MAP.get(IntervalId.m7), INTERVAL_PRESET_MAP.get(IntervalId.M7)]
];

export interface IIntervalQuality {
	id: string;
	name: string;
	symbol: string;
	up?: string;
	down?: string;
}

export const INTERVAL_QUALITY: { [x: string]: IIntervalQuality } = {
	dim: {
		id: 'dim',
		name: 'Diminished',
		symbol: 'd',
		down: null,
		up: 'min'
	},
	min: {
		id: 'min',
		name: 'Minor',
		symbol: 'm',
		down: 'dim',
		up: 'maj'
	},
	perfect: {
		id: 'perfect',
		name: 'Perfect',
		symbol: 'P',
		down: 'dim',
		up: 'aug'
	},
	maj: {
		id: 'maj',
		name: 'Major',
		symbol: 'M',
		down: 'min',
		up: 'aug'
	},
	aug: {
		id: 'aug',
		name: 'Augmented',
		symbol: 'A',
		down: 'maj',
		up: null
	}
};

export const INTERVAL_QUALITY_VALUES = Object.values(INTERVAL_QUALITY);

export const DEFAULT_INTERVAL_OPTIONS = {
	displayName: 'note'
}
