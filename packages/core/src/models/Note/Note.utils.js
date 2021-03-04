import { DEGREE_VALUES } from "../../theory/Degree.constants";
import { ROOT_SCALE } from "../../theory/Theory.constants";
import PodUtils from "../Pod/Pod.utils";
import { ACCIDENTAL } from "./Note.constants";

// Wrappers
const getMetaChildren = () => null;
const getPodAtPitch = (modelValue, modelOptions, metaChildren, p) => PodUtils.getPodAtPitch(modelValue, p);
const playSound = (modelValue, modelOptions) => PodUtils.playSound(modelValue, modelOptions.root);

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

const getName = (modelValue) => {
	const offset = getAccidentalOffset(modelValue);
	const accidental = getAccidentalString(offset, modelValue[1]);
	const spelling = DEGREE_VALUES[modelValue[1]].name;
	return `${spelling}${accidental}`;
}

const getPreview = () => 'X Hz';

export default {
	getName,
	getPreview,
	getPodAtPitch,
	getMetaChildren,
	playSound
}
