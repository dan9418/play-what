import ToneUtils from "../tone/Tone.utils";
import TuningUtils from "../tuning/Tuning.utils";
import { MODEL_ID } from "./helpers/Model.constants";
import PodUtils from "./helpers/Pod.utils";
import NoteUtils from "./Note.utils";

const getName = () => 'Root + Intervals';
const getPreview = (modelValue) => modelValue.map(note => NoteUtils.getName({ note })).join(', ');
const getPodAtPitch = (modelValue, modelOptions, metaChildren, p) => PodUtils.listGetPodAtPitch(modelValue, p);

const getMetaChildren = (modelValue, modelOptions) => {
	return modelValue.map((note, i) => {
		return {
			childIndex: i,
			name: NoteUtils.getName(note),
			preview: NoteUtils.getPreview(note),
			modelId: MODEL_ID.Note,
			modelValue: note
		}
	});
};

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
