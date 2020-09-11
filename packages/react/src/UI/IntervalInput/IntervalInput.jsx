import React from 'react';
import './IntervalInput.css';

import PW from '@play-what/core';
import Dropdown from '../Dropdown/Dropdown';

const CUSTOM_INTERVAL = {
    id: 'n/a',
    name: 'n/a',
    p: 0,
    d: 0
};

const DATA = [...PW.Presets.INTERVALS_VALUES, CUSTOM_INTERVAL];

const areIntervalsEqual = (a, b) => a.p === b.a.p && a.d === b.a.d;

const findPreset = interval => {
    const preset = PW.Presets.INTERVALS_VALUES.find(p => areIntervalsEqual(interval, p));
    return preset ? preset : { ...CUSTOM_INTERVAL };
}

const IntervalInput = props => {
    const namedInterval = findPreset(props.interval);

    const disabled = typeof value === 'undefined' || typeof value === null;

    return (
        <Dropdown options={DATA} disabled={disabled} value={namedInterval} setValue={props.setInterval} displayProperty='id' />
    );
}

export default IntervalInput;
