import IntervalChordUtils from "./IntervalChordUtils";
import IntervalUtils from "./IntervalUtils";
import NoteUtils from "./NoteUtils";

const getName = (data) => {
	const kcName = NoteUtils.getName(data.keyCenter);
	const chordName = IntervalChordUtils.getName(data.intervals);
	return `${kcName} + ${chordName}`;
};
const getPreview = (data) => `${NoteUtils.getName(data.keyCenter)} + ${data.intervals.map(IntervalUtils.getName).join(', ')}`;
const getCaption = (data) => null;

export default {
	getName,
	getPreview,
	getCaption
}
