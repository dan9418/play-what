import RelativeChordUtils from "./RelativeChord.utils";
import IntervalUtils from "./Interval.utils";
import NoteUtils from "./Note.utils";
import AbsoluteChordUtils from "./AbsoluteChord.utils";
import PodUtils from "./helpers/Pod.utils";
import { MODEL_ID } from "./helpers/Model.constants";

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
			pathId: 'root',
			label: 'Root',
			name: NoteUtils.getPreview(data.root),
			childModelId: MODEL_ID.Note,
			childData: data.root
		},
		{
			pathId: 'intervals',
			name: RelativeChordUtils.getPreview(data.intervals),
			label: 'Intervals',
			childModelId: MODEL_ID.RelativeChord,
			childData: data.intervals
		},
		{
			pathId: 'notes',
			name: AbsoluteChordUtils.getPreview(notes),
			label: 'Notes',
			childModelId: MODEL_ID.AbsoluteChord,
			childData: notes
		}
	];
};


const parse = (data) => {
	const { root, intervals } = data;

	let rootValue = root;

	return {
		root: rootValue,
		intervals,
		notes: PodUtils.addPodList(root, intervals)
	}
};

export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch,
	getMetaChildren,
	parse
}
