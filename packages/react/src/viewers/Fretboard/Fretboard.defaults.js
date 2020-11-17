import { SCALE } from '@pw/core/src/modules/Presets';

export default {
	fretRange: [0, 12],
	tuning: [16, 11, 7, 2, -3, -8],
	podContext: {
		value: SCALE.Major.value,
		podType: 'note',
		isList: true
	}
};
