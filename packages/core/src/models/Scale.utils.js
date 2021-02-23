import RelativeScaleUtils from "./RelativeScale.utils";
import NoteUtils from "./Note.utils";
import PodUtils from "./helpers/Pod.utils";
import AbsoluteScaleUtils from "./AbsoluteScale.utils";

const getName = (data) => {
	const kcName = NoteUtils.getName(data.root);
	const chordName = RelativeScaleUtils.getName(data.intervals);
	return `${kcName} + ${chordName}`;
};
const getPreview = (data) => null;
const getCaption = (data) => null;
const getPodAtPitch = (data, p) => NoteUtils.getPodAtPitch(data.root, p) || RelativeScaleUtils.getPodAtPitch(data.intervals, p);

const getMetaChildren = data => {
	const notes = PodUtils.addPodList(data.root, data.intervals);
	return [
		{
			pathId: 'root',
			label: 'Root',
			name: NoteUtils.getName(data.root),
			childModelId: MODEL_ID.Note,
			childData: data.root
		},
		{
			pathId: 'intervals',
			label: 'Intervals',
			name: RelativeScaleUtils.getPreview(data.intervals),
			childModelId: MODEL_ID.RelativeScale,
			childData: data.intervals
		},
		{
			pathId: 'notes',
			label: 'Notes',
			name: AbsoluteScaleUtils.getPreview(data.intervals),
			childModelId: MODEL_ID.AbsoluteScale,
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
