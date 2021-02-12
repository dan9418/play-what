import IntervalChordUtils from "./IntervalChord.utils";
import IntervalUtils from "./Interval.utils";
import NoteUtils from "./Note.utils";

const getName = (data) => {
	const kcName = NoteUtils.getName(data.root);
	const chordName = IntervalChordUtils.getName(data.intervals);
	return `${kcName} + ${chordName}`;
};
const getPreview = (data) => `${NoteUtils.getName(data.root)} + ${data.intervals.map(IntervalUtils.getName).join(', ')}`;
const getCaption = (data) => null;
const getDegreeAtPitch = (data, p) => NoteUtils.getDegreeAtPitch(data.root, p) || IntervalChordUtils.getDegreeAtPitch(data.intervals, p);

export default {
	getName,
	getPreview,
	getCaption,
	getDegreeAtPitch
}