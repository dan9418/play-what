import * as React from 'react';
import './SwitchInput.css';

const SwitchInput = ({ value, setValue }) => {
	let classes = ['switch-input', value ? 'pw-accent' : ''];
	return (
		<div className={classes.join(' ')} onClick={() => setValue(!value)}>
			<div className='ball' />
		</div>
	);
}

export default SwitchInput;
