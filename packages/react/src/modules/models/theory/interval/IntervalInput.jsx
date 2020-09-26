import React from 'react';
import './interval.css';
import PW_Core from '@pw/core';
import DropdownInput from '../../ui/DropdownInput/DropdownInput';

const INTERVALS = PW_Core.models.theory.interval.presetValues;

export const IntervalInput = ({ value, setValue }) => {
	const [p, d] = value;

	return (
		<div className='interval-input'>
			<DropdownInput options={INTERVALS} value={value} setValue={setValue} displayProperty='id' />
		</div>
	);
};
export default IntervalInput;
