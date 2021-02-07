import { getNoteName } from "./getName";
import { MODEL_ID } from "./MODEL";

export const getPitchPreview = (data) => data;
export const getDegreePreview = (data) => data;
export const getNotePreview = (data) => JSON.stringify(data);
export const getIntervalPreview = (data) => JSON.stringify(data);
export const getChordPreview = (data) => data.map(d => getNoteName(d)).join(', ');
export const getScalePreview = (data) => data.map(d => getNoteName(d)).join(', ');
export const getRelativeChordPreview = (data) => {
	const kcPreview = getNoteName(data.keyCenter);
	const chordPreview = getChordPreview(data.intervals);
	return `${kcPreview} + ${chordPreview}`;
};
export const getSectionPreview = (data) => `${data.items.length} Items`;
export const getChartPreview = (data) => data.items.map(s => s.name).join(', ');

const getPreview = (data, modelId) => {
	if (!data) return "No Data";

	switch (modelId) {
	case MODEL_ID.Pitch:
		return getPitchPreview(data);
	case MODEL_ID.Degree:
		return getDegreePreview(data);
	case MODEL_ID.Note:
		return getNotePreview(data);
	case MODEL_ID.Interval:
		return getIntervalPreview(data);
	case MODEL_ID.Chord:
		return getChordPreview(data);
	case MODEL_ID.Scale:
		return getScalePreview(data);
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
