import React from 'react';
import VectorOutput from '../vector/VectorOutput';
import './matrix.css';

export const MatrixOutput = ({ value, setValue }) => {
	return (
		<div className='matrix-output'>
			{value.map((v, i) => <VectorOutput value={v} key={i} />)}
		</div>
	);
};
export default MatrixOutput;
