import React from 'react';
import './PodInput.css';
import IntegerInput from '../IntegerInput/IntegerInput';

export const PodInput = ({ value, setValue }) => {
	const [p, d] = value;
	const setP = v => setValue([v, d]);
	const setD = v => setValue([p, v]);
	return (
		<div className='pod-input'>
			<IntegerInput value={p} setValue={setP} />
			<IntegerInput value={d} setValue={setD} />
		</div>
	);
};
export default PodInput;
