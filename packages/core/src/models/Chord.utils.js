import RelativeChordUtils from "./RelativeChord.utils";
import IntervalUtils from "./Interval.utils";
import NoteUtils from "./Note.utils";
import AbsoluteChordUtils from "./AbsoluteChord.utils";
import PodUtils from "./helpers/Pod.utils";
import { MODEL_ID } from "./helpers/Model.constants";
import TuningUtils from "../tuning/Tuning.utils";
import ToneUtils from "../tone/Tone.utils";

const getName = (data) => {
	const kcName = NoteUtils.getName(data.root);
	const chordName = RelativeChordUtils.getName(data.intervals);
	return `${kcName} + ${chordName}`;
};

const getPreview = (data) => `${NoteUtils.getName(data.root)} + ${data.intervals.map(IntervalUtils.getName).join(', ')}`;
const getCaption = (data) => null;
const getPodAtPitch = (data, p) => AbsoluteChordUtils.getPodAtPitch(data.notes, p);

const getMetaChildren = data => {
	const notes = PodUtils.addPodList(data.root, data.intervals);
	return [
		{
			childIndex: 0,
			label: 'Root',
			name: NoteUtils.getName(data.root),
			preview: NoteUtils.getPreview(data.root),
			modelId: MODEL_ID.Note,
			modelData: data.root
		},
		{
			childIndex: 1,
			name: RelativeChordUtils.getName(data.intervals),
			preview: RelativeChordUtils.getPreview(data.intervals),
			label: 'Intervals',
			modelId: MODEL_ID.RelativeChord,
			modelData: data.intervals
		},
		{
			childIndex: 2,
			name: AbsoluteChordUtils.getName(notes),
			preview: AbsoluteChordUtils.getPreview(notes),
			label: 'Notes',
			modelId: MODEL_ID.AbsoluteChord,
			modelData: notes
		}
	];
};

const parse = (data) => {
	const { root, intervals, t } = data;

	let rootValue = root;

	return {
		root: rootValue,
		intervals,
		notes: PodUtils.addPodList(root, intervals),
		t: t || 1
	}
};

const getFrequencies = (modelData) => {
	const { notes } = modelData;

	return notes.map(n => TuningUtils.getFrequency(n[0]));
};

const playSound = (modelData) => {
	const frequencies = getFrequencies(modelData);
	ToneUtils.playSound(frequencies)
}

export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch,
	getMetaChildren,
	parse,
	getFrequencies,
	playSound
}
