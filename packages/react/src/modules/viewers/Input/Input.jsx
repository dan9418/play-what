import React from 'react';
import ScalarInput from '../../models/math/scalar/ScalarInput';
import VectorInput from '../../models/math/vector/VectorInput';
import MultiInput from '../../models/math/matrix/MultiInput';

const GenericPreview = ({ value }) => <div>{value}</div>

const getInputComponent = type => {
	switch (type) {
	case 'scalar':
		return ScalarInput;
	case 'vector':
		return VectorInput;
	case 'matrix':
		return MultiInput;
	case 'string':
	case 'scalar':
		return GenericPreview
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
