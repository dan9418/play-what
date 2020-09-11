import React from 'react';
import './ScalarInput.css';

const ScalarInput = props => {
    const { value, setValue, className } = props;

    const disabled = typeof value === 'undefined' || typeof value === null;

    return (
        <input className={`scalar-input  ${className}`} type='number' disabled={disabled} value={value} onChange={e => setValue(parseInt(e.target.value))} />
    );
}

export default ScalarInput;
