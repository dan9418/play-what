import NoteUtils from "./Note.utils";

const getName = (data) => '<NoteScale>';
const getPreview = (data) => data.map(d => NoteUtils.getName(d)).join(', ');
const getCaption = (data) => null;

const getDegreeAtPitch = (data, p) => PodUtils.listGetDegreeAtPitch(data, p);

export default {
	getName,
	getPreview,
	getCaption,
	getDegreeAtPitch
}