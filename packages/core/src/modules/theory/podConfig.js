export const getPreview = (value, podType, isList) => {
	if(podType === 'pod') {
		return JSON.stringify(value);
	}
	else if (podType === 'note') {
		return JSON.stringify(value);
	}
	else if (podType === 'interval') {
		return JSON.stringify(value);
	}
}
