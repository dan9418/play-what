import React from 'react';
import pw_core from '@pw/core';
import DropdownInput from '../../ui/DropdownInput/DropdownInput';

const SCALES = pw_core.models.podList.scale.presetValues;

export const ScaleInput = ({ value, setValue }) => {
	const [p, d] = value;
	const selectedPreset = SCALES.find(n => n.value[0] === p && n.value[1] === d);
	const setScale = v => setValue(v.value);

	return (
		<div className='scale-input'>
			<DropdownInput options={SCALES} value={selectedPreset} setValue={setScale} />
		</div>
	);
};
export default ScaleInput;
