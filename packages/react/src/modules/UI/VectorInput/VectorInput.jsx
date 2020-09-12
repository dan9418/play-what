import React from 'react';
import './VectorInput.css';
import ScalarInput from '../ScalarInput/ScalerInput';

export const VectorInput = ({ value, setValue }) => {
    const { p, d } = value;
    const setP = v => setValue({ d: d, p: v });
    const setD = v => setValue({ d: v, p: p });
    return (
        <div className='vector-input'>
            <ScalarInput value={d} setValue={setD} />
            <ScalarInput value={p} setValue={setP} />
        </div>
    );
};
export default VectorInput;
