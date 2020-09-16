import PW_Core from '@pw/core';
import React from 'react';
import './Meter.css';

const Meter = ({ type, pods }) => {
	let count = type === 'degree' ? 7 : 12;
	let prop = type === 'degree' ? 1 : 0;
	let colorFn = PW_Core.models.vector.colorBy({ type });

	const cells = [];
	for (let i = 0; i < count; i++) {
		const pod = pods.find(ivl => PW_Core.models.scalar.modulo(ivl[prop], count) === i);

		let styles = {};
		if (pod) {
			styles = colorFn({ pod });
		};

		cells.push(<div className='cell' style={styles} key={i}>{i}</div>)
	}

	return (
		<div className='meter'>
			{cells}
		</div>
	);
};

const PodMeter = ({ pods }) => {
	return (
		<>
			<Meter pods={pods} type='degree' />
			<Meter pods={pods} type='pitchClass' />
		</>
	);
}

export default PodMeter;
