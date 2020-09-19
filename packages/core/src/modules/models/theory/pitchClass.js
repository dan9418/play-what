const PITCH_CLASS = {
	middleC: {
		id: 'middleC',
		name: 'Middle C',
		value: 0
	},
	tonic: {
		id: 'tonic',
		name: 'Tonic',
		value: 0
	},
	supertonic: {
		id: 'supertonic',
		name: 'Supertonic',
		value: 2
	},
	mediant: {
		id: 'mediant',
		name: 'Mediant',
		value: 4
	},
	subdominant: {
		id: 'subdominant',
		name: 'Subdominant',
		value: 5
	},
	dominant: {
		id: 'dominant',
		name: 'Dominant',
		value: 7
	},
	submediant: {
		id: 'submediant',
		name: 'Submediant',
		value: 9
	},
	subtonic: {
		id: 'subtonic',
		name: 'Subtonic',
		value: 11
	}
};

const PITCH_CLASS_COLOR_SCHEME = [
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
	preset: PITCH_CLASS,
	colorScheme: PITCH_CLASS_COLOR_SCHEME,
	getColor: p => PITCH_CLASS_COLOR_SCHEME[p]
}
