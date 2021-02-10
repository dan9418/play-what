import IntervalScaleUtils from "./IntervalScaleUtils";
import NoteUtils from "./NoteUtils";

const getName = (data) => {
	const kcName = NoteUtils.getName(data.keyCenter);
	const chordName = IntervalScaleUtils.getName(data.intervals);
	return `${kcName} + ${chordName}`;
};
const getPreview = (data) => null;
const getCaption = (data) => null;

export default {
	getName,
	getPreview,
	getCaption
}
