import React from 'react';
import ButtonInput from '../../UI/ButtonInput/ButtonInput';
import './TrueScale.css';

const TRUE_INTERVAL_MAP = [
    'P1',
    'm2',
    'M2',
    'm3',
    'M3',
    'P4',
    'TT',
    'TT',
    'P5',
    'm6',
    'm6',
    'M6',
    'm7',
    'm7',
    'M7',
    'M7'
]

const getHz = (fund, n) => {
    const octave = fund * 2;
    let hz = fund * n;
    while(hz > octave) {
        hz = hz / 2;
    }
    return hz;
}

const getButtons = (fundamental, n) => {
    const freq = [];
    for(let i = 1; i <= n; i++) {
        if(i % 2 === 1) {
            freq.push(getHz(fundamental, i));
        }
    }
    freq.sort((a, b) => a - b);
    return freq.map((f, i) => <ButtonInput key={i} onClick={}>{TRUE_INTERVAL_MAP[i]}</ButtonInput>);
}


const DEFAULT_PROPS = {
    fundamental: 100,
    n: 16
}
const TrueScale = props => {
    const config = { ...DEFAULT_PROPS, ...props };
    const { fundamental, n } = config;
    return (
        <div className="true-scale">
            {getButtons(fundamental, n)}
        </div>
    )
}

export default TrueScale;