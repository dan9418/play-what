import { MODEL_ID } from '@pw/core/src/models/helpers/Model.constants';
import { FRETBOARD_TUNING } from './Fretboard.api';
import FretLabel from './FretLabel';

const DEFAULT_FRETBOARD_PROPS = {
	fretRange: [0, 12],
	tuning: FRETBOARD_TUNING.standard.value,
	FretLabel: FretLabel,
	data: [0, 0],
	modelId: MODEL_ID.Note
};

export default DEFAULT_FRETBOARD_PROPS;
