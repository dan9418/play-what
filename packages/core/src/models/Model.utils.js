import { DEGREE_VALUES } from "../theory/Degree.constants";
import { MODEL, MODEL_ID } from "./Model.constants";
import { CORE_INTERVALS, INTERVAL_QUALITY } from "./Pod/Interval/Interval.constants";
import IntervalUtils from "./Pod/Interval/Interval.utils";
import NoteUtils from "./Pod/Note/Note.utils";
import PodUtils from "./Pod/Pod.utils";
import { RELATIVE_CHORD_VALUES } from "./PodList/Chord/RelativeChord/RelativeChord.constants";
import PodListUtils from "./PodList/PodList.utils";
import { RELATIVE_SCALE_VALUES } from "./PodList/Scale/RelativeScale/RelativeScale.constants";

// Name

const getNoteName = (modelValue, modelOptions) => {
	const reducedRoot = PodUtils.reduce(modelOptions.modelRoot);
	const reducedValue = PodUtils.reduce(modelValue);

	const d = reducedValue[1];
	const offset = NoteUtils.getAccidentalOffset(reducedValue, reducedRoot);
	const accidental = NoteUtils.getAccidentalString(offset, d);
	const spelling = DEGREE_VALUES[d].name;
	return `${spelling}${accidental}`;
}

const getIntervalName = (modelValue) => {
	const [p, d] = modelValue;
	const degreeIntervals = CORE_INTERVALS[d];
	if (!degreeIntervals) return '?';

	const pIvl = degreeIntervals[0];
	const loIvl = pIvl;
	const hiIvl = degreeIntervals[degreeIntervals.length - 1];

	// determine core interval
	let ivl = null;
	if (!degreeIntervals.length) ivl === pIvl; // perfect
	else if (p <= loIvl.value[0]) ivl = loIvl; // minor
	else if (p >= hiIvl.value[0]) ivl = hiIvl; // major

	let offset = IntervalUtils.getIntervalOffset(modelValue, ivl);

	// determine quality
	let quality = null;
	if (!offset) return ivl.id; // unaltered
	if (offset > 0) quality = INTERVAL_QUALITY.dim; // dim
	if (offset < 0) quality = INTERVAL_QUALITY.aug; // aug

	const count = Math.abs(offset);
	const qualityStr = quality.symbol.repeat(count);

	return `${qualityStr}${d + 1}`;
}

const getRelativeChordName = (modelValue, modelOptions) => {
	const preset = RELATIVE_CHORD_VALUES.find(v => PodListUtils.areEqual(modelValue, v.value));
	const rootName = NoteUtils.getName(modelOptions, modelOptions);
	const presetName = preset ? preset.id : 'Untitled Chord';
	return `${rootName} ${presetName}`;
};

const getRelativeScaleName = (modelValue, modelOptions) => {
	const preset = RELATIVE_SCALE_VALUES.find(v => PodListUtils.areEqual(modelValue, v.value));
	const rootName = NoteUtils.getName(modelOptions, modelOptions);
	const presetName = preset ? preset.id : 'Untitled Scale';
	return `${rootName} ${presetName}`;
};

const getName = (modelId, modelValue, modelOptions) => {
	switch (modelId) {
	case MODEL_ID.Note:
		return getNoteName(modelValue, modelOptions)
	case MODEL_ID.Interval:
		return getIntervalName(modelValue, modelOptions);
	case MODEL_ID.Group:
		return 'Group';
	case MODEL_ID.RelativeChord:
		return getRelativeChordName(modelValue, modelOptions);
	case MODEL_ID.RelativeScale:
		return getRelativeScaleName(modelValue, modelOptions);
	case MODEL_ID.AbsoluteChord:
		return 'Chord';
	case MODEL_ID.AbsoluteScale:
		return 'Scale'
	default:
		return null;
	}
}

// Preview

const getGroupPreview = (modelValue) => `${modelValue.length} Items`;

const getRelativePreview = (modelValue, modelOptions) => {
	const intervalNames = modelValue.map(interval => getIntervalName(interval, modelOptions)).join(', ');
	const notes = PodUtils.addPodList(modelOptions.modelRoot, modelValue);
	const noteNames = notes.map(note => getNoteName(note, modelOptions)).join(', ');
	return `${intervalNames} (${noteNames})`;
}

const getAbsolutePreview = (modelValue, modelOptions) => modelValue.map(note => getNoteName(note, modelOptions)).join(', ');

const getPreview = (modelId, modelValue, modelOptions) => {
	switch (modelId) {
	case MODEL_ID.Group:
		return getGroupPreview(modelValue, modelOptions);
	case MODEL_ID.RelativeChord:
	case MODEL_ID.RelativeScale:
		return getRelativePreview(modelValue, modelOptions);
	case MODEL_ID.AbsoluteChord:
	case MODEL_ID.AbsoluteScale:
		return getAbsolutePreview(modelValue, modelOptions);
	default:
		return null;
	}
}

