import { DEGREE_VALUES } from "../theory/Degree.constants";
import { MODEL, MODEL_ID, IModel, IComputedModelDef, IModelDef, IModelOptions } from "./Model.constants";
import { CORE_INTERVALS, INTERVAL_QUALITY } from "./Pod/Interval/Interval.constants";
import IntervalUtils from "./Pod/Interval/Interval.utils";
import NoteUtils from "./Pod/Note/Note.utils";
import PodUtils from "./Pod/Pod.utils";
import { RELATIVE_CHORD_VALUES } from "./PodList/Chord/RelativeChord/RelativeChord.constants";
import PodListUtils from "./PodList/PodList.utils";
import { RELATIVE_SCALE_VALUES } from "./PodList/Scale/RelativeScale/RelativeScale.constants";

// Name

const getNoteName = (modelValue: IModel, modelOptions) => {
	const reducedRoot = PodUtils.reduce(modelOptions.modelRoot);
	const reducedValue = PodUtils.reduce(modelValue);

	const d = reducedValue[1];
	const offset = NoteUtils.getAccidentalOffset(reducedValue);
	const accidental = NoteUtils.getAccidentalString(offset, d);
	const spelling = DEGREE_VALUES[d].name;
	return `${spelling}${accidental}`;
}

const getIntervalName = (modelValue: IModel, modelOptions: IModelOptions) => {
	const [noteIndex, d] = modelValue;
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

const getRelativeChordName = (modelValue: IModel, modelOptions: IModelOptions) => {
	const preset = RELATIVE_CHORD_VALUES.find(v => PodListUtils.areEqual(modelValue, v.value));
	const rootName = getNoteName(modelOptions.modelRoot, modelOptions);
	const presetName = preset ? preset.id : 'Untitled Chord';
	return `${rootName} ${presetName}`;
};

const getRelativeScaleName = (modelValue: IModel, modelOptions: IModelOptions) => {
	const preset = RELATIVE_SCALE_VALUES.find(v => PodListUtils.areEqual(modelValue, v.value));
	const rootName = getNoteName(modelOptions.modelRoot, modelOptions);
	const presetName = preset ? preset.id : 'Untitled Scale';
	return `${rootName} ${presetName}`;
};

const getName = (modelId: string, modelValue: IModel, modelOptions: IModelOptions) => {
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

const getGroupPreview = (modelValue: IModel, modelOptions: IModelOptions) => `${modelValue.length} Items`;

const getRelativePreview = (modelValue: IModel, modelOptions: IModelOptions) => {
	const intervalNames = modelValue.map(interval => getIntervalName(interval, modelOptions)).join(', ');
	const notes = PodUtils.addPodList(modelOptions.modelRoot, modelValue);
	const noteNames = notes.map(note => getNoteName(note, modelOptions)).join(', ');
	return `${intervalNames} (${noteNames})`;
}

const getAbsolutePreview = (modelValue: IModel, modelOptions: IModelOptions) => modelValue.map(note => getNoteName(note, modelOptions)).join(', ');

const getPreview = (modelId: string, modelValue: IModel, modelOptions: IModelOptions) => {
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

const getPodAtPitchInSingle = (modelValue: IModel, modelOptions: IModelOptions, noteIndex: number, matchOctave: boolean) => PodUtils.getPodAtPitch(modelValue, noteIndex, modelOptions, matchOctave);

const getPodAtPitchInList = (modelValue: IModel, modelOptions: IModelOptions, noteIndex: number, matchOctave: boolean) => PodListUtils.getPodAtPitch(modelValue, noteIndex, modelOptions, matchOctave);

const getPodAtPitch = (modelId: string, modelValue: IModel, modelOptions: IModelOptions, noteIndex: number, matchOctave?: boolean) => {
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

const getNotePodProps = (modelValue: IModel, modelOptions: IModelOptions, noteIndex: number) => {
	const pod = getPodAtPitch(MODEL_ID.Note, modelValue, modelOptions, noteIndex);
	if (!pod) return null;
	const color = NoteUtils.getPodColor(pod);
	const label = getNoteName(pod, modelOptions);
	return { color, label };
}

const getIntervalPodProps = (modelValue: IModel, modelOptions: IModelOptions, noteIndex: number) => {
	const pod = getPodAtPitch(MODEL_ID.Interval, modelValue, modelOptions, noteIndex);
	if (!pod) return null;
	const color = IntervalUtils.getPodColor(pod);
	const label = getIntervalName(pod, modelOptions);
	return { color, label };
}

const getAbsolutePodProps = (modelValue: IModel, modelOptions: IModelOptions, noteIndex: number) => {
	const pod = getPodAtPitchInList(modelValue, modelOptions, noteIndex, false);
	if (!pod) return null;
	const color = NoteUtils.getPodColor(pod);
	const label = getNoteName(pod, modelOptions);
	return { color, label };
}

const getRelativePodProps = (modelValue: IModel, modelOptions: IModelOptions, noteIndex: number) => {
	const pod = getPodAtPitchInList(modelValue, modelOptions, noteIndex, false);
	const superset = modelOptions.superset;
	const superPod = superset ? getPodAtPitch(MODEL_ID.RelativeChord, superset.modelValue, superset.modelOptions, noteIndex) : null;
	if (!pod && !superPod) return null;
	if (!pod) return {
		color: 'white',
		label: getIntervalName(superPod, modelOptions)
	};
	const color = IntervalUtils.getPodColor(pod);
	const label = getIntervalName(pod, modelOptions);
	return { color, label };
}

const getPodProps = (modelId: string, modelValue: IModel, modelOptions: IModelOptions, noteIndex) => {
	switch (modelId) {
		case MODEL_ID.Note:
			return getNotePodProps(modelValue, modelOptions, noteIndex)
		case MODEL_ID.Interval:
			return getIntervalPodProps(modelValue, modelOptions, noteIndex);
		case MODEL_ID.RelativeChord:
		case MODEL_ID.RelativeScale:
			return getRelativePodProps(modelValue, modelOptions, noteIndex);
		case MODEL_ID.AbsoluteChord:
		case MODEL_ID.AbsoluteScale:
			return getAbsolutePodProps(modelValue, modelOptions, noteIndex);
		default:
			return null;
	}
}

// Meta Children

const getGroupMetaChildren = (modelValue: IModel, modelOptions: IModelOptions) => {
	return modelValue.map((child, i) => {
		const calcModelOptions = { ...modelOptions, ...child.modelOptions } || modelOptions;
		const name = child.name ? child.name : getName(child.modelId, child.modelValue, calcModelOptions);
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

const getListMetaChildren = (modelValue: IModel, modelOptions: IModelOptions, childModelId) => {
	return modelValue.map((pod, i) => {
		return {
			pathId: i,
			name: getName(childModelId, pod, modelOptions),
			preview: getPreview(childModelId, pod, modelOptions),
			modelId: childModelId,
			modelValue: pod,
			modelOptions
		}
	});
};

const getMetaChildren = (modelId: string, modelValue: IModel, modelOptions: IModelOptions) => {
	switch (modelId) {
		case MODEL_ID.Group:
			return getGroupMetaChildren(modelValue, modelOptions);
		case MODEL_ID.RelativeChord:
		case MODEL_ID.RelativeScale:
			return getListMetaChildren(modelValue, modelOptions, MODEL_ID.Interval);
		case MODEL_ID.AbsoluteChord:
		case MODEL_ID.AbsoluteScale:
			return getListMetaChildren(modelValue, modelOptions, MODEL_ID.Note);
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
