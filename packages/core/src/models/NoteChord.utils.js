import NoteUtils from "./Note.utils";

const getName = (data) => '<NoteChord>';
const getPreview = (data) => data.map(d => NoteUtils.getName(d)).join(', ');
const getCaption = (data) => null;

export default {
	getName,
	getPreview,
	getCaption
}
