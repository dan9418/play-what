import React from 'react';
import './interval.css';
import PW_Core from '@pw/core';
import PW_Tone from '@pw/tone';

export const IntervalInput = ({ value, reduce }) => {
	const interval = reduce ? PW_Core.models.math.vector.reduce({ a: value }) : value;

	const [p, d] = interval;

	const name = PW_Core.models.theory.interval.getName({ a: interval });

	const color = PW_Core.models.theory.degree.getColor(d);
	const style = {
		border: `1px solid ${color}`
	};

	const froot = PW_Core.tuning.getFrequency(0);
	const f = PW_Core.tuning.getFrequency(p);
	const onClick = () => PW_Tone.out.play([froot, f]);

	return (
		<div className='interval-output output' style={style} onClick={onClick}>
			{name}
		</div>
	);
};
export default IntervalInput;
