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
export const getRelativeChordPreview = (data) => `${getNoteName(data.keyCenter)} + ${data.intervals.map(getIntervalName).join(', ')}`;

const getPreview = (data, modelId) => {
	if (typeof data === undefined || data === null) return "No Preview Data";

	switch (modelId) {
	case MODEL_ID.Group:
		return `${data.length} Items`;
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
	default:
		return JSON.stringify(data);
	}
};

export default getPreview;
