import { IModelDef } from '@pw/core/src/models/Model.constants';
import { DEGREE_VALUES } from "../theory/Degree.constants";
import { IPod, IModelConfig, IModelData, IModelOptions, IModelValue, MODEL, ModelId } from "./Model.constants";
import { CORE_INTERVALS, INTERVAL_QUALITY } from "./Pod/Interval/Interval.constants";
import IntervalUtils from "./Pod/Interval/Interval.utils";
import NoteUtils from "./Pod/Note/Note.utils";
import PodUtils from "./Pod/Pod.utils";
import { CHORD_PRESETS } from "./PodList/Chord/Chord.constants";
import PodListUtils from "./PodList/PodList.utils";
import { SCALE_PRESETS } from "./PodList/Scale/Scale.constants";

// Name

const getNoteName = (modelValue: IPod) => {
	const reducedValue = PodUtils.reduce(modelValue);

	const d = reducedValue[1];
	const offset = NoteUtils.getAccidentalOffset(reducedValue);
	const accidental = NoteUtils.getAccidentalString(offset, d);
	const spelling = DEGREE_VALUES[d].name;
	const octave = PodUtils.getOctave(modelValue, true);
	return `${spelling}${accidental}${octave}`;
}

const getIntervalName = (modelValue: IPod) => {
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

const getChordName = (modelValue: IPod[], modelOptions: IModelOptions) => {
	const preset = CHORD_PRESETS.find(v => PodListUtils.areEqual(modelValue, v.value));
	const presetName = preset ? preset.name : 'Chord';

	if (!modelOptions || !modelOptions.modelRoot) return presetName;

	const rootName = getNoteName(modelOptions.modelRoot);
	return `${rootName} ${presetName}`;
};

const getScaleName = (modelValue: IPod[], modelOptions: IModelOptions) => {
	const preset = SCALE_PRESETS.find(v => PodListUtils.areEqual(modelValue, v.value));
	const presetName = preset ? preset.name : 'Scale';

	if (!modelOptions || !modelOptions.modelRoot) return presetName;

	const rootName = getNoteName(modelOptions.modelRoot);
	return `${rootName} ${presetName}`;
};

const getName = (modelId: ModelId, modelValue: IModelValue, modelOptions: IModelOptions = null): string => {
	if (modelOptions && modelOptions.name) return modelOptions.name;

	switch (modelId) {
		case ModelId.Note:
			return getNoteName(modelValue as IPod)
		case ModelId.Interval:
			return getIntervalName(modelValue as IPod);
		case ModelId.Group:
			return 'Group';
		case ModelId.Chord:
			return getChordName(modelValue as IPod[], modelOptions);
		case ModelId.Scale:
			return getScaleName(modelValue as IPod[], modelOptions);
		default:
			return '?';
	}
}

// Preview

const getGroupPreview = (modelValue: IModelValue): string => `${modelValue.length} Items`;

const getPodListPreview = (modelValue: IPod[], modelOptions: IModelOptions): string => {
	const intervalNames = modelValue.map(interval => getIntervalName(interval)).join(', ');

	if (!modelOptions || !modelOptions.modelRoot) return intervalNames;

	const notes = PodUtils.addPodList(modelOptions.modelRoot, modelValue);
	const noteNames = notes.map(note => getNoteName(note)).join(', ');
	return noteNames;
}

const getPreview = (modelId: ModelId, modelValue: IModelValue, modelOptions: IModelOptions = null): string => {
	if (modelOptions && modelOptions.preview) return modelOptions.preview;

	switch (modelId) {
		case ModelId.Group:
			return getGroupPreview(modelValue);
		case ModelId.Chord:
		case ModelId.Scale:
			return getPodListPreview(modelValue as IPod[], modelOptions);
		default:
			return JSON.stringify(modelValue);
	}
}

// getPodAtPitch

const getPodAtPitchInSingle = (modelValue: IPod, modelOptions: IModelOptions, noteIndex: number, matchOctave: boolean) => PodUtils.getPodAtPitch(modelValue, noteIndex, modelOptions, matchOctave);

const getPodAtPitchInList = (modelValue: IPod[], modelOptions: IModelOptions, noteIndex: number, matchOctave: boolean) => PodListUtils.getPodAtPitch(modelValue, noteIndex, modelOptions, matchOctave);

const getPodAtPitch = (modelId: ModelId, modelValue: IModelValue, modelOptions: IModelOptions, noteIndex: number, matchOctave?: boolean): IPod | null => {
	switch (modelId) {
		case ModelId.Note:
		case ModelId.Interval:
			return getPodAtPitchInSingle(modelValue as IPod, modelOptions, noteIndex, matchOctave);
		case ModelId.Chord:
		case ModelId.Scale:
			return getPodAtPitchInList(modelValue as IPod[], modelOptions, noteIndex, matchOctave);
		default:
			return null;
	}
}

// getPodProps

interface IPodProps {
	color: string | null,
	label: string | null
}

const getNotePodProps = (modelValue: IPod, modelOptions: IModelOptions, noteIndex: number, matchOctave): IPodProps => {
	const pod = getPodAtPitch(ModelId.Note, modelValue, modelOptions, noteIndex, matchOctave);
	if (!pod) return null;
	const color = NoteUtils.getPodColor(pod);
	const label = getNoteName(pod);
	return { color, label };
}

const getIntervalPodProps = (modelValue: IPod, modelOptions: IModelOptions, noteIndex: number, matchOctave): IPodProps => {
	const pod = getPodAtPitch(ModelId.Interval, modelValue, modelOptions, noteIndex, matchOctave);
	if (!pod) return null;
	const color = IntervalUtils.getPodColor(pod);
	const label = getIntervalName(pod);
	return { color, label };
}

const getPodListProps = (modelValue: IPod[], modelOptions: IModelOptions, noteIndex: number, matchOctave): IPodProps => {
	const pod = getPodAtPitchInList(modelValue, modelOptions, noteIndex, matchOctave);
	const projection = modelOptions.projection;
	const superPod = projection ? getPodAtPitch(ModelId.Chord, projection.podList, null, noteIndex, matchOctave) : null;
	if (!pod && !superPod) return null;
	if (!pod) return {
		color: '#eee',
		label: getIntervalName(superPod)
	};
	const color = IntervalUtils.getPodColor(pod);
	const label = getIntervalName(pod);
	return { color, label };
}

const getPodProps = (modelId: ModelId, modelValue: IModelValue, modelOptions: IModelOptions, noteIndex: number, matchOctave = false): IPodProps | null => {
	switch (modelId) {
		case ModelId.Note:
			return getNotePodProps(modelValue as IPod, modelOptions, noteIndex, matchOctave)
		case ModelId.Interval:
			return getIntervalPodProps(modelValue as IPod, modelOptions, noteIndex, matchOctave);
		case ModelId.Chord:
		case ModelId.Scale:
			return getPodListProps(modelValue as IPod[], modelOptions, noteIndex, matchOctave);
		default:
			return null;
	}
}

// Parse

const getData = (modelConfig: IModelConfig, pathId = 0): IModelData => {
	const { modelId, modelValue, modelOptions } = modelConfig;

	if (modelId === ModelId.Group) {
		return {
			pathId,
			name: (modelOptions && modelOptions.name) ? modelOptions.name : getName(ModelId.Group, modelValue),
			preview: (modelOptions && modelOptions.preview) ? modelOptions.preview : getPreview(ModelId.Group, modelValue),
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
		const intervalName = getName(ModelId.Interval, modelValue);
		const intervalPreview = getPreview(ModelId.Interval, modelValue);

		const rootName = getName(ModelId.Note, modelOptions.modelRoot);
		const rootPreview = getPreview(ModelId.Note, modelOptions.modelRoot);

		if (modelId === ModelId.Note || modelId === ModelId.Interval) {
			const note = PodUtils.addPod(modelOptions.modelRoot, modelValue as IPod);
			const noteName = getName(ModelId.Note, note, modelOptions);
			const notePreview = getPreview(ModelId.Note, note, modelOptions);
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

const getGroupChildConfigs = (modelValue: IModelValue, modelOptions: IModelOptions) => {
	return modelValue.map((child, i) => {
		return {
			...child,
			modelOptions: {
				//...modelOptions,
				viewerId: modelOptions.viewerId,
				viewerProps: modelOptions.viewerProps,
				...child.modelOptions
				/*name: child.modelOptions.name,
				preview: child.modelOptions.preview*/
			}
		}
	});
};

const getListChildConfigs = (modelValue: IModelValue, modelOptions: IModelOptions, childModelId) => {
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

const getMetaChildren = (modelConfig: IModelConfig): IModelDef[] => {
	const { modelId, modelValue, modelOptions } = modelConfig;

	if (modelId === ModelId.Note || modelId === ModelId.Interval) return null;
	//const hasRoot = modelOptions && modelOptions.modelRoot;

	const childConfigs = modelId === ModelId.Group ?
		getGroupChildConfigs(modelValue, modelOptions) :
		getListChildConfigs(modelValue, modelOptions, ModelId.Interval);

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

const getSupersets = (modelId: ModelId, modelValue: IPod[], modelOptions: IModelOptions): ISupersetOption[] => {

	const compareValues = v => PodListUtils.containsSubset(v.value, modelValue);

	return SCALE_PRESETS.filter(compareValues).map(v => ({
		id: v.name,
		name: v.name,

		modelId: ModelId.Scale,
		modelValue: v.value,
		modelOptions: {
			...(modelOptions || {}),
			name: v.name,
			preview: getPreview(ModelId.Scale, v.value, modelOptions) + v.name
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
