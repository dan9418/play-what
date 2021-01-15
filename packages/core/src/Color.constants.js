const DEFAULT_DEGREE_COLOR_SCHEME = [
	'#E6194B',
	'#F58231',
	'#FFE119',
	'#3CB44B',
	'#4363D8',
	'#911DB4',
	'#F032E6'
];

const DEFAULT_PITCH_COLOR_SCHEME = [
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

export const COLOR_SOURCES = [
	{
		id: 'none',
		name: 'None',
		properties: []
	},
	{
		id: 'note',
		name: 'Note',
		properties: [
			{
				id: 'pitchClass',
				name: 'Pitch Class',
				schemes: [
					{
						id: 'default',
						name: 'Default',
						value: DEFAULT_PITCH_COLOR_SCHEME
					}
				]
			}
		]
	},
	{
		id: 'interval',
		name: 'Interval',
		properties: [
			{
				id: 'degree',
				name: 'Degree',
				schemes: [
					{
						id: 'default',
						name: 'Default',
						value: DEFAULT_DEGREE_COLOR_SCHEME
					}
				]
			}
		]
	}
];
