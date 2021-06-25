import { ModelId } from '@pw/core/src/models/Model.constants';
import { FRETBOARD_TUNING } from './Fretboard.api';

const DEFAULT_FRETBOARD_PROPS = {
	fretRange: [0, 12],
	tuning: FRETBOARD_TUNING.standard.value,
	labelProps: {
		modelId: ModelId.Chord,
		modelValue: []
	}
};

export default DEFAULT_FRETBOARD_PROPS;
