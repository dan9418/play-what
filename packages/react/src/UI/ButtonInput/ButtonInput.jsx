import React from 'react';
import './ButtonInput.css';

const ButtonInput = props => {
    const { disabled, onClick, children, className, highlight, hoverable } = props;

    const hov = onClick || hoverable;
    const isDisabled = disabled || false;
    const clickHander = onClick || (() => null);

    const cn = `${className ? className : ''} button-input ${hov ? 'pw-hov' : ''} `;

    return (
        <button className={cn} type='button' disabled={isDisabled} onClick={clickHander} >{children}</button>
    );
}

export default ButtonInput;
