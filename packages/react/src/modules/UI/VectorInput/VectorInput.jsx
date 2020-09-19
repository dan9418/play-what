import React from 'react';
import './VectorInput.css';
import ScalarInput from '../ScalarInput/ScalarInput';

export const VectorInput = ({ value, setValue }) => {
	const [p, d] = value;
	const setP = v => setValue([v, d]);
	const setD = v => setValue([p, v]);
	return (
		<div className='pod-input'>
			<ScalarInput value={p} setValue={setP} />
			<ScalarInput value={d} setValue={setD} />
		</div>
	);
};
export default VectorInput;
