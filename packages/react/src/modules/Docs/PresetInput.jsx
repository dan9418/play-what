import pw_core from "@pw/core";
import React, { useState } from "react";
import DropdownInput from "../models/ui/DropdownInput/DropdownInput";

const PRESET_TYPES = [
	{
		id: 'chord',
		name: 'Chord',
		values: pw_core.models.theory.chord.presetValues
	},
	{
		id: 'scale',
		name: 'Scale',
		values: pw_core.models.theory.scale.presetValues
	}
]

const PresetInput = ({ value, setValue }) => {
	//if (!value) return null;

	const [type, setType] = useState(PRESET_TYPES[0]);
	const [preset, setPreset] = useState(PRESET_TYPES[0].values[0]);

	return (
		<div className='preset-input'>
			<DropdownInput options={PRESET_TYPES} value={type} setValue={setType} />
			<DropdownInput options={type.values} value={preset} setValue={setPreset} />
		</div>
	);
};

export default PresetInput;
