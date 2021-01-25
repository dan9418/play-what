import { PRESET_TYPES } from "@pw/core/src/Pod.presets";
import ButtonInput from "@pw/react/src/ui/ButtonInput/ButtonInput";
import DropdownInput from "@pw/react/src/ui/DropdownInput/DropdownInput";
import React, { useEffect, useState } from "react";

const InputPresetBox = () => {
	const [type, setType] = useState(PRESET_TYPES[0]);
	const [preset, setPreset] = useState(PRESET_TYPES[0].presets[0]);

	const setHelper = () => null;

	useEffect(() => {
		setPreset(type.presets[0]);
	}, [type.id]);

	return (
		<>
			<div className='input-bar'>
				<div>Type</div>
				<DropdownInput options={PRESET_TYPES} value={type} setValue={setType} />
			</div>
			<div className='input-bar'>
				<div>Preset</div>
				<DropdownInput options={type.presets} value={preset} setValue={setPreset} />
			</div>
			<div className='input-bar'>
				<div />
				<ButtonInput onClick={setHelper}>Import</ButtonInput>
			</div>
		</>
	);
};

export default InputPresetBox;
