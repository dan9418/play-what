import IntervalChordUtils from "./IntervalChordUtils";
import NoteUtils from "./NoteUtils";

const getName = (data) => {
	const kcName = NoteUtils.getName(data.keyCenter);
	const chordName = IntervalChordUtils.getName(data.intervals);
	return `${kcName} + ${chordName}`;
};

export default {
	getName
}
