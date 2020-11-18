import { SCALE } from "@pw/core/src/modules/Presets";

const DEFAULT_KEYBOARD_INPUTS = {
	keyRange: [-12, 12],
	podContext: {
		value: SCALE.Major.value,
		podType: 'note',
		isList: true
	}
};

export default DEFAULT_KEYBOARD_INPUTS;
