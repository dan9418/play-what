import { IModelConfig } from '../models/Model.constants';
export const MAX_PITCH = 12;

export enum PitchId {
	MiddleC = 'MiddleC',
	Midi = 'Midi'
}

export const PITCH_PRESET_MAP = new Map<PitchId, IModelConfig<number>>([
	[PitchId.MiddleC, {
		id: PitchId.MiddleC,
		name: 'Middle C',
		tags: [],
		value: 0
	}],
	[PitchId.Midi, {
		id: PitchId.Midi,
		name: 'MIDI',
		tags: [],
		value: 60
	}]
]);

export const ROOT_PITCH = PITCH_PRESET_MAP.get(PitchId.MiddleC).value;

export const DEFAULT_PITCH_COLOR_SCHEME = [
	'#ED1C24',
	'#F1592A',
	'#F8981E',
	'#FCB040',
	'#FFF200',
	'#8CC63F',
	'#056839',
	'#13A89E',
	'#A898C8',
	'#662D91',
	'#92278F',
	'#C2305E'
];
