import ModelUtils from '@pw/core/src/models/Model.utils';
import { DEGREE_VALUES } from "../theory/Degree.constants";
import { IModel, IModelConfig, IModelData, IModelOptions, MODEL, MODEL_ID } from "./Model.constants";
import { CORE_INTERVALS, INTERVAL_QUALITY } from "./Pod/Interval/Interval.constants";
import IntervalUtils from "./Pod/Interval/Interval.utils";
import NoteUtils from "./Pod/Note/Note.utils";
import PodUtils from "./Pod/Pod.utils";
import { CHORD_VALUES } from "./PodList/Chord/Chord.constants";
import PodListUtils from "./PodList/PodList.utils";
import { SCALE_VALUES } from "./PodList/Scale/Scale.constants";

// Name

const getNoteName = (modelValue: IModel) => {
	const reducedValue = PodUtils.reduce(modelValue);

	const d = reducedValue[1];
	const offset = NoteUtils.getAccidentalOffset(reducedValue);
	const accidental = NoteUtils.getAccidentalString(offset, d);
	const spelling = DEGREE_VALUES[d].name;
	const octave = PodUtils.getOctave(modelValue, true);
	return `${spelling}${accidental}${octave}`;
}

const getIntervalName = (modelValue: IModel) => {
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
	const presetName = preset ? preset.name : 'Chord';

	if (!modelOptions || !modelOptions.modelRoot) return presetName;

	const rootName = getNoteName(modelOptions.modelRoot);
	return `${rootName} ${presetName}`;
};

const getScaleName = (modelValue: IModel, modelOptions: IModelOptions) => {
	const preset = SCALE_VALUES.find(v => PodListUtils.areEqual(modelValue, v.value));
	const presetName = preset ? preset.name : 'Scale';

	if (!modelOptions || !modelOptions.modelRoot) return presetName;

	const rootName = getNoteName(modelOptions.modelRoot);
	return `${rootName} ${presetName}`;
};

