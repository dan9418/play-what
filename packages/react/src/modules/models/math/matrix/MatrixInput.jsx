import React from 'react';
import './matrix.css';

import VectorInput from '../vector/VectorInput';

import PW_Core from '@pw/core';

const MatrixInput = props => {
	const { value, setValue } = props;

	const vectors = value.map((v, i) => {
		const setVectorValue = r => setValue([...value.slice(0, i), r, ...value.slice(i + 1)]);
		return <VectorInput key={i} value={v} setValue={setVectorValue} />;
	});

	return (
		<div className="matrix-input">
			{vectors}
		</div>
	);
}

export default MatrixInput;
