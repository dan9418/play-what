import NoteUtils from "../../../Pod/Note/Note.utils";
import PodListUtils from "../../PodList.utils";

// Wrappers
const getPodAtPitch = (modelValue, modelRoot, p, matchOctave) => PodListUtils.getPodAtPitch(modelValue, modelRoot, p, matchOctave);
const playSound = (modelValue, modelRoot) => PodListUtils.playSound(modelValue, modelRoot);

const getName = () => 'Chord';

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
	playSound,
	getPodProps
}
