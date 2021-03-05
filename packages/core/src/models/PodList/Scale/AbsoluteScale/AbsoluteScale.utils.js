import { MODEL_ID } from "../../../Model.constants";
import PodListUtils from "../../PodList.utils";
import NoteUtils from "../../../Pod/Note/Note.utils";

// Wrappers
const getPodAtPitch = (modelValue, modelOptions, p) => PodListUtils.getPodAtPitch(modelValue, p);
const getMetaChildren = (modelValue, modelOptions) => PodListUtils.getMetaChildren(modelValue, modelOptions, MODEL_ID.Note);
const playSound = (modelValue, modelOptions) => PodListUtils.playSound(modelValue, modelOptions.root);

const getName = () => 'Root + Intervals';

const getPreview = (modelValue, modelOptions) => modelValue.map(note => NoteUtils.getName(note, modelOptions)).join(', ');

const getPodProps = (modelValue, modelOptions, p) => {
	const pod = getPodAtPitch(modelValue, modelOptions, p);
	if (!pod) return null;
	const color = NoteUtils.getPodColor(pod);
	const label = NoteUtils.getName(pod);
	return { color, label };
}

export default {
	getName,
	getPreview,
	getPodAtPitch,
	getMetaChildren,
	playSound,
	getPodProps
}
