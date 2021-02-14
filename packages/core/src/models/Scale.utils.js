import IntervalScaleUtils from "./IntervalScale.utils";
import NoteUtils from "./Note.utils";

const getName = (data) => {
	const kcName = NoteUtils.getName(data.root);
	const chordName = IntervalScaleUtils.getName(data.intervals);
	return `${kcName} + ${chordName}`;
};
const getPreview = (data) => null;
const getCaption = (data) => null;
const getPodAtPitch = (data, p) => NoteUtils.getPodAtPitch(data.root, p) || IntervalScaleUtils.getPodAtPitch(data.intervals, p);

export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch
}
