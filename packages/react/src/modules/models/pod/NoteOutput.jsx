import React from 'react';
import './note.css';
import pw_core from '@pw/core';
import pw_tone from '@pw/tone';

export const NoteOutput = ({ value, reduce }) => {
	const note = reduce ? pw_core.models.math.pod.reduce({ a: value }) : value;

	const [p, d] = note;

	const name = pw_core.models.theory.note.getName({ a: note });

	const color = pw_core.models.theory.degree.getColor(d);
	const style = {
		border: `1px solid ${color}`
	};

	const f = pw_core.tuning.getFrequency(p);
	const onClick = () => pw_tone.out.play(f);

	return (
		<div className='note-output output' style={style} onClick={onClick}>
			{name}
		</div>
	);
};
export default NoteOutput;
