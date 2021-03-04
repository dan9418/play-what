import { MODEL_ID } from "../../../Model.constants";
import PodListUtils from "../../PodList.utils";
import NoteUtils from "../../../Pod/Note/Note.utils";

// Wrappers
const getPodAtPitch = (modelValue, modelOptions, metaChildren, p) => PodListUtils.getPodAtPitch(modelValue, p);
const getMetaChildren = (modelValue, modelOptions) => PodListUtils.getMetaChildren(modelValue, modelOptions, MODEL_ID.Note);
const playSound = (modelValue, modelOptions) => PodListUtils.playSound(modelValue, modelOptions.root);

const getName = () => 'Root + Intervals';

const getPreview = (modelValue, modelOptions) => modelValue.map(note => NoteUtils.getName(note, modelOptions)).join(', ');

export default {
	getName,
	getPreview,
	getPodAtPitch,
	getMetaChildren,
	playSound
}
