import { getIntervalName, getNoteName } from "./getName";
import { MODEL, MODEL_ID } from "./MODEL";

export const getPitchPreview = (data) => data;
export const getDegreePreview = (data) => data;
export const getNotePreview = (data) => JSON.stringify(data);
export const getIntervalPreview = (data) => JSON.stringify(data);
export const getNoteChordPreview = (data) => data.map(d => getNoteName(d)).join(', ');
export const getIntervalChordPreview = (data) => data.map(d => getIntervalName(d)).join(', ');
export const getNoteScalePreview = (data) => data.map(d => getNoteName(d)).join(', ');
export const getIntervalScalePreview = (data) => data.map(d => getIntervalName(d)).join(', ');
export const getRelativeChordPreview = (data) => "Note + Interval Chord";
export const getBlockPreview = (data) => `Various Models`;
export const getSectionPreview = (data) => `${data.items.length} Blocks`;
export const getChartPreview = (data) => data.items.map(s => s.name).join(', ');

const getPreview = (data, modelId) => {
	if (!data || !modelId) return "No Data";

	switch (modelId) {
	case MODEL_ID.Group:
		return "Group Preview"
	case MODEL_ID.Pitch:
		return getPitchPreview(data);
	case MODEL_ID.Degree:
		return getDegreePreview(data);
	case MODEL_ID.Note:
		return getNotePreview(data);
	case MODEL_ID.Interval:
		return getIntervalPreview(data);
	case MODEL_ID.NoteChord:
		return getNoteChordPreview(data);
	case MODEL_ID.IntervalChord:
		return getIntervalChordPreview(data);
	case MODEL_ID.NoteScale:
		return getNoteScalePreview(data);
	case MODEL_ID.IntervalScale:
		return getIntervalScalePreview(data);
	case MODEL_ID.RelativeChord:
		return getRelativeChordPreview(data);
	case MODEL_ID.Section:
		return getSectionPreview(data);
	case MODEL_ID.Chart:
		return getChartPreview(data);
	default:
		return JSON.stringify(data);
	}
};

export default getPreview;
