import pw_core from '@pw/core';

export default {
	fretRange: [0, 12],
	tuning: [16, 11, 7, 2, -3, -8],
	projection: {
		colorFn: pw_core.models.index.degree.getColor,
		textFn: pw_core.models.pod.getName,
		reduced: true,
		cell: {
			a: [0, 0],
			B: [],
			C: []
		}
	}
};
