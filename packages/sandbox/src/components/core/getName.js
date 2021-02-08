import PodUtils from "@pw/core/src/Pod.utils";
import PodListUtils from "@pw/core/src/PodList.utils";
import { MODEL_ID } from "./MODEL";

export const getPitchName = (data) => data;
export const getDegreeName = (data) => data;
export const getNoteName = (data) => PodUtils.getName(data, { podType: 'note' });
export const getIntervalName = (data) => PodUtils.getName(data, { podType: 'interval' });
export const getChordName = (data) => PodListUtils.getName(data, { podType: 'chord' });
export const getScaleName = (data) => PodListUtils.getName(data, { podType: 'scale' });
export const getRelativeChordName = (data) => {
	const kcName = getNoteName(data.keyCenter);
	const chordName = getChordName(data.intervals);
	return `${kcName} + ${chordName}`;
};
export const getSectionName = (data) => `${data.items.length} Items`;
export const getChartName = (data) => data.items.map(s => s.name).join(', ');

const getName = (data, modelId) => {
	if (!data) return "No Data";

	switch (modelId) {
	case MODEL_ID.Group:
		return data.name || "Untitled Group";
	case MODEL_ID.Pitch:
		return getPitchName(data);
	case MODEL_ID.Degree:
		return getDegreeName(data);
	case MODEL_ID.Note:
		return getNoteName(data);
	case MODEL_ID.Interval:
		return getIntervalName(data);
	case MODEL_ID.NoteChord:
	case MODEL_ID.IntervalChord:
		return getChordName(data);
	case MODEL_ID.NoteScale:
	case MODEL_ID.IntervalScale:
		return getScaleName(data);
	case MODEL_ID.RelativeChord:
		return getRelativeChordName(data);
	case MODEL_ID.Section:
		return getSectionName(data);
	case MODEL_ID.Section:
		return getSectionName(data);
	case MODEL_ID.Chart:
		return getChartName(data);
	default:
		return JSON.stringify(data);
	}
};

export default getName;
