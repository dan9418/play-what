import pw_core from "@pw/core";
import React, { useState } from "react";
import DropdownInput from "../../ui/DropdownInput/DropdownInput";
import ChordInput from "./ChordInput";
import IntervalInput from "../pod/IntervalInput";
import NoteInput from "../pod/NoteInput";
import ScaleInput from "./ScaleInput";

const POD_TYPES = [
	{
		id: 'note',
		name: 'Note',
		input: NoteInput
	},
	{
		id: 'interval',
		name: 'Interval',
		input: IntervalInput
	}
];

const podList_TYPES = [
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

const TYPES = {
	pod: POD_TYPES,
	podList: podList_TYPES
}

const PodListPresetInput = ({ value, setValue, modelType }) => {
	//if (!value) return null;

	const model = TYPES[modelType];
	const [type, setType] = useState(model[0]);
	const InputComponent = type.input;

	return (
		<div className='preset-input'>
			<DropdownInput options={model} value={type} setValue={setType} />
			<InputComponent value={value} setValue={setValue} />
		</div>
	);
};

export default PodListPresetInput;
