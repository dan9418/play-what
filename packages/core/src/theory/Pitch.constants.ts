export const MAX_PITCH = 12;

export const PITCH = {
	middleC: {
		id: 'middleC',
		name: 'Middle C',
		value: 0
	},
	midi: {
		id: 'midi',
		name: 'MIDI',
		value: 60
	}
};

export const ROOT_PITCH = PITCH.middleC.value;

export const PITCH_VALUES = Object.values(PITCH);

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
