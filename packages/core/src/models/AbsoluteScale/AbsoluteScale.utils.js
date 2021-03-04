import { MODEL_ID } from "../Model.constants";
import PodListUtils from "../PodList/PodList.utils";
import NoteUtils from "../Note/Note.utils";

// Wrappers
const getPodAtPitch = (modelValue, modelOptions, metaChildren, p) => PodListUtils.getPodAtPitch(modelValue, p);
const getMetaChildren = (modelValue, modelOptions) => PodListUtils.getMetaChildren(modelValue, modelOptions, MODEL_ID.Note);
const playSound = (modelValue, modelOptions) => PodListUtils.playSound(modelValue, modelOptions.root);

const getName = () => 'Root + Intervals';

const getPreview = (modelValue) => modelValue.map(note => NoteUtils.getName({ note })).join(', ');

export default {
	getName,
	getPreview,
	getPodAtPitch,
	getMetaChildren,
	playSound
}
