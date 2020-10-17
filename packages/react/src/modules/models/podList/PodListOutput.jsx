import React from 'react';
import PodOutput from '../pod/PodOutput';
import './podList.css';

export const podListOutput = ({ value, setValue }) => {
	return (
		<div className='podList-output'>
			{value.map((v, i) => <PodOutput value={v} key={i} />)}
		</div>
	);
};
export default podListOutput;
