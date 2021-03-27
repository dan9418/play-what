import { DEGREE_VALUES } from "../theory/Degree.constants";
import { MODEL, MODEL_ID, IModel, IModelConfig, IModelData, IModelOptions } from "./Model.constants";
import { CORE_INTERVALS, INTERVAL_QUALITY } from "./Pod/Interval/Interval.constants";
import IntervalUtils from "./Pod/Interval/Interval.utils";
import NoteUtils from "./Pod/Note/Note.utils";
import PodUtils from "./Pod/Pod.utils";
import { CHORD_VALUES } from "./PodList/Chord/Chord.constants";
import PodListUtils from "./PodList/PodList.utils";
import { SCALE_VALUES } from "./PodList/Scale/Scale.constants";

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

	const offset = IntervalUtils.getIntervalOffset(modelValue, ivl);

	// determine quality
	let quality = null;
	if (!offset) return ivl.id; // unaltered
	if (offset > 0) quality = INTERVAL_QUALITY.dim; // dim
	if (offset < 0) quality = INTERVAL_QUALITY.aug; // aug

	const count = Math.abs(offset);
	const qualityStr = quality.symbol.repeat(count);

	return `${qualityStr}${d + 1}`;
}

const getChordName = (modelValue: IModel, modelOptions: IModelOptions) => {
	const preset = CHORD_VALUES.find(v => PodListUtils.areEqual(modelValue, v.value));
	const rootName = getNoteName(modelOptions.modelRoot, modelOptions);
	const presetName = preset ? preset.name : 'Chord';
	return `${rootName} ${presetName}`;
};

const getScaleName = (modelValue: IModel, modelOptions: IModelOptions) => {
	const preset = SCALE_VALUES.find(v => PodListUtils.areEqual(modelValue, v.value));
	const rootName = getNoteName(modelOptions.modelRoot, modelOptions);
	const presetName = preset ? preset.name : 'Scale';
	return `${rootName} ${presetName}`;
};

const getName = (modelId: string, modelValue: IModel, modelOptions: IModelOptions) => {
	if (modelOptions.name) return modelOptions.name;

	switch (modelId) {
		case MODEL_ID.Note:
			return getNoteName(modelValue, modelOptions)
		case MODEL_ID.Interval:
			return getIntervalName(modelValue, modelOptions);
		case MODEL_ID.Group:
			return 'Group';
		case MODEL_ID.Chord:
			return getChordName(modelValue, modelOptions);
		case MODEL_ID.Scale:
			return getScaleName(modelValue, modelOptions);
		default:
			return null;
	}
}

// Preview

const getGroupPreview = (modelValue: IModel, modelOptions: IModelOptions) => `${modelValue.length} Items`;

const getPodListPreview = (modelValue: IModel, modelOptions: IModelOptions) => {
	const intervalNames = modelValue.map(interval => getIntervalName(interval, modelOptions)).join(', ');
	const notes = PodUtils.addPodList(modelOptions.modelRoot, modelValue);
	const noteNames = notes.map(note => getNoteName(note, modelOptions)).join(', ');
	return `${intervalNames} (${noteNames})`;
}

const getPreview = (modelId: string, modelValue: IModel, modelOptions: IModelOptions) => {
	if (modelOptions.preview) return modelOptions.preview;

	switch (modelId) {
		case MODEL_ID.Group:
			return getGroupPreview(modelValue, modelOptions);
		case MODEL_ID.Chord:
		case MODEL_ID.Scale:
			return getPodListPreview(modelValue, modelOptions);
		default:
			return JSON.stringify(modelValue);
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
		case MODEL_ID.Chord:
		case MODEL_ID.Scale:
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

const getPodListProps = (modelValue: IModel, modelOptions: IModelOptions, noteIndex: number) => {
	const pod = getPodAtPitchInList(modelValue, modelOptions, noteIndex, false);
	const superset = modelOptions.superset;
	const superPod = superset ? getPodAtPitch(MODEL_ID.Chord, superset.modelValue, superset.modelOptions, noteIndex) : null;
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
		case MODEL_ID.Chord:
		case MODEL_ID.Scale:
			return getPodListProps(modelValue, modelOptions, noteIndex);
		default:
			return null;
	}
}

// Parse

const getGroupChildConfigs = (modelValue: IModel, modelOptions: IModelOptions) => {
	return modelValue.map((child, i) => {
		return {
			...child,
			modelOptions: {
				...modelOptions,
				...child.modelOptions,
				name: child.modelOptions.name,
				preview: child.modelOptions.preview
			}
		}
	});
};

const getListChildConfigs = (modelValue: IModel, modelOptions: IModelOptions, childModelId) => {
	return modelValue.map((pod, i) => {
		return {
			modelId: childModelId,
			modelValue: pod,
			modelOptions: {
				...modelOptions,
				name: undefined,
				preview: undefined
			}
		}
	});
};

const getChildModelId = (modelId: string): string => {
	const model = MODEL[modelId];
	return MODEL_ID.Interval;
}

const getData = (modelConfig: IModelConfig, pathId = 0): IModelData => {
	const { modelId, modelValue, modelOptions } = modelConfig;

	const childConfigs = modelId === MODEL_ID.Group ?
		getGroupChildConfigs(modelValue, modelOptions) :
		modelId === MODEL_ID.Note || modelId === MODEL_ID.Interval ?
			null :
			getListChildConfigs(modelValue, modelOptions, getChildModelId(modelId));

	const metaChildren = childConfigs ? childConfigs.map((config, i) => {
		const data = getData(config, i);
		return {
			config,
			data
		};
	}) : null;

	const name = getName(modelId, modelValue, modelOptions);
	const preview = getPreview(modelId, modelValue, modelOptions);

	return {
		pathId,
		name,
		preview,
		metaChildren,
		modelRoot: modelOptions.modelRoot,
		superset: modelOptions.superset
	}
};

// export

export default {
	getName,
	getPreview,
	getPodAtPitch,
	getPodProps,
	getData
}
