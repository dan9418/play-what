import { MODEL_ID } from "./helpers/Model.constants";
import PodUtils from "./helpers/Pod.utils";
import NoteUtils from "./Note.utils";

const getName = (data) => '<AbsoluteChord>';
const getPreview = (data) => data.map(d => NoteUtils.getName(d)).join(', ');
const getCaption = (data) => null;
const getPodAtPitch = (data, p) => PodUtils.listGetPodAtPitch(data, p);

const getMetaChildren = data => {
	return data.map((d, i) => ({
		childIndex: i,
		name: NoteUtils.getName(d),
		preview: NoteUtils.getPreview(d),
		modelId: MODEL_ID.Note,
		modelArgs: d
	}));
}

export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch,
	getMetaChildren
}
