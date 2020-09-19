import React from 'react';
import './IntegerInput.css';

const IntegerInput = props => {
	const { value, setValue, className } = props;

	const disabled = typeof value === 'undefined' || typeof value === null || !setValue;

	return (
		<input className={`integer-input  ${className}`} type='number' disabled={disabled} value={value} onChange={e => setValue(parseInt(e.target.value))} />
	);
}

export default IntegerInput;
