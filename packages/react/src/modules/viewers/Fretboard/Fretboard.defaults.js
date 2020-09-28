import pw_core from '@pw/core';

export default {
	fretRange: [0, 12],
	tuning: [16, 11, 7, 2, -3, -8],
	projection: {
		colorFn: pw_core.models.theory.degree.getColor,
		textFn: pw_core.models.theory.interval.getName,
		reduced: true,
		cell: {
			a: pw_core.models.theory.note.preset.C.value,
			B: pw_core.models.theory.scale.preset.Major.value
		}
	}
};
