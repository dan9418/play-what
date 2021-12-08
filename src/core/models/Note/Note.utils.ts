import NumberUtils from "../../general/Number.utils";
import { DEGREE_PRESETS } from "../../theory/Degree.constants";
import { DEFAULT_PITCH_COLOR_SCHEME } from "../../theory/Pitch.constants";
import { ROOT_SCALE } from "../../theory/Theory.constants";
import { IPod } from '../Model.constants';
import ModelUtils from "../Model.utils";
import { ACCIDENTAL } from "./Note.constants";

const getAccidentalOffset = (pod: IPod): number => {
	const [p, d] = pod;

	let offset = p - ROOT_SCALE[d][0];

	// If offset spans more than half an octave, it's going the wrong way
	// TODO need to formally confirm this
	if (offset > 5) offset = offset - 12;
	if (offset < -5) offset = offset + 12;

	// Examples
	// if (d === 0 && offset === 11) offset = offset - 12;
	// if (d === 0 && offset === 10) offset = offset - 12;
	// if (d === 0 && offset === 9) offset = offset - 12;
	// if (d === 1 && offset === 9) offset = offset - 12;
	// if (d === 1 && offset === 8) offset = offset - 12;
	// if (d === 5 && offset === -9) offset = offset + 12;
	// if (d === 6 && offset === -11) offset = offset + 12;
	// if (d === 6 && offset === -10) offset = offset + 12;
	// if (d === 6 && offset === -9) offset = offset + 12;
	//console.log(`${p} - ${ROOT_SCALE[d][0]} = ${offset}, d = ${d}`);

	return offset;
}

const getAccidentalString = (offset: number): string => {
	if (offset > 0) {
		return ACCIDENTAL.sharp.symbol.repeat(offset);
	}
	else if (offset < 0) {
		return ACCIDENTAL.flat.symbol.repeat(-offset);
	}
	return '';
};

const getPodColor = (pod: IPod): string => {
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
	const reducedValue = ModelUtils.reduce(note);

	const d = reducedValue[1];
	const offset = getAccidentalOffset(reducedValue);
	const accidental = getAccidentalString(offset);
	const spelling = DEGREE_PRESETS[d].name;
	const octave = ModelUtils.getOctave(note, true);
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
