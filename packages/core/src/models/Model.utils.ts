import ColorUtils from '../color/Color.utils';
import NumberUtils from '../general/Number.utils';
import { DEGREE_PRESETS } from "../theory/Degree.constants";
import ToneUtils from '../tone/Tone.utils';
import TuningUtils from '../tuning/Tuning.utils';
import { IModelConfig, IModelValue, IPod, ModelId, MODEL_MAP } from "./Model.constants";
import { CORE_INTERVALS, INTERVAL_QUALITY } from "./Pod/Interval/Interval.constants";
import IntervalUtils from "./Pod/Interval/Interval.utils";
import NoteUtils from "./Pod/Note/Note.utils";
import PodUtils from "./Pod/Pod.utils";
import { CHORD_PRESETS } from "./PodList/Chord/Chord.constants";
import PodListUtils from "./PodList/PodList.utils";
import { SCALE_PRESETS } from "./PodList/Scale/Scale.constants";

// Name

const getNoteName = (modelValue: IPod): string => {
	const reducedValue = PodUtils.reduce(modelValue);

	const d = reducedValue[1];
	const offset = NoteUtils.getAccidentalOffset(reducedValue);
	const accidental = NoteUtils.getAccidentalString(offset, d);
	const spelling = DEGREE_PRESETS[d].name;
	const octave = '';//PodUtils.getOctave(modelValue, true);
	return `${spelling}${accidental}${octave}`;
}

export const getIntervalName = (modelValue: IPod): string => {
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

const getChordName = (modelValue: IPod[]) => {
	const preset = CHORD_PRESETS.find(v => PodListUtils.areEqual(modelValue, v.value));
	const presetName = preset ? preset.name : 'Chord';

	return presetName;

	//const rootName = getNoteName(modelRoot);
	//return `${rootName} ${presetName}`;
};

const getScaleName = (modelValue: IPod[], isShort = false) => {
	const preset = SCALE_PRESETS.find(v => PodListUtils.areEqual(modelValue, v.value));
	const presetName = preset ? preset.name : 'Scale';

	return presetName;

	//const rootName = getNoteName(modelRoot);
	//return `${rootName} ${presetName}`;
};

const getName = (modelId: ModelId, modelValue: IModelValue): string => {
	switch (modelId) {
		case ModelId.Note:
			return getNoteName(modelValue as IPod)
		case ModelId.Interval:
			return getIntervalName(modelValue as IPod);
		case ModelId.Chord:
			return getChordName(modelValue as IPod[]);
		case ModelId.Scale:
			return getScaleName(modelValue as IPod[]);
		default:
			return '?';
	}
}

// Preview

const getPodListPreview = (modelValue: IPod[], isAbsolute = false): string => {
	const nameFn = isAbsolute ? getNoteName : getIntervalName;
	const intervalNames = modelValue.map(pod => nameFn(pod)).join(', ');

	return intervalNames;
}

const getPreview = (modelId: ModelId, modelValue: IModelValue, modelRoot?: IPod): string => {
	const modelConfig = MODEL_MAP.get(modelId);
	let pods = (modelConfig.isCompound ? modelValue : [modelValue]) as IPod[];
	if (modelRoot) {
		pods = PodUtils.addPodList(modelRoot, pods);
	}
	switch (modelId) {
		case ModelId.Chord:
		case ModelId.Scale:
			return getPodListPreview(pods, !!modelRoot);
		default:
			return JSON.stringify(pods);
	}
}

// getPodAtPitch

const getPodAtPitchInSingle = (modelValue: IPod, noteIndex: number, matchOctave: boolean) => PodUtils.getPodAtPitch(modelValue, noteIndex, matchOctave);

const getPodAtPitchInList = (modelValue: IPod[], noteIndex: number, matchOctave: boolean) => PodListUtils.getPodAtPitch(modelValue, noteIndex, matchOctave);

const getPodAtPitch = (modelId: ModelId, modelValue: IModelValue, noteIndex: number, matchOctave?: boolean): IPod | null => {
	switch (modelId) {
		case ModelId.Note:
		case ModelId.Interval:
			return getPodAtPitchInSingle(modelValue as IPod, noteIndex, matchOctave);
		case ModelId.Chord:
		case ModelId.Scale:
			return getPodAtPitchInList(modelValue as IPod[], noteIndex, matchOctave);
		default:
			return null;
	}
}

// getPodProps

interface IPodProps {
	color: string | null,
	fgColor: string | null,
	label: string | null
}

const getNotePodProps = (modelValue: IPod, noteIndex: number, matchOctave): IPodProps => {
	const pod = getPodAtPitch(ModelId.Note, modelValue, noteIndex, matchOctave);
	if (!pod) return null;
	const color = NoteUtils.getPodColor(pod);
	const fgColor = ColorUtils.getFgColor(color);
	const label = getNoteName(pod);
	return { color, fgColor, label };
}

const getIntervalPodProps = (modelValue: IPod, noteIndex: number, matchOctave): IPodProps => {
	const pod = getPodAtPitch(ModelId.Interval, modelValue, noteIndex, matchOctave);
	if (!pod) return null;
	const color = IntervalUtils.getPodColor(pod);
	const fgColor = ColorUtils.getFgColor(color);
	const label = getIntervalName(pod);
	return { color, fgColor, label };
}

const getPodListProps = (modelValue: IPod[], noteIndex: number, matchOctave = false, isAbsolute = false): IPodProps => {
	const pod = getPodAtPitchInList(modelValue, noteIndex, matchOctave);
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
	getPodAtPitch,
	getPodProps,
	playSound
}
