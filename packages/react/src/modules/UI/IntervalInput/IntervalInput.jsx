import React from 'react';
import './IntervalInput.css';

import PW_Core from '@pw/core';
import Dropdown from '../Dropdown/Dropdown';

const CUSTOM_INTERVAL = {
	id: 'n/a',
	name: 'n/a',
	value: [0,0]
};

const DATA = [...PW_Core.Presets.INTERVALS_VALUES, CUSTOM_INTERVAL];

const areIntervalsEqual = (a, b) => a[0] === b.a[0] && a[1] === b.a[1];

const findPreset = interval => {
	const preset = PW_Core.Presets.INTERVALS_VALUES.find(p => areIntervalsEqual(interval, p));
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
