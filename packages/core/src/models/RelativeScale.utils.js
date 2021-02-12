import IntervalScaleUtils from "./IntervalScale.utils";
import NoteUtils from "./Note.utils";

const getName = (data) => {
	const kcName = NoteUtils.getName(data.root);
	const chordName = IntervalScaleUtils.getName(data.intervals);
	return `${kcName} + ${chordName}`;
};
const getPreview = (data) => null;
const getCaption = (data) => null;
const getDegreeAtPitch = (data, p) => NoteUtils.getDegreeAtPitch(data.root, p) || IntervalScaleUtils.getDegreeAtPitch(data.intervals, p);

export default {
	getName,
	getPreview,
	getCaption,
	getDegreeAtPitch
}
