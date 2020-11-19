import { COLOR_SCHEME } from '@pw/color/src/ColorConstants';
import { SCALE } from '@pw/core/src/modules/Presets';
import { FRETBOARD_TUNING } from './Fretboard.api';

const DEFAULT_FRETBOARD_PROPS = {
	fretRange: [0, 12],
	tuning: FRETBOARD_TUNING.standard.value,
	colorScheme: COLOR_SCHEME.degree.value,
	podContext: {
		value: SCALE.Major.value,
		podType: 'note',
		isList: true
	}
};

export default DEFAULT_FRETBOARD_PROPS;
