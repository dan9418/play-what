import { MODEL_ID } from '@pw/core/src/models/Model.constants';
import { DEFAULT_RELATIVE_CHORD_OPTIONS } from '@pw/core/src/models/PodList/Chord/RelativeChord/RelativeChord.constants';
import { FRETBOARD_TUNING } from './Fretboard.api';

const DEFAULT_FRETBOARD_PROPS = {
	fretRange: [0, 12],
	tuning: FRETBOARD_TUNING.standard.value,
	labelProps: {
		modelId: MODEL_ID.RelativeChord,
		modelValue: [],
		modelOptions: {}
	}
};

export default DEFAULT_FRETBOARD_PROPS;
