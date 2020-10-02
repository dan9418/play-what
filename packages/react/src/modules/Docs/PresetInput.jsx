import pw_core from "@pw/core";
import React, { useState } from "react";
import DropdownInput from "../models/ui/DropdownInput/DropdownInput";

const VECTOR_PRESETS = [
	{
		id: 'note',
		name: 'Note',
		values: pw_core.models.theory.note.presetValues
	},
	{
		id: 'interval',
		name: 'Interval',
		values: pw_core.models.theory.interval.presetValues
	}
];

const MATRIX_PRESETS = [
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
];

const PresetInput = ({ value, setValue, modelType }) => {
	//if (!value) return null;

	let presets = null;
	switch (modelType) {
	case 'scalar':
		return null;
	case 'vector':
		presets = VECTOR_PRESETS;
		break;
	case 'matrix':
		presets = MATRIX_PRESETS;
		break;
	default:
		return null;
	}

	const [type, setType] = useState(presets[0]);
	const [preset, setPreset] = useState(presets[0].values[0]);

	const setPresetValue = p => setValue(p.value);

	return (
		<div className='preset-input'>
			<DropdownInput options={presets} value={type} setValue={setType} />
			<DropdownInput options={type.values} value={preset} setValue={setPresetValue} />
		</div>
	);
};

export default PresetInput;
