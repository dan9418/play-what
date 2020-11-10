import React from 'react';
import './ButtonInput.css';

const ButtonInput = props => {
	const { disabled, onClick, children, className, isActive, hoverable } = props;

	const hov = onClick || hoverable;
	const isDisabled = disabled || false;
	const clickHander = onClick || (() => null);

	const cn = `button-input ${hov ? 'pw-hov' : ''} ${isActive ? 'pw-active' : 'pw-accent'} ${className ? className : ''}`;

	return (
		<button className={cn} type='button' disabled={isDisabled} onClick={clickHander} >{children}</button>
	);
}

export default ButtonInput;
