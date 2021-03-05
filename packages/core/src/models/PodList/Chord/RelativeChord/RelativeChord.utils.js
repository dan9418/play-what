import { MODEL_ID } from "../../../Model.constants";
import IntervalUtils from "../../../Pod/Interval/Interval.utils";
import NoteUtils from "../../../Pod/Note/Note.utils";
import PodUtils from "../../../Pod/Pod.utils";
import PodListUtils from "../../PodList.utils";
import { RELATIVE_SCALE_VALUES } from "../../Scale/RelativeScale/RelativeScale.constants";
import { RELATIVE_CHORD_VALUES } from "./RelativeChord.constants";

// Wrappers
const getMetaChildren = (modelValue, root) => PodListUtils.getMetaChildren(modelValue, root, MODEL_ID.Interval);
const playSound = (modelValue, root) => PodListUtils.playSound(modelValue, root);
const getPodAtPitch = (modelValue, root, p) => PodListUtils.getPodAtPitch(modelValue, p, root);

const getName = (modelValue, root) => {
	const preset = RELATIVE_CHORD_VALUES.find(v => PodListUtils.areEqual(modelValue, v.value));
	const rootName = NoteUtils.getName(root);
	const presetName = preset ? preset.id : 'Untitled Chord';
	return `${rootName} ${presetName}`;
};

const getPreview = (modelValue, root) => {
	const intervalNames = modelValue.map(interval => IntervalUtils.getName(interval, root)).join(', ');
	const notes = PodUtils.addPodList(root, modelValue);
	const noteNames = notes.map(note => NoteUtils.getName(note, root)).join(', ');
	return `${intervalNames} (${noteNames})`;
}

const findSupersets = (modelValue, root) => {
	return RELATIVE_SCALE_VALUES.filter(v => PodListUtils.containsSubset(v.value, modelValue)).map(v => ({
		name: v.name,
		modelId: MODEL_ID.RelativeScale,
		modelValue: v.value,
		root
	}));
}

const getPodProps = (modelValue, root, p, superset) => {
	const pod = getPodAtPitch(modelValue, root, p);
	const superPod = superset ? getPodAtPitch(superset.modelValue, superset.root, p) : null;
	if (!pod && !superPod) return null;
	if (!pod) return {
		color: 'white', //`${IntervalUtils.getPodColor(superPod)}33`,
		label: IntervalUtils.getName(superPod)
	};
	const color = IntervalUtils.getPodColor(pod);
	const label = IntervalUtils.getName(pod);
	return { color, label };
}

export default {
	getName,
	getPreview,
	getMetaChildren,
	getPodAtPitch,
	playSound,
	findSupersets,
	getPodProps
}
