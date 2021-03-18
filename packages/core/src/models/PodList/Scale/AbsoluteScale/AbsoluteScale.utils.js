import { MODEL_ID } from "../../../Model.constants";
import PodListUtils from "../../PodList.utils";
import NoteUtils from "../../../Pod/Note/Note.utils";

// Wrappers
const getPodAtPitch = (modelValue, modelRoot, p, matchOctave) => PodListUtils.getPodAtPitch(modelValue, p, modelRoot, matchOctave);
const getMetaChildren = (modelValue, modelRoot) => PodListUtils.getMetaChildren(modelValue, modelRoot, MODEL_ID.Note);
const playSound = (modelValue, modelRoot) => PodListUtils.playSound(modelValue, modelRoot);

const getName = () => 'Root + Intervals';

const getPreview = (modelValue, modelRoot) => modelValue.map(note => NoteUtils.getName(note, modelRoot)).join(', ');

const getPodProps = (modelValue, modelRoot, p) => {
	const pod = getPodAtPitch(modelValue, modelRoot, p);
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
