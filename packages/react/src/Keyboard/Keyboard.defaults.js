
import { COLOR_FN } from '@pw/core/src/Color.constants';
import { LABEL_FN } from '@pw/core/src/Label.constants';
import { TONE_FN } from '@pw/core/src/Tone.constants';
import { TUNING_FN } from '@pw/core/src/Tuning.constants';

const DEFAULT_KEYBOARD_PROPS = {
	keyRange: [-12, 12],
	colorFn: COLOR_FN.degree.value,
	labelFn: LABEL_FN.interval.value,
	tuningFn: TUNING_FN.TET.value,
	toneFn: TONE_FN.sine.value,
	pods: [],
	podType: 'note'
};

export default DEFAULT_KEYBOARD_PROPS;
