import { TONE_FN } from '@pw/core/src/Tone.constants';
import { TUNING_FN } from '@pw/core/src/Tuning.constants';
import { FRETBOARD_TUNING } from './Fretboard.api';

const DEFAULT_FRETBOARD_PROPS = {
	fretRange: [0, 12],
	tuning: FRETBOARD_TUNING.standard.value,
	colorSource: 'note',
	colorProperty: 'pitchClass',
	colorScheme: 'default',
	labelSource: 'keyCenter',
	labelProperty: 'name',
	tuningFn: TUNING_FN.TET.value,
	toneFn: TONE_FN.sine.value
};

export default DEFAULT_FRETBOARD_PROPS;
