import RelativeChordUtils from "./RelativeChord.utils";
import IntervalUtils from "./Interval.utils";
import NoteUtils from "./Note.utils";
import AbsoluteChordUtils from "./AbsoluteChord.utils";

const getName = (data) => {
	const kcName = NoteUtils.getName(data.root);
	const chordName = RelativeChordUtils.getName(data.intervals);
	return `${kcName} + ${chordName}`;
};
const getPreview = (data) => `${NoteUtils.getName(data.root)} + ${data.intervals.map(IntervalUtils.getName).join(', ')}`;
const getCaption = (data) => null;
const getPodAtPitch = (data, p) => AbsoluteChordUtils.getPodAtPitch(data.intervals, p);

export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch
}
