import integer from './integer';
import PW_Color from '@pw/color';
import theory from '../theory/_module';

const max = [
	12,
	7
];

const isValid = (pod) => {
	return pod !== null && typeof pod === 'object' && typeof pod[0] === 'number' && typeof pod[1] === 'number';
};

const areEqual = ({ interval1, interval2 }) => {
	if (!interval1 || !interval2) return false;
	return interval1[0] === interval2[0] && interva[1] === interval[1];
};

const add = ([x, y]) => ([
	integer.moduloSum(x[0], y[0], max[0]),
	integer.moduloSum(x[1], y[1], max[1])
]);

const reduce = ([p, d]) => [integer.modulo(p, max[0]), integer.modulo(d, max[1])];

const findNoteWithPitch = (notes, pitch, octaveReduce = true) => {
	const p = octaveReduce ? integer.modulo(pitch, max[0]) : pitch;
	return notes.find((n) => n[0] === p) || null;
};

const findIndexOfNoteWithPitch = (notes, pitch, octaveReduce = true) => {
	const p = octaveReduce ? integer.modulo(pitch, max[0]) : pitch;
	return notes.findIndex((n) => n[0] === p);
};

const addPod = (a, b) => ([
	integer.moduloSum(a[0], b[0], max[0]),
	integer.moduloSum(a[1], b[1], max[1])
]);

const addPodList = ({ a, B }) => B.map((b) => addPod(a, b));

// const transpose = ({ a, interval }) => Interval.add(a, interval);

const parseColorProp = (props, ctx) => {
	const { pod, homePod, podIndex } = ctx;
	const { type, reduced } = props;

	if (!pod) return null;

	let data = { ...pod };
	if (reduced) {
		data = reduce(data);
	}
	switch (type) {
	// case 'binary':
	//  return data ? PW_Color.Scheme.Binary.active : PW_Color.Scheme.Binary.inacitve;
	case 'order':
		return PW_Color.Scheme.Degree[`d${podIndex + 1}`];
	case 'degree':
		return PW_Color.Scheme.Degree[`d${data[1] + 1}`];
	case 'pitchClass':
		return PW_Color.Scheme.PitchClass[`pc${data[0]}`];
	default:
		return null;
	}
};

const colorBy = (props) => {
	return (ctx) => {
		const bg = parseColorProp(props, ctx);
		const fg = PW_Color.getFgColor(bg);
		return {
			color: fg,
			backgroundColor: bg
		};
	};
};

const parseTextProp = (props, ctx) => {
	const { pod, homePod, podIndex } = ctx;
	const { type, reduced } = props;

	switch (type) {
	case 'order':
		return podIndex > -1 ? podIndex + 1 : '';
	case 'degree':
		return pod ? pod[1] + 1 : '';
	case 'pitchClass':
		return pod ? pod[0] : '';
	default:
		return '';
	}
};

const textBy = (props) => {
	return (ctx) => {
		const text = parseTextProp(props, ctx);
		return text;
	};
};

const getIntervalName = ({ pod }) => {
	if (pod[1] < 0 || po[1] > m[1]) {
		console.error('degree out of bounds', pod);
		return '';
	}
	const reduced = reduce(pod);
	const ivl = Object.values(preset.interval).find(({ value }) => value[0] === reduced[0] && val[1][1] === reduced[1][1]);
	return ivl ? ivl.id : '';
};

const getNoteName = ({ pod }) => {
	if (pod[1] < 0 || pod[1] > m[1]) {
		console.error('degree out of bounds', pod);
		return '';
	}
	const reduced = reduce(pod);
	const degree = theory.DEGREE_MAP[reduced[1]];
	if (!degree) {
		return '?';
	}
	return degree.name + theory.getAccidentalString(reduced[0] - degree[0]);
};

/* export const parseString = keyString => {
	if (typeof keyString !== 'string' || !keyString.length) {
		throw ('Bad keystring args')
	}
	const [tonicStr, accidentalStr] = utils.splitAt(keyString, 1);

	const degreeIndex = DEGREE_MAPPING.findIndex(d => d.name === tonicStr);

	const accidental = ACCIDENTAL_VALUES.find(a => a.name === accidentalStr) || ACCIDENTAL.Natural;

	return {
		id: keyString,
		name: keyString,
		p: DEGREE_MAPPING[degreeIndex].pitch + accidental.offset,
		d: degreeIndex
	};
}; */

export default {
	getIntervalName,
	getNoteName,
	max,
	isValid,
	areEqual,
	add,
	reduce,
	findNoteWithPitch,
	findIndexOfNoteWithPitch,
	addPod,
	addPodList,
	parseColorProp,
	colorBy,
	parseTextProp,
	textBy
};
