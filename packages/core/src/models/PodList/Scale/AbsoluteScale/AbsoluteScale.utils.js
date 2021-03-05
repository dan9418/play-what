import { MODEL_ID } from "../../../Model.constants";
import PodListUtils from "../../PodList.utils";
import NoteUtils from "../../../Pod/Note/Note.utils";

// Wrappers
const getPodAtPitch = (modelValue, root, p) => PodListUtils.getPodAtPitch(modelValue, p);
const getMetaChildren = (modelValue, root) => PodListUtils.getMetaChildren(modelValue, root, MODEL_ID.Note);
const playSound = (modelValue, root) => PodListUtils.playSound(modelValue, root);

const getName = () => 'Root + Intervals';

const getPreview = (modelValue, root) => modelValue.map(note => NoteUtils.getName(note, root)).join(', ');

const getPodProps = (modelValue, root, p) => {
	const pod = getPodAtPitch(modelValue, root, p);
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
