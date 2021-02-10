
const getName = (data) => 'intervalchord';
const getPreview = (data) => data.map(d => getIntervalName(d)).join(', ');
const getCaption = (data) => null;

export default {
	getName,
	getPreview,
	getCaption
}
