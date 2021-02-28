import { MODEL_ID } from "./helpers/Model.constants";
import NoteUtils from "./Note.utils";

const getName = (modelConfig) => '<AbsoluteScale>';
const getPreview = (modelConfig) => modelConfig.map(d => NoteUtils.getName(d)).join(', ');
const getCaption = (modelConfig) => null;

const getPodAtPitch = (modelConfig, metaChildren, p) => PodUtils.listGetPodAtPitch(metaChildren[2].modelConfig.notes, p);

const getMetaChildren = modelConfig => {
	return modelConfig.map((d, i) => ({
		childIndex: i,
		name: NoteUtils.getName(d),
		preview: NoteUtils.getPreview(d),
		modelId: MODEL_ID.Note,
		modelConfig: d
	}));
};


export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch,
	getMetaChildren
}
