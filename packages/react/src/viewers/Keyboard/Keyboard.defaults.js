import { SCALE } from "@pw/core/src/modules/Presets";

const DEFAULT_KEYBOARD_INPUTS = {
	keyLow: -12,
	keyHigh: 12,
	podContext: {
		value: SCALE.Major.value,
		podType: 'note',
		isList: true
	}
};

export default DEFAULT_KEYBOARD_INPUTS;
