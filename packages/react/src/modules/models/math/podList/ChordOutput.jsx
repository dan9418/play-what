import React from 'react';
import './chord.css';
import pw_core from '@pw/core';
import pw_tone from '@pw/tone';

export const ChordOutput = ({ value, reduce }) => {
	const chord = reduce ? pw_core.models.math.pod.reduce({ a: value }) : value;

	const [p, d] = chord;

	const name = pw_core.models.theory.chord.getName({ a: chord });

	const color = pw_core.models.theory.degree.getColor(d);
	const style = {
		border: `1px solid ${color}`
	};

	const f = pw_core.tuning.getFrequency(p);
	const onClick = () => pw_tone.out.play(f);

	return (
		<div className='chord-output output' style={style} onClick={onClick}>
			{name}
		</div>
	);
};
export default ChordOutput;
