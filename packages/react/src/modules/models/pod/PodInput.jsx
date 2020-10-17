import React from 'react';
import './pod.css';
import IndexInput from '../index/IndexInput';

export const PodInput = ({ value, setValue }) => {
	const [p, d] = value;
	const setP = v => setValue([v, d]);
	const setD = v => setValue([p, v]);
	return (
		<div className='pod-input'>
			{/*<div className='pod-open-bracket'>|</div>*/}
			<IndexInput value={p} setValue={setP} />
			<div className='pod-comma'>,</div>
			<IndexInput value={d} setValue={setD} />
			{/*<div className='pod-open-bracket'>|</div>*/}
		</div>
	);
};
export default PodInput;
