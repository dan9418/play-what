import pw_core from '@pw/core';

export default {
	fretRange: [0, 12],
	tuning: [16, 11, 7, 2, -3, -8],
	projection: {
		value: [[0,0]],
		modelType: 'podList',
		podType: 'note',
		colorFn: null,
		textFn: null,
		reduced: true
	}
};
