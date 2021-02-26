import { DEGREE_VALUES } from "./Degree.constants";
import DegreeUtils from "./Degree.utils";
import { MODEL_ID } from "./helpers/Model.constants";
import PodUtils from "./helpers/Pod.utils";
import { ROOT_SCALE } from "./helpers/CommonScale.constants";
import { ACCIDENTAL } from "./Note.constants";
import PitchUtils from "./Pitch.utils";

const getPreview = (data) => 'X Hz';
const getCaption = (data) => null;

const getMetaChildren = data => {
	return [
		{
			pathId: 0,
			label: 'Pitch',
			name: PitchUtils.getPreview(data[0]),
			preview: null,
			modelId: MODEL_ID.Pitch,
			modelData: data[0]
		},
		{
			pathId: 1,
			label: 'Degree',
			name: DegreeUtils.getPreview(data[1]),
			preview: null,
			modelId: MODEL_ID.Degree,
			modelData: data[1]
		}
	];
};


const getAccidentalOffset = (pod) => {
	const [p, d] = pod;
	let offset = p - ROOT_SCALE[d][0];
	return offset;
}

const getAccidentalString = (offset, d) => {
	// TODO figure out edge case
	if (d === 0 && offset === 11) offset = offset - 12;
	if (d === 6 && offset === -11) offset = offset + 12;
	if (offset > 0) {
		return ACCIDENTAL.sharp.symbol.repeat(offset);
	}
	else if (offset < 0) {
		return ACCIDENTAL.flat.symbol.repeat(-offset);
	}
	return '';
};

const getName = (pod) => {
	const offset = getAccidentalOffset(pod);
	const accidental = getAccidentalString(offset, pod[1]);
	const spelling = DEGREE_VALUES[pod[1]].name;
	return `${spelling}${accidental}`;
}

const getPodAtPitch = (data, p) => PodUtils.getPodAtPitch(data, p);

export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch,
	getMetaChildren
}
