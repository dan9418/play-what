import { DEGREE_VALUES } from "../../../theory/Degree.constants";
import { DEFAULT_PITCH_COLOR_SCHEME } from "../../../theory/Pitch.constants";
import { ROOT_SCALE } from "../../../theory/Theory.constants";
import PodUtils from "../Pod.utils";
import { ACCIDENTAL } from "./Note.constants";

// Wrappers
const getMetaChildren = () => null;
const getPodAtPitch = (modelValue, root, p) => PodUtils.getPodAtPitch(modelValue, p);
const playSound = (modelValue, root) => PodUtils.playSound(modelValue, root);

const getAccidentalOffset = (pod) => {
	const [p, d] = pod;
	let offset = p - ROOT_SCALE[d][0];
	return offset;
}

const getAccidentalString = (offset, d) => {
	// TODO figure out edge case
	if (d === 0 && offset === 11) offset = offset - 12;
	if (d === 6 && offset === -11) offset = offset + 12;
	if (offset > 0) {
		return ACCIDENTAL.sharp.symbol.repeat(offset);
	}
	else if (offset < 0) {
		return ACCIDENTAL.flat.symbol.repeat(-offset);
	}
	return '';
};

const getName = (modelValue, root) => {
	const offset = getAccidentalOffset(modelValue, root);
	const accidental = getAccidentalString(offset, modelValue[1]);
	const spelling = DEGREE_VALUES[modelValue[1]].name;
	return `${spelling}${accidental}`;
}

const getPreview = (modelData) => {
	const [p, d] = modelData;
	return `p = ${p}, d = ${d}`;
};

const getPodColor = pod => {
	if (!pod) return null;
	const [p, d] = pod;
	return DEFAULT_PITCH_COLOR_SCHEME[p];
}

const getPodProps = (modelValue, root, p) => {
	const pod = getPodAtPitch(modelValue, root, p);
	if (!pod) return null;
	const color = getPodColor(pod);
	const label = getName(pod);
	return { color, label };
}

export default {
	getName,
	getPreview,
	getPodAtPitch,
	getMetaChildren,
	playSound,
	getPodColor,
	getPodProps
}
