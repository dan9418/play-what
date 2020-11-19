export const LABEL_SCHEME = {
	none: {
		id: 'none',
		name: 'None',
		value: () => ''
	},
	degree: {
		id: 'degree',
		name: 'Degree',
		value: pod => pod ? pod[1] : null
	},
	pitch: {
		id: 'pitch',
		name: 'Pitch',
		value: pod => pod ? pod[0] : null
	}
};

export const LABEL_SCHEME_VALUES = Object.values(LABEL_SCHEME);
