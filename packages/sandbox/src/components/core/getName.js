import PodUtils from "@pw/core/src/Pod.utils";
import PodListUtils from "@pw/core/src/PodList.utils";
import { MODEL_ID } from "./MODEL";

export const getPitchPreview = (data) => data;
export const getDegreePreview = (data) => data;
export const getNotePreview = (data) => PodUtils.getName(data, { podType: 'note' });
export const getIntervalPreview = (data) => PodUtils.getName(data, { podType: 'interval' });
export const getChordPreview = (data) => PodListUtils.getName(data, { podType: 'chord' });
export const getScalePreview = (data) => PodListUtils.getName(data, { podType: 'scale' });
export const getRelativeChordPreview = (data) => {
	const kcName = getNotePreview(data.keyCenter);
	const chordName = getChordPreview(data.intervals);
	return `${kcName} + ${chordName}`;
};
export const getSectionPreview = (data) => `${data.items.length} Items`;
export const getChartPreview = (data) => data.items.map(s => s.name).join(', ');

const getName = (data, modelId) => {
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

export default getName;
