import { MODEL_ID } from "./helpers/Model.constants";
import NoteUtils from "./Note.utils";

const getName = (modelConfig) => 'Root + Intervals';
const getPreview = (modelConfig) => modelConfig.notes.map(note => NoteUtils.getName({ note })).join(', ');
const getCaption = (modelConfig) => null;

const getPodAtPitch = (modelConfig, metaChildren, p) => PodUtils.listGetPodAtPitch(modelConfig.notes, p);

const getMetaChildren = args => {
	const { root, notes } = args;
	return notes.map((note, i) => {
		const noteConfig = { root, note };
		return {
			childIndex: i,
			name: NoteUtils.getName(noteConfig),
			preview: NoteUtils.getPreview(noteConfig),
			modelId: MODEL_ID.Note,
			modelConfig: noteConfig
		}
	});
};

export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch,
	getMetaChildren
}
