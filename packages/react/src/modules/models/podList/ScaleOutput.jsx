import React from 'react';
import './scale.css';
import pw_core from '@pw/core';
import pw_tone from '@pw/tone';

export const ScaleOutput = ({ value, reduce }) => {
	const scale = reduce ? pw_core.models.math.pod.reduce({ a: value }) : value;

	const [p, d] = scale;

	const name = pw_core.models.theory.scale.getName({ a: scale });

	const color = pw_core.models.theory.degree.getColor(d);
	const style = {
		border: `1px solid ${color}`
	};

	const f = pw_core.tuning.getFrequency(p);
	const onClick = () => pw_tone.out.play(f);

	return (
		<div className='scale-output output' style={style} onClick={onClick}>
			{name}
		</div>
	);
};
export default ScaleOutput;
