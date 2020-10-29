import pw_core from "@pw/core";
import React, { useState } from "react";
import usePodContext from "../other/PodContext";
import ButtonInput from "../ui/ButtonInput/ButtonInput";
import DropdownInput from "../ui/DropdownInput/DropdownInput";

import EditDash from './EditDash';
import ModelTable from './ModelTable';

const getPresetOptions = (modelType, theoryType) => {
	if (modelType === 'pod') {
		if (theoryType === 'note') return pw_core.models.note.presetValues;
		else if (theoryType === 'interval') return pw_core.models.interval.presetValues;
	}
	else if (modelType === 'podList') {
		if (theoryType === 'chord') return pw_core.models.podList.chord.presetValues;
		else if (theoryType === 'scale') return pw_core.models.podList.scale.presetValues;
	}
	return [];
}

const ValueSubpanel = () => {
	const podContext = usePodContext();
	const { modelType, podType, theoryType, value, setValue } = podContext;

	const [isEditing, setIsEditing] = useState(false);
	const [isLoadingPreset, setIsLoadingPreset] = useState(false);
	return (
		<div className='subpanel'>
			<EditDash name="Value" isEditing={isEditing} setIsEditing={setIsEditing} />
			<ModelTable value={value} setValue={setValue} modelType={modelType} podType={podType} isEditing={isEditing} />
			{isEditing && (
				<div className='preset-box' >
					<ButtonInput onClick={() => setIsLoadingPreset(!isLoadingPreset)}>Load Preset</ButtonInput>
				</div>
			)}
			{isLoadingPreset && (
				<div>
					<DropdownInput
						options={getPresetOptions(modelType, theoryType)}
						value={value}
						setValue={v => setValue(v.value)}
					/>
				</div>
			)}
		</div>
	);
};

export default ValueSubpanel;
