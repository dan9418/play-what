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
			label: 'Root',
			name: NoteUtils.getName(data.root),
			preview: NoteUtils.getPreview(data.root),
			modelId: MODEL_ID.Note,
			modelData: data.root
		},
		{
			label: 'Intervals',
			name: RelativeScaleUtils.getName(data.intervals),
			preview: RelativeScaleUtils.getPreview(data.intervals),
			modelId: MODEL_ID.RelativeScale,
			modelData: data.intervals
		},
		{
			label: 'Notes',
			name: AbsoluteScaleUtils.getName(data.intervals),
			preview: AbsoluteScaleUtils.getPreview(data.intervals),
			modelId: MODEL_ID.AbsoluteScale,
			modelData: notes
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
