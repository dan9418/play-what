import React from 'react';
import "./NumericInput.css";

const NumericInput = props => {
	const { value, setValue } = props;

	const onChange = e => setValue(e.target.value);

	return (
		<input className="numeric-input" type="number" value={value} onChange={onChange} />
	);
}

export default NumericInput;
