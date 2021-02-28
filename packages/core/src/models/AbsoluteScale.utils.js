import { MODEL_ID } from "./helpers/Model.constants";
import NoteUtils from "./Note.utils";

const getName = (modelConfig) => 'Root + Intervals';
const getPreview = (modelConfig) => modelConfig.notes.map(note => NoteUtils.getName({ note })).join(', ');
const getCaption = (modelConfig) => null;

const getPodAtPitch = (modelConfig, metaChildren, p) => PodUtils.listGetPodAtPitch(metaChildren[2].modelConfig.notes, p);

const getMetaChildren = modelConfig => {
	const { root, notes } = modelConfig;
	return notes.map((d, i) => ({
		childIndex: i,
		name: NoteUtils.getName(d),
		preview: NoteUtils.getPreview(d),
		modelId: MODEL_ID.Note,
		modelConfig: {
			root,
			note: d
		}
	}));
};


export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch,
	getMetaChildren
}
