
import { COLOR_SOURCES } from '@pw/core/src/Color.constants';
import { LABEL_FN_NOTE } from '@pw/core/src/Label.constants';
import { TONE_FN } from '@pw/core/src/Tone.constants';
import { TUNING_FN } from '@pw/core/src/Tuning.constants';
import { FRETBOARD_TUNING } from './Fretboard.api';

const DEFAULT_FRETBOARD_PROPS = {
	fretRange: [0, 12],
	tuning: FRETBOARD_TUNING.standard.value,
	colorSource: COLOR_SOURCES[1].id,
	colorProperty: COLOR_SOURCES[1].properties[0].id,
	colorScheme: COLOR_SOURCES[1].properties[0].schemes[0].id,
	labelSource: 'keyCenter',
	labelFn: LABEL_FN_NOTE.note.value,
	tuningFn: TUNING_FN.TET.value,
	toneFn: TONE_FN.sine.value
};

export default DEFAULT_FRETBOARD_PROPS;
