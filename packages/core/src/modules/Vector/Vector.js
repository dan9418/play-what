import Utils from '../Utils';
import PW_Color from '@pw/color';

import Interval from './Vector.Interval';
import Note from './Vector.Note';

const max = {
	p: 12,
	d: 7
};

const isValid = (vector) => {
	return vector !== null && typeof vector === 'object' && typeof vector.p === 'number' && typeof vector.d === 'number';
};

const areEqual = ({ interval1, interval2 }) => {
	if (!interval1 || !interval2) return false;
	return interval1.p === interval2.p && interval1.d === interval2.d;
};

const add = ({ x, y }) => ({
	p: Utils.moduloSum(x.p, y.p, max.p),
	d: Utils.moduloSum(x.d, y.d, max.d)
});

const reduce = ({ p, d }) => ({ p: Utils.modulo(p, max.p), d });

const findNoteWithPitch = (notes, pitch, octaveReduce = true) => {
	const p = octaveReduce ? Utils.modulo(pitch, max.p) : pitch;
	return notes.find((n) => n.p === p) || null;
};

const findIndexOfNoteWithPitch = (notes, pitch, octaveReduce = true) => {
	const p = octaveReduce ? Utils.modulo(pitch, max.p) : pitch;
	return notes.findIndex((n) => n.p === p);
};

const addVector = ({ a, b }) => ({
	p: Utils.moduloSum(a.p, b.p, max.p),
	d: Utils.moduloSum(a.d, b.d, max.d)
});

const addMatrix = ({ a, B }) => B.map((b) => addVector({ a, b }));

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
		return PW_Color.Scheme.Degree[`d${data.d + 1}`];
	case 'pitchClass':
		return PW_Color.Scheme.PitchClass[`pc${data.p}`];
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
		return pod ? pod.d + 1 : '';
	case 'pitchClass':
		return pod ? pod.p : '';
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

export default {
	Note,
	Interval,
	max,
	isValid,
	areEqual,
	add,
	reduce,
	findNoteWithPitch,
	findIndexOfNoteWithPitch,
	addVector,
	addMatrix,
	parseColorProp,
	colorBy,
	parseTextProp,
	textBy
};
