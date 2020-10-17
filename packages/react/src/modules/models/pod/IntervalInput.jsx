import React from 'react';
import pw_core from '@pw/core';
import DropdownInput from '../../ui/DropdownInput/DropdownInput';

const INTERVALS = pw_core.models.pod.interval.presetValues;

export const IntervalInput = ({ value, setValue }) => {
	const [p, d] = value;
	const selectedPreset = INTERVALS.find(n => n.value[0] === p && n.value[1] === d);
	const setIvl = v => setValue(v.value);

	return (
		<div className='interval-input'>
			<DropdownInput options={INTERVALS} value={selectedPreset} setValue={setIvl} displayProperty='id' />
		</div>
	);
};
export default IntervalInput;
