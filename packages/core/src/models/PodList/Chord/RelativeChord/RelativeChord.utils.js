import { MODEL_ID } from "../../../Model.constants";
import IntervalUtils from "../../../Pod/Interval/Interval.utils";
import NoteUtils from "../../../Pod/Note/Note.utils";
import PodUtils from "../../../Pod/Pod.utils";
import PodListUtils from "../../PodList.utils";
import { ALL_SCALE_VALUES, RELATIVE_SCALE_VALUES } from "../../Scale/RelativeScale/RelativeScale.constants";
import { RELATIVE_CHORD_VALUES } from "./RelativeChord.constants";

// Wrappers
const getMetaChildren = (modelValue, modelOptions) => PodListUtils.getMetaChildren(modelValue, modelOptions, MODEL_ID.Interval);
const playSound = (modelValue, modelOptions) => PodListUtils.playSound(modelValue, modelOptions.root);
const getPodAtPitch = (modelValue, modelOptions, p) => PodListUtils.getPodAtPitch(modelValue, p, modelOptions.root);

const getName = (modelValue, modelOptions) => {
	const preset = RELATIVE_CHORD_VALUES.find(v => PodListUtils.areEqual(modelValue, v.value));
	const rootName = NoteUtils.getName(modelOptions.root);
	const presetName = preset ? preset.id : 'Untitled Chord';
	return `${rootName} ${presetName}`;
};

const getPreview = (modelValue, modelOptions) => {
	const intervalNames = modelValue.map(interval => IntervalUtils.getName(interval, modelOptions)).join(', ');
	const notes = PodUtils.addPodList(modelOptions.root, modelValue);
	const noteNames = notes.map(note => NoteUtils.getName(note, modelOptions)).join(', ');
	return `${intervalNames} (${noteNames})`;
}

const findSupersets = (modelValue, modelOptions) => {
	return ALL_SCALE_VALUES.filter(v => PodListUtils.containsSubset(v.value, modelValue)).map(v => v.name);
}

export default {
	getName,
	getPreview,
	getMetaChildren,
	getPodAtPitch,
	playSound,
	findSupersets
}
