import { IPreset } from "../models/Model.constants"

export const MAX_DEGREE = 7

export enum DegreeId {
	C = 'C',
	D = 'D',
	E = 'E',
	F = 'F',
	G = 'G',
	A = 'A',
	B = 'B',
}

export const DEGREE_PRESET_MAP = new Map<DegreeId, IPreset<number>>([
	[DegreeId.C, {
		id: DegreeId.C,
		name: 'C',
		value: 0
	}],
	[DegreeId.D, {
		id: DegreeId.D,
		name: 'D',
		value: 1
	}],
	[DegreeId.E, {
		id: DegreeId.E,
		name: 'E',
		value: 2
	}],
	[DegreeId.F, {
		id: DegreeId.F,
		name: 'F',
		value: 3
	}],
	[DegreeId.G, {
		id: DegreeId.G,
		name: 'G',
		value: 4
	}],
	[DegreeId.A, {
		id: DegreeId.A,
		name: 'A',
		value: 5
	}],
	[DegreeId.B, {
		id: DegreeId.B,
		name: 'B',
		value: 6
	}]
]);

export const ROOT_DEGREE = DEGREE_PRESET_MAP.get(DegreeId.C).value;

export const DEGREE_PRESETS = Array.from(DEGREE_PRESET_MAP).map(([k, v]) => v);

export const DEFAULT_DEGREE_COLOR_SCHEME = [
	'#E6194B',
	'#F58231',
	'#FFE119',
	'#3CB44B',
	'#4363D8',
	'#911DB4',
	'#F032E6'
];
