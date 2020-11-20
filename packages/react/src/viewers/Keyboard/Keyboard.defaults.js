import { COLOR_SCHEME } from "@pw/color/src/ColorConstants";
import { LABEL_SCHEME } from "@pw/color/src/LabelConstants";
import { SCALE } from "@pw/core/src/modules/Presets";

const DEFAULT_KEYBOARD_PROPS = {
	keyRange: [-12, 12],
	colorScheme: COLOR_SCHEME.degree.value,
	labelScheme: LABEL_SCHEME.pitch.value,
	podContext: {
		value: SCALE.Major.value,
		podType: 'note',
		isList: true
	}
};

export default DEFAULT_KEYBOARD_PROPS;
