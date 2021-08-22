import { DEGREE_PRESETS } from "../../../theory/Degree.constants";
import { DEFAULT_PITCH_COLOR_SCHEME } from "../../../theory/Pitch.constants";
import { ROOT_SCALE } from "../../../theory/Theory.constants";
import { IPod } from "../../Model.constants";
import PodUtils from "../Pod.utils";
import { ACCIDENTAL } from "./Note.constants";

const getAccidentalOffset = (pod) => {
	const [p, d] = pod;
	const offset = p - ROOT_SCALE[d][0];
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

const createPod = (degree, accidental, octave) => {
	const pitchClass = ROOT_SCALE[degree][0] + accidental;
	const pitch = (octave * 12) + pitchClass;
	return [pitch, degree];
}

interface INoteNameOptions {
	includeOctave?: boolean;
}

export const getName = (note: IPod, options: INoteNameOptions = {}): string => {
	const reducedValue = PodUtils.reduce(note);

	const d = reducedValue[1];
	const offset = getAccidentalOffset(reducedValue);
	const accidental = getAccidentalString(offset, d);
	const spelling = DEGREE_PRESETS[d].name;
	const octave = options.includeOctave ? PodUtils.getOctave(note, true) : '';
	return `${spelling}${accidental}${octave}`;
}

export default {
	getAccidentalOffset,
	getAccidentalString,
	getPodColor,
	createPod,
	getName
}
