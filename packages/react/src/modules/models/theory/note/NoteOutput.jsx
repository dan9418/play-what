import React from 'react';
import './note.css';
import PW_Core from '@pw/core';
import PW_Tone from '@pw/tone';

export const NoteOutput = ({ value, reduce }) => {
	const note = reduce ? PW_Core.models.math.vector.reduce(value) : value;

	const [p, d] = note;

	const name = PW_Core.models.theory.note.getName({ A: note });

	const color = PW_Core.models.theory.degree.getColor(d);
	const style = {
		border: `1px solid ${color}`
	};

	const f = PW_Core.tuning.getFrequency(p);
	const onClick = () => PW_Tone.out.play(f);

	return (
		<div className='note-output output' style={style} onClick={onClick}>
			{name}
		</div>
	);
};
export default NoteOutput;
