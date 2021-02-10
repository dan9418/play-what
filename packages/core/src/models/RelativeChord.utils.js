import IntervalChordUtils from "./IntervalChord.utils";
import IntervalUtils from "./Interval.utils";
import NoteUtils from "./Note.utils";

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