const getName = (modelId: string, modelValue: IModel, modelOptions: IModelOptions = null) => {
	if (modelOptions && modelOptions.name) return modelOptions.name;

	switch (modelId) {
		case MODEL_ID.Note:
			return getNoteName(modelValue)
		case MODEL_ID.Interval:
			return getIntervalName(modelValue);
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

const getGroupPreview = (modelValue: IModel) => `${modelValue.length} Items`;

const getPodListPreview = (modelValue: IModel, modelOptions: IModelOptions) => {
	const intervalNames = modelValue.map(interval => getIntervalName(interval)).join(', ');

	if (!modelOptions || !modelOptions.modelRoot) return intervalNames;

	const notes = PodUtils.addPodList(modelOptions.modelRoot, modelValue);
	const noteNames = notes.map(note => getNoteName(note)).join(', ');
	return noteNames;
}

const getPreview = (modelId: string, modelValue: IModel, modelOptions: IModelOptions = null) => {
	if (modelOptions && modelOptions.preview) return modelOptions.preview;

	switch (modelId) {
		case MODEL_ID.Group:
			return getGroupPreview(modelValue);
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

const getNotePodProps = (modelValue: IModel, modelOptions: IModelOptions, noteIndex: number, matchOctave) => {
	const pod = getPodAtPitch(MODEL_ID.Note, modelValue, modelOptions, noteIndex, matchOctave);
	if (!pod) return null;
	const color = NoteUtils.getPodColor(pod);
	const label = getNoteName(pod);
	return { color, label };
}

const getIntervalPodProps = (modelValue: IModel, modelOptions: IModelOptions, noteIndex: number, matchOctave) => {
	const pod = getPodAtPitch(MODEL_ID.Interval, modelValue, modelOptions, noteIndex, matchOctave);
	if (!pod) return null;
	const color = IntervalUtils.getPodColor(pod);
	const label = getIntervalName(pod);
	return { color, label };
}

const getPodListProps = (modelValue: IModel, modelOptions: IModelOptions, noteIndex: number, matchOctave) => {
	const pod = getPodAtPitchInList(modelValue, modelOptions, noteIndex, matchOctave);
	const projection = modelOptions.projection;
	const superPod = projection ? getPodAtPitch(MODEL_ID.Chord, projection.podList, null, noteIndex, matchOctave) : null;
	if (!pod && !superPod) return null;
	if (!pod) return {
		color: '#eee',
		label: getIntervalName(superPod)
	};
	const color = IntervalUtils.getPodColor(pod);
	const label = getIntervalName(pod);
	return { color, label };
}

const getPodProps = (modelId: string, modelValue: IModel, modelOptions: IModelOptions, noteIndex, matchOctave = false) => {
	switch (modelId) {
		case MODEL_ID.Note:
			return getNotePodProps(modelValue, modelOptions, noteIndex, matchOctave)
		case MODEL_ID.Interval:
			return getIntervalPodProps(modelValue, modelOptions, noteIndex, matchOctave);
		case MODEL_ID.Chord:
		case MODEL_ID.Scale:
			return getPodListProps(modelValue, modelOptions, noteIndex, matchOctave);
		default:
			return null;
	}
}

// Parse

const getData = (modelConfig: IModelConfig, pathId = 0): IModelData => {
	const { modelId, modelValue, modelOptions } = modelConfig;

	if (modelId === MODEL_ID.Group) {
		return {
			pathId,
			name: (modelOptions && modelOptions.name) ? modelOptions.name : getName(MODEL_ID.Group, modelValue),
			preview: (modelOptions && modelOptions.preview) ? modelOptions.preview : getPreview(MODEL_ID.Group, modelValue),
			caption: MODEL[modelId].name,
			modelRoot: (modelOptions && modelOptions.modelRoot) ? modelOptions.modelRoot : undefined,
			projection: (modelOptions && modelOptions.projection) ? modelOptions.projection : undefined
		}
	}

	const hasRoot = modelOptions && modelOptions.modelRoot;

	let name = null;
	let preview = null;
	let caption = null;

	if (hasRoot) {
		const intervalName = getName(MODEL_ID.Interval, modelValue);
		const intervalPreview = getPreview(MODEL_ID.Interval, modelValue);

		const rootName = getName(MODEL_ID.Note, modelOptions.modelRoot);
		const rootPreview = getPreview(MODEL_ID.Note, modelOptions.modelRoot);

		if (modelId === MODEL_ID.Note || modelId === MODEL_ID.Interval) {
			const note = PodUtils.addPod(modelOptions.modelRoot, modelValue);
			const noteName = getName(MODEL_ID.Note, note, modelOptions);
			const notePreview = getPreview(MODEL_ID.Note, note, modelOptions);
			name = noteName;
			caption = intervalName;
			preview = `${rootPreview} + ${intervalPreview} = ${notePreview} `;
		}
		else {
			const modelName = getName(modelId, modelValue);
			const modelPreview = getPreview(modelId, modelValue, modelOptions);
			name = `${rootName} ${modelName}`;
			caption = MODEL[modelId].name;
			preview = modelPreview;
		}
	}
	else {
		const modelName = getName(modelId, modelValue);
		const modelPreview = getPreview(modelId, modelValue, modelOptions);
		name = modelName;
		caption = MODEL[modelId].name;
		preview = modelPreview;
	}

	return {
		pathId,
		name,
		preview,
		caption,
		modelRoot: (modelOptions && modelOptions.modelRoot) ? modelOptions.modelRoot : undefined,
		projection: (modelOptions && modelOptions.projection) ? modelOptions.projection : undefined
	}
};

const getGroupChildConfigs = (modelValue: IModel, modelOptions: IModelOptions) => {
	return modelValue.map((child, i) => {
		return {
			...child,
			modelOptions: {
				//...modelOptions,
				viewerId: modelOptions.viewerId,
				viewerProp: modelOptions.viewerProps,
				...child.modelOptions
				/*name: child.modelOptions.name,
				preview: child.modelOptions.preview*/
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

const getMetaChildren = (modelConfig: IModelConfig): IModelData => {
	const { modelId, modelValue, modelOptions } = modelConfig;

	if (modelId === MODEL_ID.Note || modelId === MODEL_ID.Interval) return null;
	//const hasRoot = modelOptions && modelOptions.modelRoot;

	const childConfigs = modelId === MODEL_ID.Group ?
		getGroupChildConfigs(modelValue, modelOptions) :
		getListChildConfigs(modelValue, modelOptions, MODEL_ID.Interval);

	const metaChildren = childConfigs.map((config, i) => {
		const data = getData(config, i);
		return {
			config,
			data
		};
	});

	return metaChildren;
};

interface ISupersetOption extends IModelConfig {
	id: string;
	name: string;
}

const getSupersets = (modelId: string, modelValue: IModel, modelOptions: IModelOptions): ISupersetOption[] => {

	const compareValues = v => PodListUtils.containsSubset(v.value, modelValue);

	return SCALE_VALUES.filter(compareValues).map(v => ({
		id: v.name,
		name: v.name,

		modelId: MODEL_ID.Scale,
		modelValue: v.value,
		modelOptions: {
			...(modelOptions || {}),
			name: v.name,
			preview: getPreview(MODEL_ID.Scale, v.value, modelOptions) + v.name
		}
	}));
};

// export

export default {
	getName,
	getPreview,
	getPodAtPitch,
	getPodProps,
	getData,
	getMetaChildren,
	getSupersets
}
