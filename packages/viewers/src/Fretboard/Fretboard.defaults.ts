import { FRETBOARD_TUNING } from './Fretboard.api';

const DEFAULT_FRETBOARD_PROPS = {
	fretRange: [0, 12],
	tuning: FRETBOARD_TUNING.standard.value,
	labelProps: {
		root: [0, 0],
		intervals: [],
		notes: []
	}
};

export default DEFAULT_FRETBOARD_PROPS;
