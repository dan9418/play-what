import PW from '@play-what/core';
import React from 'react';
import './Meter.css';
import { Interval, KeyCenter, Note } from './ConceptHelpers';

const Meter = ({ type, pods }) => {
    let count = type === 'degree' ? 7 : 12;
    let prop = type === 'degree' ? 'd' : 'p';
    let colorFn = PW.api.Vector.colorBy({ type });

    const cells = [];
    for (let i = 0; i < count; i++) {
        const pod = pods.find(ivl => PW.api.Utils.modulo(ivl[prop], count) === i);

        let styles = {};
        if (pod) {
            styles = colorFn({ pod });
        };

        cells.push(<div className='cell' style={styles} key={i}>{i}</div>)
    }

    return (
        <div className='meter'>
            {cells}
        </div>
    );
};

const PodMeter = ({ pods }) => {
    return (
        <>
            <Meter pods={pods} type='degree' />
            <Meter pods={pods} type='pitchClass' />
        </>
    );
}

export default PodMeter;
