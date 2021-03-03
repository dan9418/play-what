import ToneUtils from "../tone/Tone.utils";
import TuningUtils from "../tuning/Tuning.utils";
import { MODEL_ID } from "./helpers/Model.constants";
import PodUtils from "./helpers/Pod.utils";
import IntervalUtils from "./Interval.utils";
import NoteUtils from "./Note.utils";
import { RELATIVE_CHORD_VALUES } from "./RelativeChord.constants";

const getPreview = (modelValue) => modelValue.map(interval => IntervalUtils.getName(interval)).join(', ');

const getName = (modelValue, modelOptions) => {
	const preset = RELATIVE_CHORD_VALUES.find(v => PodUtils.areListsEqual(modelValue, v.value));
	const rootName = NoteUtils.getName(modelOptions.root);
	const presetName = preset ? preset.id : 'Untitled Chord';
	return `${rootName} ${presetName}`;
};

const getMetaChildren = (modelValue, modelOptions) => {
	return modelValue.map((interval, i) => {
		return {
			childIndex: i,
			name: IntervalUtils.getName(interval),
			preview: IntervalUtils.getPreview(interval),
			modelId: MODEL_ID.Interval,
			modelValue: interval,
			modelOptions
		}
	});
};

const getPodAtPitch = (modelValue, modelOptions, metaChildren, p) => {
	const pitchOffset = modelOptions.root[0];
	return PodUtils.listGetPodAtPitch(modelValue, p - pitchOffset);
}

const playSound = (modelValue, modelOptions) => {
	const notes = PodUtils.addPodList(modelOptions.root, modelValue);
	const frequencies = notes.map(n => TuningUtils.getFrequency(n[0]));
	ToneUtils.playSound(frequencies)
}

export default {
	getName,
	getPreview,
	getMetaChildren,
	getPodAtPitch,
	playSound
}
