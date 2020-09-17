import PW_Core from '@pw/core';
import React from 'react';
import './Meter.css';

export const ScalarMeter = ({ max, values }) => {

	let colorFn = PW_Core.models.vector.colorBy({ type: 'pitchClass' });

	const cells = [];
	for (let i = 0; i < max; i++) {
		const value = values.find(v => PW_Core.models.scalar.modulo(v, max) === i);

		let styles = {};
		if (value) {
			styles = colorFn({ pod: value });
		};

		cells.push(<div className='cell' style={styles} key={i}>{i}</div>)
	}

	return (
		<div className='meter'>
			{cells}
		</div>
	);
};

export const VectorMeter = ({ values }) => {
	const P = values.map(v => v[0]);
	const D = values.map(v => v[1]);
	return (
		<>
			<ScalarMeter values={P} max={12} />
			<ScalarMeter values={D} max={7} />
		</>
	);
}
