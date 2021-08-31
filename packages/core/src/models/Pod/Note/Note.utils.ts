import NumberUtils from "../../../general/Number.utils";
import { DEGREE_PRESETS } from "../../../theory/Degree.constants";
import { DEFAULT_PITCH_COLOR_SCHEME } from "../../../theory/Pitch.constants";
import { ROOT_SCALE } from "../../../theory/Theory.constants";
import { IPod } from "../../Model.constants";
import PodUtils from "../Pod.utils";
import { ACCIDENTAL } from "./Note.constants";

const getAccidentalOffset = (pod, reduce = false) => {
	const [p, d] = pod;
	const offset = p - ROOT_SCALE[d][0];
	return reduce ? NumberUtils.modulo(offset, 12) : offset;
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

const createPod = (degree: number, accidental: number, octave: number): IPod => {
	const pitchClass = NumberUtils.modulo(ROOT_SCALE[degree][0] + accidental, 12);
	const pitch = (octave * 12) + pitchClass;
	return [pitch, degree];
}

interface INoteNameOptions {
	includeOctave?: boolean;
}

interface INoteNameParts {
	spelling: string;
	accidental: string;
	octave: number;
}

export const getNameParts = (note: IPod, options: INoteNameOptions = {}): INoteNameParts => {
	const reducedValue = PodUtils.reduce(note);

	const d = reducedValue[1];
	const offset = getAccidentalOffset(reducedValue);
	const accidental = getAccidentalString(offset, d);
	const spelling = DEGREE_PRESETS[d].name;
	const octave = PodUtils.getOctave(note, true);
	return { spelling, accidental, octave };
}

export const getName = (note: IPod, options: INoteNameOptions = {}): string => {
	const { spelling, accidental, octave } = getNameParts(note, options);

	const o = options.includeOctave ? octave : '';
	return `${spelling}${accidental}${o}`;
}

export default {
	getAccidentalOffset,
	getAccidentalString,
	getPodColor,
	createPod,
	getName,
	getNameParts
}
