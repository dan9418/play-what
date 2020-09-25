import React from 'react';
import './matrix.css';

import VectorInput from '../vector/VectorInput';

import PW_Core from '@pw/core';

const getInput = (podType) => {
	switch (podType) {
	case 'pod':
		return VectorInput;
	case 'interval':
		return React.Fragment;
	case 'note':
		return React.Fragment;
	}
}


const SingleInput = ({ value, setValue, podType }) => {
	const InputComponent = getInput(podType)
	return <div className="l-r" >
		<InputComponent value={value} setValue={setValue} />
		<div>{JSON.stringify(value)}</div>
	</div>;
}

const MultiInput = props => {
	const { value, setValue, modelType, podType } = props;

	switch (modelType) {
	case 'scalar':
		return value;
	case 'vector':
		return <SingleInput value={value} setValue={setValue} podType={podType} />;
	case 'matrix':
		return (
			<div className="multi-input">
				{value.map((v, i) => {
					const setSubValue = r => setValue([...value.slice(0, i), r, ...value.slice(i + 1)]);
					return <SingleInput value={v} setValue={setSubValue} podType={podType} key={i} />;
				})}
			</div>
		);
	default:
		return null;
	}
}

export default MultiInput;
