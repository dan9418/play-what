import { TONE_FN } from '@pw/core/src/tone/Tone.constants';
import { TUNING_FN } from '@pw/core/src/tuning/Tuning.constants';
import { FRETBOARD_TUNING } from './Fretboard.api';

const DEFAULT_FRETBOARD_PROPS = {
	fretRange: [0, 12],
	tuning: FRETBOARD_TUNING.standard.value,
	colorSource: 'intervals',
	colorProperty: 'degree',
	colorScheme: 'degree',
	labelSource: 'intervals',
	labelProperty: 'degree',
	tuningFn: TUNING_FN.TET.value,
	toneFn: TONE_FN.sine.value
};

export default DEFAULT_FRETBOARD_PROPS;