// getPodAtPitch

const getPodAtPitchInSingle = (modelValue, modelOptions, p, matchOctave) => PodUtils.getPodAtPitch(modelValue, p, modelOptions, matchOctave);

const getPodAtPitchInList = (modelValue, modelOptions, p, matchOctave) => PodListUtils.getPodAtPitch(modelValue, p, modelOptions, matchOctave);

const getPodAtPitch = (modelId, modelValue, modelOptions, noteIndex, matchOctave) => {
	switch (modelId) {
	case MODEL_ID.Note:
	case MODEL_ID.Interval:
		return getPodAtPitchInSingle(modelValue, modelOptions, noteIndex, matchOctave);
	case MODEL_ID.RelativeChord:
	case MODEL_ID.RelativeScale:
	case MODEL_ID.AbsoluteChord:
	case MODEL_ID.AbsoluteScale:
		return getPodAtPitchInList(modelValue, modelOptions, noteIndex, matchOctave);
	default:
		return null;
	}
}

// getPodProps

const getNotePodProps = (modelValue, modelOptions, p) => {
	const pod = getPodAtPitch(modelValue, modelOptions, p);
	if (!pod) return null;
	const color = NoteUtils.getPodColor(pod);
	const label = getNoteName(pod);
	return { color, label };
}

const getIntervalPodProps = (modelValue, modelOptions, p) => {
	const pod = getPodAtPitch(modelValue, modelOptions, p);
	if (!pod) return null;
	const color = IntervalUtils.getPodColor(pod);
	const label = getIntervalName(pod);
	return { color, label };
}

const getAbsolutePodProps = (modelValue, modelOptions, p) => {
	const pod = getPodAtPitchInList(modelValue, modelOptions, p);
	if (!pod) return null;
	const color = NoteUtils.getPodColor(pod);
	const label = getNoteName(pod);
	return { color, label };
}

const getRelativePodProps = (modelValue, modelOptions, p, superset) => {
	const pod = getPodAtPitchInList(modelValue, modelOptions, p);
	const superPod = superset ? getPodAtPitch(superset.modelValue, superset.modelOptions, p) : null;
	if (!pod && !superPod) return null;
	if (!pod) return {
		color: 'white',
		label: getIntervalName(superPod)
	};
	const color = IntervalUtils.getPodColor(pod);
	const label = getIntervalName(pod);
	return { color, label };
}

const getPodProps = (modelId, modelValue, modelOptions, noteIndex, superset) => {
	switch (modelId) {
	case MODEL_ID.Note:
		return getNotePodProps(modelValue, modelOptions, noteIndex, superset)
	case MODEL_ID.Interval:
		return getIntervalPodProps(modelValue, modelOptions, noteIndex, superset);
	case MODEL_ID.RelativeChord:
	case MODEL_ID.RelativeScale:
		return getRelativePodProps(modelValue, modelOptions, noteIndex, superset);
	case MODEL_ID.AbsoluteChord:
	case MODEL_ID.AbsoluteScale:
		return getAbsolutePodProps(modelValue, modelOptions, noteIndex, superset);
	default:
		return null;
	}
}

// Meta Children

const getGroupMetaChildren = (modelValue, modelOptions) => {
	return modelValue.map((child, i) => {
		const model = MODEL[child.modelId];
		const calcModelOptions = child.modelOptions || modelOptions;
		const name = child.name ? child.name : model.utils.getName(child.modelValue, calcModelOptions);
		return {
			...child,
			pathId: i,
			name,
			preview: getPreview(child.modelId, child.modelValue, calcModelOptions),
			modelValue: child.modelValue,
			modelOptions: calcModelOptions
		}
	});
};

const getAbsoluteMetaChildren = (modelValue, modelOptions) => PodListUtils.getMetaChildren(modelValue, modelOptions, MODEL_ID.Note);

const getRelativeMetaChildren = (modelValue, modelOptions) => PodListUtils.getMetaChildren(modelValue, modelOptions, MODEL_ID.Interval);

const getMetaChildren = (modelId, modelValue, modelOptions) => {
	switch (modelId) {
	case MODEL_ID.Group:
		return getGroupMetaChildren(modelValue, modelOptions);
	case MODEL_ID.RelativeChord:
	case MODEL_ID.RelativeScale:
		return getRelativeMetaChildren(modelValue, modelOptions);
	case MODEL_ID.AbsoluteChord:
	case MODEL_ID.AbsoluteScale:
		return getAbsoluteMetaChildren(modelValue, modelOptions);
	default:
		return null;
	}
}

// export

export default {
	getName,
	getPreview,
	getPodAtPitch,
	getPodProps,
	getMetaChildren
}
