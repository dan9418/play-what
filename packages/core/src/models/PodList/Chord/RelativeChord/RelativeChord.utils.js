import { MODEL_ID } from "../../../Model.constants";
import IntervalUtils from "../../../Pod/Interval/Interval.utils";
import NoteUtils from "../../../Pod/Note/Note.utils";
import PodUtils from "../../../Pod/Pod.utils";
import PodListUtils from "../../PodList.utils";
import { RELATIVE_SCALE_VALUES } from "../../Scale/RelativeScale/RelativeScale.constants";
import { RELATIVE_CHORD_VALUES } from "./RelativeChord.constants";

// Wrappers
const playSound = (modelValue, modelRoot) => PodListUtils.playSound(modelValue, modelRoot);
const getPodAtPitch = (modelValue, modelRoot, p, matchOctave) => PodListUtils.getPodAtPitch(modelValue, p, modelRoot, matchOctave);

const getName = (modelValue, modelRoot) => {
	const preset = RELATIVE_CHORD_VALUES.find(v => PodListUtils.areEqual(modelValue, v.value));
	const rootName = NoteUtils.getName(modelRoot, modelRoot);
	const presetName = preset ? preset.id : 'Untitled Chord';
	return `${rootName} ${presetName}`;
};

const getPreview = (modelValue, modelRoot) => {
	const intervalNames = modelValue.map(interval => IntervalUtils.getName(interval, modelRoot)).join(', ');
	const notes = PodUtils.addPodList(modelRoot, modelValue);
	const noteNames = notes.map(note => NoteUtils.getName(note, modelRoot)).join(', ');
	return `${intervalNames} (${noteNames})`;
}

const findSupersets = (modelValue, modelRoot) => {
	return RELATIVE_SCALE_VALUES.filter(v => PodListUtils.containsSubset(v.value, modelValue)).map(v => ({
		name: v.name,
		modelId: MODEL_ID.RelativeScale,
		modelValue: v.value,
		modelRoot
	}));
}

const getPodProps = (modelValue, modelRoot, p, superset) => {
	const pod = getPodAtPitch(modelValue, modelRoot, p);
	const superPod = superset ? getPodAtPitch(superset.modelValue, superset.modelRoot, p) : null;
	if (!pod && !superPod) return null;
	if (!pod) return {
		color: 'white', //`${IntervalUtils.getPodColor(superPod)}`,
		label: IntervalUtils.getName(superPod)
	};
	const color = IntervalUtils.getPodColor(pod);
	const label = IntervalUtils.getName(pod);
	return { color, label };
}

export default {
	getName,
	getPreview,
	getPodAtPitch,
	playSound,
	findSupersets,
	getPodProps
}
