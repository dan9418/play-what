import PW_Core from '@pw/core';
import PW_Color from '@pw/color';
import React from 'react';
import './Meter.css';

const getPitchColor = PW_Core.models.theory.pitch.getColor;
const getDegreeColor = PW_Core.models.theory.degree.getColor;

const Cell = ({ text, vector, colorFn }) => {

	const color = colorFn(vector);
	const style = PW_Color.getStylesFromBgColor(color);

	return (
		<div className='cell' style={style}>
			{text}
		</div>
	);
};

const MatrixMeter = ({ max, matrix, colorFn }) => {
	const P = [];
	const D = [];
	for (let i = 0; i < max; i++) {
		const value = scalarList.find(v => PW_Core.models.math.scalar.modulo({ a: v, b: max }) === i);
		const reduced = PW_Core.models.math.scalar.modulo({ a: value, b: max });

		P.push(<Cell key={i} text={i} colorFn={getPitchColor} vector={reduced} />);
		D.push(<Cell key={i} text={i} colorFn={getDegreeColor} vector={reduced} />);
	}
	return (
		<div className='meter-container'>
			<div className='meter'>{P}</div>
			<div className='meter'>{D}</div>
		</div>
	);
};

const Meter = ({ value, modelType, max, ...props }) => {
	switch (modelType) {
	case 'vector':
		return <MatrixMeter matrix={[value]} max={max} {...props} />;
	case 'matrix':
		return <MatrixMeter matrix={value} max={max} {...props} />;
	default:
		return null;
	}
}

export default Meter;
