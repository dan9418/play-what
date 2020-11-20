
import { COLOR_SCHEME } from '@pw/core/src/Color.constants';
import { LABEL_SCHEME } from '@pw/core/src/Label.constants';
import { SCALE } from '@pw/core/src/Pod.presets';
import { FRETBOARD_TUNING } from './Fretboard.api';

const DEFAULT_FRETBOARD_PROPS = {
	fretRange: [0, 12],
	tuning: FRETBOARD_TUNING.standard.value,
	colorScheme: COLOR_SCHEME.degree.value,
	labelScheme: LABEL_SCHEME.degree.value,
	podContext: {
		value: SCALE.Major.value,
		podType: 'note',
		isList: true
	}
};

export default DEFAULT_FRETBOARD_PROPS;
