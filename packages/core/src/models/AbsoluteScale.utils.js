import NoteUtils from "./Note.utils";

const getName = (data) => '<AbsoluteScale>';
const getPreview = (data) => data.map(d => NoteUtils.getName(d)).join(', ');
const getCaption = (data) => null;

const getPodAtPitch = (data, p) => PodUtils.listGetPodAtPitch(data, p);

export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch
}
