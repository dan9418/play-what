import React from 'react';
import './PodInput.css';
import ScalarInput from '../ScalarInput/ScalarInput';

export const PodInput = ({ value, setValue }) => {
	const [p, d] = value;
	const setP = v => setValue([v, d]);
	const setD = v => setValue([p, v]);
	return (
		<div className='pod-input'>
			<div className='pod-open-bracket'>|</div>
			<ScalarInput value={p} setValue={setP} />
			<div className='pod-comma'>,</div>
			<ScalarInput value={d} setValue={setD} />
			<div className='pod-open-bracket'>|</div>
		</div>
	);
};
export default PodInput;
