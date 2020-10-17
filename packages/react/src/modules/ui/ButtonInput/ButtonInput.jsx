import React from 'react';
import './ButtonInput.css';

const ButtonInput = props => {
	const { disabled, onClick, children, className, active, hoverable } = props;

	const hov = onClick || hoverable;
	const isDisabled = disabled || false;
	const clickHander = onClick || (() => null);

	const cn = `${className ? className : ''} button-input ${hov ? 'pw-hov' : ''} ${active ? 'active' : ''}`;

	return (
		<button className={cn} type='button' disabled={isDisabled} onClick={clickHander} >{children}</button>
	);
}

export default ButtonInput;
