import RelativeScaleUtils from "./RelativeScale.utils";
import NoteUtils from "./Note.utils";

const getName = (data) => {
	const kcName = NoteUtils.getName(data.root);
	const chordName = RelativeScaleUtils.getName(data.intervals);
	return `${kcName} + ${chordName}`;
};
const getPreview = (data) => null;
const getCaption = (data) => null;
const getPodAtPitch = (data, p) => NoteUtils.getPodAtPitch(data.root, p) || RelativeScaleUtils.getPodAtPitch(data.intervals, p);

export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch
}
