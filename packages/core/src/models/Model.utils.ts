import ColorUtils from '../color/Color.utils';
import { DEGREE_PRESETS } from "../theory/Degree.constants";
import ToneUtils from '../tone/Tone.utils';
import TuningUtils from '../tuning/Tuning.utils';
import { IPod, PodType } from "./Model.constants";
import { CORE_INTERVALS, INTERVAL_QUALITY } from "./Pod/Interval/Interval.constants";
import IntervalUtils from "./Pod/Interval/Interval.utils";
import NoteUtils from "./Pod/Note/Note.utils";
import PodUtils from "./Pod/Pod.utils";
import { CHORD_PRESETS } from "./PodList/Chord/Chord.constants";
import PodListUtils from "./PodList/PodList.utils";
import { SCALE_PRESETS } from "./PodList/Scale/Scale.constants";

// Utils

const joinList = (list: any, textFn: Function): string => {
	return list.map(textFn).join(', ');
}

// Name

interface INoteNameOptions {
	includeOctave?: boolean;
}

export const getNoteName = (note: any, isList = false, options: INoteNameOptions = {}): string => {
	if (isList) return joinList(note, getNoteName);

	const reducedValue = PodUtils.reduce(note);

	const d = reducedValue[1];
	const offset = NoteUtils.getAccidentalOffset(reducedValue);
	const accidental = NoteUtils.getAccidentalString(offset, d);
	const spelling = DEGREE_PRESETS[d].name;
	const octave = options.includeOctave ? PodUtils.getOctave(note, true) : '';
	return `${spelling}${accidental}${octave}`;
}

interface IIntervalNameOptions {
	useLongName?: boolean;
}

export const getIntervalName = (interval: IPod, isList = false, options: IIntervalNameOptions = {}): string => {
	const reduced = PodUtils.reduce(interval)
	const [noteIndex, d] = reduced;
	const degreeIntervals = CORE_INTERVALS[d];
	if (!degreeIntervals) return '?';

	const pIvl = degreeIntervals[0];
	const loIvl = pIvl;
	const hiIvl = degreeIntervals[degreeIntervals.length - 1];

	// determine core interval
	let ivl = null;
	if (!degreeIntervals.length) ivl === pIvl; // perfect
	else if (noteIndex <= loIvl.value[0]) ivl = loIvl; // minor
	else if (noteIndex >= hiIvl.value[0]) ivl = hiIvl; // major

	const offset = IntervalUtils.getIntervalOffset(reduced, ivl);

	// determine quality
	let quality = null;
	if (!offset) return ivl.id; // unaltered
	if (offset > 0) quality = INTERVAL_QUALITY.dim; // dim
	if (offset < 0) quality = INTERVAL_QUALITY.aug; // aug

	const count = Math.abs(offset);
	const qualityStr = quality.symbol.repeat(count);

	return `${qualityStr}${d + 1}`;
}

interface IChordNameOptions {
	useLongName?: boolean;
}

export const getChordName = (chord: IPod[], options: IChordNameOptions = {}): string => {
	const preset = CHORD_PRESETS.find(v => PodListUtils.areEqual(chord, v.value));
	const presetName = preset ? (options.useLongName ? preset.name : preset.id) : 'Unknown Chord';
	return presetName;
};

interface IScaleNameOptions {
	useLongName?: boolean;
}

export const getScaleName = (scale: IPod[], options: IScaleNameOptions = {}): string => {
	const preset = SCALE_PRESETS.find(v => PodListUtils.areEqual(scale, v.value));
	const presetName = preset ? (options.useLongName ? preset.name : preset.id) : 'Unknown Scale';
	return presetName;
};

// getPodProps

interface IPodProps {
	color: string | null,
	fgColor: string | null,
	label: string | null
}

interface IPodPropsOptions {
	matchOctave?: boolean;
	podType?: PodType
}

const getPodProps = (podList: IPod[], noteIndex: number, options: IPodPropsOptions = { podType: PodType.Interval }): IPodProps => {
	const pod = PodListUtils.getPodAtPitch(podList, noteIndex, options.matchOctave);
	if (!pod) return null;

	const reduced = PodUtils.reduce(pod);

	const color = IntervalUtils.getPodColor(reduced);
	const fgColor = ColorUtils.getFgColor(color);

	const label = options.podType === PodType.Interval ? getIntervalName(reduced) : getNoteName(reduced);
	return { color, fgColor, label };
}


// Misc

const playSound = (notes): void => {
	const f = notes.map(pod => TuningUtils.getFrequency(pod[0]));
	ToneUtils.playSound(f);
};

// export

export default {
	getNoteName,
	getIntervalName,
	getNotePreview,
	getIntervalPreview,
	getPodProps,
	playSound
}
