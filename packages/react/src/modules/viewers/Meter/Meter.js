import PW_Core from '@pw/core';
import PW_Color from '@pw/color';
import React from 'react';
import './Meter.css';

const getPitchColor = PW_Core.models.theory.pitch.getColor;
const getDegreeColor = PW_Core.models.theory.degree.getColor;
const modulo = PW_Core.models.math.scalar.modulo;
const MAX = PW_Core.models.math.vector.max;

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
		const value = scalarList.find(v => PW_Core.models.math.scalar.modulo({ a: v, b: max }) === i);
		const reduced = PW_Core.models.math.scalar.modulo({ a: value, b: max });
		const color = colorFn ? colorFn(reduced) : PW_Core.models.theory.pitch.getColor(reduced);

		const style = PW_Color.getStylesFromBgColor(color);
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
			<ScalarListMeter scalarList={P} max={MAX[0]} colorFn={getPitchColor} {...props} />
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
