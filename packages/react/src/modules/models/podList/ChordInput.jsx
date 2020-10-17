import React from 'react';
import pw_core from '@pw/core';
import DropdownInput from '../../ui/DropdownInput/DropdownInput';

const CHORDS = pw_core.models.podList.chord.presetValues;

export const ChordInput = ({ value, setValue }) => {
	const [p, d] = value;
	const selectedPreset = { id: '' }; //CHORDS.find(n => n.value[0] === p && n.value[1] === d);
	const setChord = v => setValue(v.value);

	return (
		<div className='chord-input'>
			<DropdownInput options={CHORDS} value={selectedPreset} setValue={setChord} />
		</div>
	);
};
export default ChordInput;
