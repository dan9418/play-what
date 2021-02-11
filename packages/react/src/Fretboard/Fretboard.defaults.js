import { FRETBOARD_TUNING } from './Fretboard.api';
import FretLabel from './FretLabel';

const DEFAULT_FRETBOARD_PROPS = {
	fretRange: [0, 12],
	tuning: FRETBOARD_TUNING.standard.value,
	FretLabel: FretLabel
};

export default DEFAULT_FRETBOARD_PROPS;
