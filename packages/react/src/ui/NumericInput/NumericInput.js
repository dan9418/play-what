import React from 'react';
import "./NumericInput.css";

const NumericInput = ({ value, setValue, ...props }) => {
	const onChange = e => setValue(e.target.value);

	return (
		<input className="numeric-input" type="number" value={value} onChange={onChange} {...props} />
	);
}

export default NumericInput;
