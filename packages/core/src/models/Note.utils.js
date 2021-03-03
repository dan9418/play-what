import ToneUtils from "../tone/Tone.utils";
import TuningUtils from "../tuning/Tuning.utils";
import { DEGREE_VALUES } from "./Degree.constants";
import { ROOT_SCALE } from "./helpers/CommonScale.constants";
import PodUtils from "./helpers/Pod.utils";
import { ACCIDENTAL } from "./Note.constants";

const getPreview = () => 'X Hz';
const getCaption = () => null;
const getMetaChildren = () => null;

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

const getPodAtPitch = (modelValue, metaChildren, p) => PodUtils.getPodAtPitch(modelValue, p);

const playSound = (modelValue) => {
	const frequency = TuningUtils.getFrequency(modelValue[0]);
	ToneUtils.playSound(frequency)
}

export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch,
	getMetaChildren,
	playSound
}
