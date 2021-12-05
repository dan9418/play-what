import { IntervalTag, IPod, IPreset } from "../../Model.constants";

export enum IntervalId {
	P1 = 'unison',
	m2 = 'minor-second',
	M2 = 'major-second',
	A2 = 'augmented-second',
	d3 = 'diminished-third',
	m3 = 'minor-third',
	M3 = 'major-third',
	A3 = 'augmented-third',
	d4 = 'diminished-fourth',
	P4 = 'perfect-fourth',
	A4 = 'augmented-fourth',
	d5 = 'diminished-fifth',
	P5 = 'perfect-fifth',
	A5 = 'augmented-fifth',
	d6 = 'diminished-sixth',
	m6 = 'minor-sixth',
	M6 = 'major-sixth',
	A6 = 'augmented-sixth',
	d7 = 'diminished-seventh',
	m7 = 'minor-seventh',
	M7 = 'major-seventh',
	P8 = 'octave',
	b9 = 'flat-9',
	x9 = '9',
	s9 = 'sharp-9',
	b11 = 'flat-11',
	x11 = '11',
	s11 = 'sharp-11',
	b13 = 'flat-13',
	x13 = '13',
	s13 = 'sharp-13',
}

const formatPreset = (id: IntervalId, name: string, value: IPod, tags = []) => ({ id, name, value, tags });

export const INTERVAL_PRESET_MAP = new Map<IntervalId, IPreset<IPod>>([
	[IntervalId.P1, formatPreset(
		IntervalId.P1,
		'Perfect Unison',
		[0, 0],
		[IntervalTag.Perfect]
	)],
	[IntervalId.m2, formatPreset(
		IntervalId.m2,
		'Minor 2nd',
		[1, 1],
		[IntervalTag.Minor]
	)],
	[IntervalId.M2, formatPreset(
		IntervalId.M2,
		'Major 2nd',
		[2, 1],
		[IntervalTag.Major]
	)],
	[IntervalId.A2, formatPreset(
		IntervalId.A2,
		'Augmented 2nd',
		[3, 1],
		[IntervalTag.Augmented]
	)],
	[IntervalId.d3, formatPreset(
		IntervalId.d3,
		'Diminished 3rd',
		[2, 2],
		[IntervalTag.Diminished]
	)],
	[IntervalId.m3, formatPreset(
		IntervalId.m3,
		'Minor 3rd',
		[3, 2],
		[IntervalTag.Minor]
	)],
	[IntervalId.M3, formatPreset(
		IntervalId.M3,
		'Major 3rd',
		[4, 2],
		[IntervalTag.Major]
	)],
	[IntervalId.A3, formatPreset(
		IntervalId.A3,
		'Augmented 3rd',
		[5, 2],
		[IntervalTag.Augmented]
	)],
	[IntervalId.d4, formatPreset(
		IntervalId.d4,
		'Diminished 4th',
		[4, 3],
		[IntervalTag.Diminished]
	)],
	[IntervalId.P4, formatPreset(
		IntervalId.P4,
		'Perfect 4th',
		[5, 3],
		[IntervalTag.Perfect]
	)],
	[IntervalId.A4, formatPreset(
		IntervalId.A4,
		'Augmented 4th',
		[6, 3],
		[IntervalTag.Augmented]
	)],
	[IntervalId.d5, formatPreset(
		IntervalId.d5,
		'Diminished 5th',
		[6, 4],
		[IntervalTag.Diminished]
	)],
	[IntervalId.P5, formatPreset(
		IntervalId.P5,
		'Perfect 5th',
		[7, 4],
		[IntervalTag.Perfect]
	)],
	[IntervalId.A5, formatPreset(
		IntervalId.A5,
		'Augmented 5th',
		[8, 4],
		[IntervalTag.Augmented]
	)],
	[IntervalId.d6, formatPreset(
		IntervalId.d6,
		'Diminished 6th',
		[7, 5],
		[IntervalTag.Diminished]
	)],
	[IntervalId.m6, formatPreset(
		IntervalId.m6,
		'Minor 6th',
		[8, 5],
		[IntervalTag.Minor]
	)],
	[IntervalId.M6, formatPreset(
		IntervalId.M6,
		'Major 6th',
		[9, 5],
		[IntervalTag.Major]
	)],
	[IntervalId.A6, formatPreset(
		IntervalId.A6,
		'Augmented 6th',
		[10, 5],
		[IntervalTag.Augmented]
	)],
	[IntervalId.d7, formatPreset(
		IntervalId.d7,
		'Diminished 7th',
		[9, 6],
		[IntervalTag.Diminished]
	)],
	[IntervalId.m7, formatPreset(
		IntervalId.m7,
		'Minor 7th',
		[10, 6],
		[IntervalTag.Minor]
	)],
	[IntervalId.M7, formatPreset(
		IntervalId.M7,
		'Major 7th',
		[11, 6],
		[IntervalTag.Major]
	)],
	[IntervalId.P8, formatPreset(
		IntervalId.P8,
		'Octave',
		[12, 7],
		[IntervalTag.Perfect]
	)],
	[IntervalId.b9, formatPreset(
		IntervalId.b9,
		'Flat Ninth',
		[13, 8],
		[IntervalTag.Extended]
	)],
	[IntervalId.x9, formatPreset(
		IntervalId.x9,
		'Ninth',
		[14, 8],
		[IntervalTag.Extended]
	)],
	[IntervalId.s9, formatPreset(
		IntervalId.s9,
		'Sharp Ninth',
		[15, 8],
		[IntervalTag.Extended]
	)],
	[IntervalId.b11, formatPreset(
		IntervalId.b11,
		'Flat Eleventh',
		[16, 10],
		[IntervalTag.Extended]
	)],
	[IntervalId.x11, formatPreset(
		IntervalId.x11,
		'Eleventh',
		[17, 10],
		[IntervalTag.Extended]
	)],
	[IntervalId.s11, formatPreset(
		IntervalId.s11,
		'Sharp Eleventh',
		[18, 10],
		[IntervalTag.Extended]
	)],
	[IntervalId.b13, formatPreset(
		IntervalId.b13,
		'Flat Thirteenth',
		[20, 12],
		[IntervalTag.Extended]
	)],
	[IntervalId.x13, formatPreset(
		IntervalId.x13,
		'Thirteenth',
		[21, 12],
		[IntervalTag.Extended]
	)],
	[IntervalId.s13, formatPreset(
		IntervalId.s13,
		'Sharp Thirteenth',
		[22, 12],
		[IntervalTag.Extended]
	)]
]);

export const INTERVAL_PRESETS = Array.from(INTERVAL_PRESET_MAP).map(([k, v]) => v);

console.log('pw-gen intervals', JSON.stringify(INTERVAL_PRESETS));

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
