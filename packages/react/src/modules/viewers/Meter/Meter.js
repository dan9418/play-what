import pw_core from '@pw/core';
import pw_color from '@pw/color';
import React from 'react';
import './Meter.css';

const getPitchColor = pw_core.models.theory.pitch.getColor;
const getDegreeColor = pw_core.models.theory.degree.getColor;
const modulo = pw_core.models.math.scalar.modulo;
const MAX = pw_core.models.math.vector.max;

const ListMeter = ({ list }) => {
	const cells = list.map((l, i) => <div className='cell' style={l.style} key={i}>{l.text}</div>);
	return (
		<div className='meter'>
			{cells}
		</div>
	);
};

const ScalarListMeter = ({ max, nameFn, scalarList, colorFn }) => {
	const list = [];
	for (let i = 0; i < max; i++) {
		const value = scalarList.find(v => pw_core.models.math.scalar.modulo({ a: v, b: max }) === i);
		const reduced = pw_core.models.math.scalar.modulo({ a: value, b: max });
		const color = colorFn ? colorFn(reduced) : pw_core.models.theory.pitch.getColor(reduced);

		const style = pw_color.getStylesFromBgColor(color);
		const text = nameFn ? nameFn(i) : i;

		list.push({ style, text });
	}
	return <ListMeter list={list} />
};

const MatrixMeter = ({ matrix, ...props }) => {
	const P = matrix.map(([p, d]) => p);
	const D = matrix.map(([p, d]) => d);
	return (
		<>
			<label className='meter-label'>pitch</label>
			<ScalarListMeter scalarList={P} max={MAX[0]} colorFn={getPitchColor} {...props} />
			<label className='meter-label'>degree</label>
			<ScalarListMeter scalarList={D} max={MAX[1]} colorFn={getDegreeColor} {...props} />
		</>
	);
}

const Meter = ({ value, modelType, podType, ...props }) => {
	switch (modelType) {
	case 'vector':
		return <MatrixMeter matrix={[value]} {...props} />;
	case 'matrix':
		return <MatrixMeter matrix={value} {...props} />;
	default:
		return null;
	}
}

export default Meter;
