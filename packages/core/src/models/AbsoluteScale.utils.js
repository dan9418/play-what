import ToneUtils from "../tone/Tone.utils";
import TuningUtils from "../tuning/Tuning.utils";
import { MODEL_ID } from "./helpers/Model.constants";
import PodListUtils from "./helpers/PodList.utils";
import NoteUtils from "./Note.utils";

const getName = () => 'Root + Intervals';
const getPreview = (modelValue) => modelValue.map(note => NoteUtils.getName({ note })).join(', ');
const getPodAtPitch = (modelValue, modelOptions, metaChildren, p) => PodListUtils.getPodAtPitch(modelValue, p);
const getMetaChildren = (modelValue, modelOptions) => PodListUtils.getMetaChildren(modelValue, modelOptions, MODEL_ID.Note);

const playSound = (modelValue) => {
	const frequencies = modelValue.map(n => TuningUtils.getFrequency(n[0]));
	ToneUtils.playSound(frequencies)
}

export default {
	getName,
	getPreview,
	getPodAtPitch,
	getMetaChildren,
	playSound
}
