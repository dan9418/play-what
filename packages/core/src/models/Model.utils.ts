import ColorUtils from '../color/Color.utils';
import { DEGREE_PRESETS } from "../theory/Degree.constants";
import ToneUtils from '../tone/Tone.utils';
import TuningUtils from '../tuning/Tuning.utils';
import { IModelConfig, IModelValue, IPod, ModelId, MODEL_MAP, PodType } from "./Model.constants";
import { CORE_INTERVALS, INTERVAL_QUALITY } from "./Pod/Interval/Interval.constants";
import IntervalUtils from "./Pod/Interval/Interval.utils";
import NoteUtils from "./Pod/Note/Note.utils";
import PodUtils from "./Pod/Pod.utils";
import { CHORD_PRESETS } from "./PodList/Chord/Chord.constants";
import PodListUtils from "./PodList/PodList.utils";
import { SCALE_PRESETS } from "./PodList/Scale/Scale.constants";

// Name

interface INoteNameOptions {
	includeOctave?: boolean;
}

export const getNoteName = (modelValue: IPod, options: INoteNameOptions = {}): string => {
	const reducedValue = PodUtils.reduce(modelValue);

	const d = reducedValue[1];
	const offset = NoteUtils.getAccidentalOffset(reducedValue);
	const accidental = NoteUtils.getAccidentalString(offset, d);
	const spelling = DEGREE_PRESETS[d].name;
	const octave = options.includeOctave ? PodUtils.getOctave(modelValue, true) : '';
	return `${spelling}${accidental}${octave}`;
}

interface IIntervalNameOptions {
	useLongName?: boolean;
}

export const getIntervalName = (modelValue: IPod, options: IIntervalNameOptions = {}): string => {
	const reduced = PodUtils.reduce(modelValue)
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

export const getChordName = (modelValue: IPod[], options: IChordNameOptions = {}): string => {
	const preset = CHORD_PRESETS.find(v => PodListUtils.areEqual(modelValue, v.value));
	const presetName = preset ? (options.useLongName ? preset.name : preset.id) : 'Unknown Chord';
	return presetName;
};

interface IScaleNameOptions {
	useLongName?: boolean;
}

export const getScaleName = (modelValue: IPod[], options: IScaleNameOptions = {}): string => {
	const preset = SCALE_PRESETS.find(v => PodListUtils.areEqual(modelValue, v.value));
	const presetName = preset ? (options.useLongName ? preset.name : preset.id) : 'Unknown Scale';
	return presetName;
};

const getName = (modelId: ModelId, modelValue: IPod[]): string => {
	switch (modelId) {
		case ModelId.Note:
			return getNoteName(modelValue[0])
		case ModelId.Interval:
			return getIntervalName(modelValue[0]);
		case ModelId.Chord:
			return getChordName(modelValue);
		case ModelId.Scale:
			return getScaleName(modelValue);
		default:
			return '?';
	}
}

// Preview

interface IPreviewOptions {
	podType?: PodType;
}

const getPreview = (modelValue: IPod[], options: IPreviewOptions = {}): string => {
	const nameFn = options.podType === ModelId.Interval ? getIntervalName : getNoteName;
	const intervalNames = modelValue.map(nameFn as any).join(', ');

	return intervalNames;
}

// getPodProps

interface IPodProps {
	color: string | null,
	fgColor: string | null,
	label: string | null
}

const getNotePodProps = (modelValue: IPod, noteIndex: number, matchOctave): IPodProps => {
	const pod = PodUtils.getPodAtPitch(modelValue, noteIndex, matchOctave);
	if (!pod) return null;
	const color = NoteUtils.getPodColor(pod);
	const fgColor = ColorUtils.getFgColor(color);
	const label = getNoteName(pod);
	return { color, fgColor, label };
}

const getIntervalPodProps = (modelValue: IPod, noteIndex: number, matchOctave): IPodProps => {
	const pod = PodUtils.getPodAtPitch(modelValue, noteIndex, matchOctave);
	if (!pod) return null;
	const color = IntervalUtils.getPodColor(pod);
	const fgColor = ColorUtils.getFgColor(color);
	const label = getIntervalName(pod);
	return { color, fgColor, label };
}

const getPodListProps = (modelValue: IPod[], noteIndex: number, matchOctave = false, isAbsolute = false): IPodProps => {
	const pod = PodListUtils.getPodAtPitch(modelValue, noteIndex, matchOctave);
	if (!pod) return null;

	const reduced = PodUtils.reduce(pod);

	const color = IntervalUtils.getPodColor(reduced);
	const fgColor = ColorUtils.getFgColor(color);

	const label = isAbsolute ? getNoteName(reduced) : getIntervalName(reduced);
	return { color, fgColor, label };
}

const getPodProps = (modelId: ModelId, modelValue: IModelValue, noteIndex: number, matchOctave = false, isAbsolute = false): IPodProps | null => {
	switch (modelId) {
		case ModelId.Note:
			return getNotePodProps(modelValue as IPod, noteIndex, matchOctave)
		case ModelId.Interval:
			return getIntervalPodProps(modelValue as IPod, noteIndex, matchOctave);
		case ModelId.Chord:
		case ModelId.Scale:
			return getPodListProps(modelValue as IPod[], noteIndex, matchOctave, isAbsolute);
		default:
			return null;
	}
}

// Misc

const playSound = (modelConfig: IModelConfig, pathId = 0): void => {
	const { modelId, modelValue } = modelConfig;

	const hasRoot = false;

	const isPod = modelId === ModelId.Note || modelId === ModelId.Interval;

	let pods = isPod ? [modelValue] : modelValue;
	if (hasRoot) {
		pods = PodUtils.addPodList(null, modelValue as IPod[]);
	}
	const f = pods.map(pod => TuningUtils.getFrequency(pod[0]));
	ToneUtils.playSound(f);
};

// export

export default {
	getName,
	getPreview,
	getPodProps,
	playSound
}
