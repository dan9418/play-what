import React from 'react';
import './note.css';
import PW_Core from '@pw/core';
import DropdownInput from '../../ui/DropdownInput/DropdownInput';

const NOTES = PW_Core.models.theory.note.presetValues;

export const NoteInput = ({ value, setValue }) => {
	const [p, d] = value;
	const selectedPreset = NOTES.find(n => n.value[0] === p && n.value[1] === d);
	const setNote = v => setValue(v.value);

	return (
		<div className='note-input'>
			<DropdownInput options={NOTES} value={selectedPreset} setValue={setNote} />
		</div>
	);
};
export default NoteInput;
