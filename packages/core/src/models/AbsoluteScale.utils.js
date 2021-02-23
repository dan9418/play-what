import NoteUtils from "./Note.utils";

const getName = (data) => '<AbsoluteScale>';
const getPreview = (data) => data.map(d => NoteUtils.getName(d)).join(', ');
const getCaption = (data) => null;

const getPodAtPitch = (data, p) => PodUtils.listGetPodAtPitch(data, p);

const getMetaChildren = data => {
	return data.map((d, i) => ({
		pathId: i,
		name: NoteUtils.getName(d),
		childModelId: MODEL_ID.Note,
		childData: d
	}));
};


export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch,
	getMetaChildren
}
