import React from 'react';
import './vector.css';

export const VectorOutput = ({ value, setValue }) => {
	const [p, d] = value;
	return (
		<div className='vector-output output'>
			<div className='vector-open-bracket'>|</div>
			<span>{p}</span>
			<div className='vector-comma'>,</div>
			<span>{d}</span>
			<div className='vector-open-bracket'>|</div>
		</div>
	);
};
export default VectorOutput;
