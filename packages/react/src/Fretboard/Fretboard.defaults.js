
import { COLOR_FN } from '@pw/core/src/Color.constants';
import { LABEL_FN } from '@pw/core/src/Label.constants';
import { SCALE } from '@pw/core/src/Pod.presets';
import { TONE_FN } from '@pw/core/src/Tone.constants';
import { TUNING_FN } from '@pw/core/src/Tuning.constants';
import { FRETBOARD_TUNING } from './Fretboard.api';

const DEFAULT_FRETBOARD_PROPS = {
	fretRange: [0, 12],
	tuning: FRETBOARD_TUNING.standard.value,
	colorPodType: 'note',
	colorFn: COLOR_FN.pitch.value,
	labelPodType: 'note',
	labelFn: LABEL_FN.note.value,
	tuningFn: TUNING_FN.TET.value,
	toneFn: TONE_FN.sine.value
};

export default DEFAULT_FRETBOARD_PROPS;
