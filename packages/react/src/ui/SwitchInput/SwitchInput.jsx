import * as React from 'react';
import './SwitchInput.css';

const SwitchInput = ({ value, setValue }) => {
	let classes = ['switch-input', value ? 'pw-active' : 'pw-primary'];
	return (
		<div className={classes.join(' ')} onClick={() => setValue(!value)}>
			<div className='ball' />
		</div>
	);
}

export default SwitchInput;
