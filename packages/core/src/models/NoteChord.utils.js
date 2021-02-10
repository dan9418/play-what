import PodListUtils from "./_PodList.utils";
import NoteUtils from "./Note.utils";

const getName = (data) => PodListUtils.getName(data, { podType: 'chord' });
const getPreview = (data) => data.map(d => NoteUtils.getName(d)).join(', ');
const getCaption = (data) => null;

export default {
	getName,
	getPreview,
	getCaption
}
