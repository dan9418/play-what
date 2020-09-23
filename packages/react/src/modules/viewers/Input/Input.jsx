import React from 'react';
import IntegerInput from '../../models/math/IntegerInput/IntegerInput';
import PodInput from '../../models/math/PodInput/PodInput';
import PodListInput from '../../models/math/PodListInput/PodListInput';

const getInputComponent = type => {
	switch (type) {
	case 'integer':
		return IntegerInput;
	case 'pod':
		return PodInput;
	case 'podList':
		return PodListInput;
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
