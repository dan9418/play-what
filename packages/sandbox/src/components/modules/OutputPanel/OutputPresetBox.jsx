import { VIEWER_VALUES } from "@pw/react";
import ButtonInput from "@pw/react/src/ui/ButtonInput/ButtonInput";
import DropdownInput from "@pw/react/src/ui/DropdownInput/DropdownInput";
import React, { useEffect, useState } from "react";

const OutputPresetBox = () => {
	const [type, setType] = useState(VIEWER_VALUES[0]);
	const [preset, setPreset] = useState(VIEWER_VALUES[0].presets[0]);
	const setViewerPreset = null;

	useEffect(() => {
		setPreset(type.presets[0]);
	}, [type.id]);

	const setHelper = () => {
		setViewerPreset(type.id, preset.value);
	};

	return (
		<>
			<div className='input-bar'>
				<div>Viewer</div>
				<DropdownInput options={VIEWER_VALUES} value={type} setValue={setType} />
			</div>
			<div className='input-bar'>
				<div>Preset</div>
				<DropdownInput options={type.presets} value={preset} setValue={setPreset} />
			</div>
			<div className='input-bar'>
				<div />
				<ButtonInput onClick={setHelper}>Update</ButtonInput>
			</div>
		</>
	);
};

export default OutputPresetBox;
