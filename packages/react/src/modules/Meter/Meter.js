import PW_Core from '@pw/core';
import PW_Color from '@pw/color';
import React from 'react';
import './Meter.css';

export const ScalarMeter = ({ max, values, colorFn }) => {

	const cells = [];
	for (let i = 0; i < max; i++) {
		const value = values.find(v => PW_Core.models.integer.modulo(v, max) === i);
		const reduced = PW_Core.models.integer.modulo(value, max);
		const color = colorFn(reduced);

		let styles = PW_Color.getStylesFromBgColor(color);

		cells.push(<div className='cell' style={styles} key={i}>{i}</div>)
	}

	return (
		<div className='meter'>
			{cells}
		</div>
	);
};

export const VectorMeter = ({ values, max }) => {
	const maxP = max[0];
	const maxD = max[1];
	const P = values.map(v => v[0]);
	const D = values.map(v => v[1]);
	const colorFnP = PW_Core.theory.pitchClass.getColor;
	const colorFnD = PW_Core.theory.degree.getColor;
	return (
		<>
			<ScalarMeter values={P} max={maxP} colorFn={colorFnP} />
			<ScalarMeter values={D} max={maxD} colorFn={colorFnD} />
		</>
	);
}
