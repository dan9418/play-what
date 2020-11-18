import { SCALE } from '@pw/core/src/modules/Presets';
import { FRETBOARD_TUNING } from './Fretboard.api';

const DEFAULT_FRETBOARD_INPUTS = {
	fretLow: 0,
	fretHigh: 12,
	tuning: FRETBOARD_TUNING.standard.value,
	podContext: {
		value: SCALE.Major.value,
		podType: 'note',
		isList: true
	}
};

export default DEFAULT_FRETBOARD_INPUTS;
