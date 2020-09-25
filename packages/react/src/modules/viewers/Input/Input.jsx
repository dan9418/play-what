import React from 'react';
import ScalarInput from '../../models/math/ScalarInput/ScalarInput';
import PodInput from '../../models/math/PodInput/PodInput';
import PodListInput from '../../models/math/PodListInput/PodListInput';

const GenericOutput = ({ value }) => <div>{value}</div>

const getInputComponent = type => {
	switch (type) {
	case 'scalar':
		return ScalarInput;
	case 'pod':
		return PodInput;
	case 'podList':
		return PodListInput;
	case 'string':
	case 'scalar':
		return GenericOutput
	default:
		return null;
	}
}

const Input = ({ value, setValue, mathType, theoryType, max, ...props }) => {
	const InputComponent = getInputComponent(mathType);
	return (
		<InputComponent value={value} setValue={setValue} max={max} />
	);
}

export default Input;
