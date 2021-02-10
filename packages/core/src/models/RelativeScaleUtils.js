import IntervalScaleUtils from "./IntervalScaleUtils";
import NoteUtils from "./NoteUtils";

const getName = (data) => {
	const kcName = NoteUtils.getName(data.keyCenter);
	const chordName = IntervalScaleUtils.getName(data.intervals);
	return `${kcName} + ${chordName}`;
};

export default {
	getName
}
