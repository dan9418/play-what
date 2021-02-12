import { DEGREE_VALUES } from "./Degree.constants";
import PodUtils from "./helpers/Pod.utils";
import { ROOT_SCALE } from "./helpers/Scale.constants";
import { ACCIDENTAL } from "./Note.constants";

const getPreview = (data) => `Pitch ${data[0]} + Degree ${data[1]}`;
const getCaption = (data) => null;

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

const getName = (pod) => {
	const offset = getAccidentalOffset(pod);
	const accidental = getAccidentalString(offset, pod[1]);
	const spelling = DEGREE_VALUES[pod[1]].name;
	return `${spelling}${accidental}`;
}

const containsPitch = (data, p) => PodUtils.containsPitch(data, p);

export default {
	getName,
	getPreview,
	getCaption,
	containsPitch
}
