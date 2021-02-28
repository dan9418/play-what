import { DEGREE_VALUES } from "./Degree.constants";
import { ROOT_SCALE } from "./helpers/CommonScale.constants";
import PodUtils from "./helpers/Pod.utils";
import { ACCIDENTAL } from "./Note.constants";

const getPreview = (modelConfig) => 'X Hz';
const getCaption = (modelConfig) => null;

const getMetaChildren = modelConfig => null;


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

const getName = (modelConfig) => {
	const { root, note } = modelConfig;
	const offset = getAccidentalOffset(note);
	const accidental = getAccidentalString(offset, note[1]);
	const spelling = DEGREE_VALUES[note[1]].name;
	return `${spelling}${accidental}`;
}

const getPodAtPitch = (modelConfig, metaChildren, p) => PodUtils.getPodAtPitch(modelConfig.note, p);

export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch,
	getMetaChildren
}
