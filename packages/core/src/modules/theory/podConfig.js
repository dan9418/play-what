import PodUtils from "../models/pod/PodUtils";
import { INTERVAL_VALUES, NOTE_VALUES } from "./presets";

export const getPresets = (options = {}) => {
	if (options.podType === 'note') {
		return NOTE_VALUES;
	}
	else if (options.podType === 'interval') {
		return INTERVAL_VALUES;
	}
	return [];
}

export const findPreset = (value, options = {}) => {
	let data = []
	if (options.podType === 'note') {
		data = NOTE_VALUES;
	}
	else if (options.podType === 'interval') {
		data = INTERVAL_VALUES;
	}
	return data.find(d => PodUtils.areEqual(value, d.value)) || null;
}

export const getPreview = (value, options = {}) => {
	const { podType, isList, reduce } = options;
	const testValue = reduce ? PodUtils.reduce(value, { isList }) : value;
	if (podType === 'pod') {
		return JSON.stringify(testValue);
	}
	else if (isList) {
		return testValue.map(v => {
			const result = findPreset(v, { podType });
			return result ? result.id : '?';
		}).join(', ');
	}
	else {
		const result = findPreset(testValue, { podType });
		return result ? result.id : '?';
	}
}
