import { SCALE } from '@pw/core/src/modules/Presets';

const DEFAULT_FRETBOARD_INPUTS = {
	fretLow: 0,
	fretHigh: 12,
	tuning: [16, 11, 7, 2, -3, -8],
	podContext: {
		value: SCALE.Major.value,
		podType: 'note',
		isList: true
	}
};

export default DEFAULT_FRETBOARD_INPUTS;
