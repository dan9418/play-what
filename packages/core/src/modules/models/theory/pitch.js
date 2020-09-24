const PITCH = {
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

const PITCH_VALUES = Object.values(PITCH);

const PITCH_COLOR_SCHEME = [
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
]

export default {
	preset: PITCH,
	colorScheme: PITCH_COLOR_SCHEME,
	getColor: p => PITCH_COLOR_SCHEME[p],
	getName: ({ p }) => PITCH_VALUES.find(x => x.value === p).name
}
