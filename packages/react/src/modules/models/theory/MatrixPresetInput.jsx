import pw_core from "@pw/core";
import React, { useState } from "react";
import DropdownInput from "../ui/DropdownInput/DropdownInput";
import ChordInput from "./chord/ChordInput";
import ScaleInput from "./scale/ScaleInput";

const MATRIX_TYPES = [
	{
		id: 'chord',
		name: 'Chord',
		input: ChordInput
	},
	{
		id: 'scale',
		name: 'Scale',
		input: ScaleInput
	}
];

const MatrixPresetInput = ({ value, setValue }) => {
	//if (!value) return null;

	const [type, setType] = useState(MATRIX_TYPES[0]);
	const InputComponent = type.input;

	return (
		<div className='preset-input'>
			<DropdownInput options={MATRIX_TYPES} value={type} setValue={setType} />
			<InputComponent value={value} setValue={setValue} />
		</div>
	);
};

export default MatrixPresetInput;
