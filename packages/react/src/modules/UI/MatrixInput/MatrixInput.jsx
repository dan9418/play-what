import React from 'react';
import './MatrixInput.css';

import VectorInput from '../VectorInput/VectorInput';

import PW from '@play-what/core';

const MatrixInput = props => {
    const { value, setValue } = props;

    const vectors = value.map((v, i) => {
        const setVectorValue = r => setValue([...value.slice(0, i), r, ...value.slice(i + 1)]);
        return <VectorInput key={i} value={v} setValue={setVectorValue} />;
    });

    return (
        <div className="matrix-input">
            {vectors}
        </div>
    );
}

export default MatrixInput;
