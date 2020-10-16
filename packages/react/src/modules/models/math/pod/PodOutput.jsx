import React from 'react';
import './pod.css';

export const PodOutput = ({ value, setValue }) => {
	const [p, d] = value;
	return (
		<div className='pod-output output'>
			<div className='pod-open-bracket'>[</div>
			<span>{p}</span>
			<div className='pod-comma'>,</div>
			<span>{d}</span>
			<div className='pod-open-bracket'>]</div>
		</div>
	);
};
export default PodOutput;
