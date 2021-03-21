import { DEFAULT_PITCH_COLOR_SCHEME } from "../../../theory/Pitch.constants";
import { ROOT_SCALE } from "../../../theory/Theory.constants";
import { ACCIDENTAL } from "./Note.constants";

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

const getPodColor = pod => {
	if (!pod) return null;
	const [p, d] = pod;
	return DEFAULT_PITCH_COLOR_SCHEME[p];
}

export default {
	getAccidentalOffset,
	getAccidentalString,
	getPodColor
}
