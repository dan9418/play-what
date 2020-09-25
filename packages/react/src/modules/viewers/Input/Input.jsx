import React from 'react';
import ScalarInput from '../../models/math/ScalarInput/ScalarInput';
import VectorInput from '../../models/math/VectorInput/VectorInput';
import MatrixInput from '../../models/math/MatrixInput/MatrixInput';

const GenericOutput = ({ value }) => <div>{value}</div>

const getInputComponent = type => {
	switch (type) {
	case 'scalar':
		return ScalarInput;
	case 'vector':
		return VectorInput;
	case 'matrix':
		return MatrixInput;
	case 'string':
	case 'scalar':
		return GenericOutput
	default:
		return null;
	}
}

const Input = ({ value, setValue, modelType, podType, max, ...props }) => {
	const InputComponent = getInputComponent(modelType);
	return (
		<InputComponent value={value} setValue={setValue} max={max} />
	);
}

export default Input;
