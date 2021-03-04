import { MODEL_ID } from "./helpers/Model.constants";
import PodListUtils from "./helpers/PodList.utils";
import NoteUtils from "./Note.utils";

const getName = () => 'Root + Intervals';
const getPreview = (modelValue) => modelValue.map(note => NoteUtils.getName({ note })).join(', ');
const getPodAtPitch = (modelValue, modelOptions, metaChildren, p) => PodListUtils.getPodAtPitch(modelValue, p);
const getMetaChildren = (modelValue, modelOptions) => PodListUtils.getMetaChildren(modelValue, modelOptions, MODEL_ID.Note);
const playSound = (modelValue, modelOptions) => PodListUtils.playSound(modelValue, modelOptions.root);


export default {
	getName,
	getPreview,
	getPodAtPitch,
	getMetaChildren,
	playSound
}
