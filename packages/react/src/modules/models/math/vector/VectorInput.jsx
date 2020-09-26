import React from 'react';
import './vector.css';
import ScalarInput from '../scalar/ScalarInput';

export const VectorInput = ({ value, setValue }) => {
	const [p, d] = value;
	const setP = v => setValue([v, d]);
	const setD = v => setValue([p, v]);
	return (
		<div className='vector-input'>
			{/*<div className='vector-open-bracket'>|</div>*/}
			<ScalarInput value={p} setValue={setP} />
			<div className='vector-comma'>,</div>
			<ScalarInput value={d} setValue={setD} />
			{/*<div className='vector-open-bracket'>|</div>*/}
		</div>
	);
};
export default VectorInput;
