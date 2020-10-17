import React from 'react';
import './index.css';

const IndexInput = props => {
	const { value, setValue, className } = props;

	const disabled = typeof value === 'undefined' || typeof value === null || !setValue;

	return (
		<input className={`index-input  ${className}`} type='number' disabled={disabled} value={value} onChange={e => setValue(parseInt(e.target.value))} />
	);
}

export default IndexInput;
