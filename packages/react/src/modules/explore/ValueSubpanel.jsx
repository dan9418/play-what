import pw_core from "@pw/core";
import React, { useState } from "react";
import usePodContext from "../other/PodContext";
import DropdownInput from "../ui/DropdownInput/DropdownInput";

import EditDash from './EditDash';
import ModelTable from './ModelTable';

const getPresetOptions = (modelType, theoryType) => {
	if (modelType === 'pod') {
		if (theoryType === 'note') return pw_core.models.pod.note.presetValues;
		else if (theoryType === 'interval') return pw_core.models.pod.interval.presetValues;
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
	const editOptionText = isLoadingPreset ? 'done' : 'load preset';
	const editOptions = [{ text: editOptionText, onClick: () => setIsLoadingPreset(!isLoadingPreset) }];
	return (
		<div className='subpanel'>
			<EditDash isEditing={isEditing} setIsEditing={setIsEditing} actions={editOptions} />
			{isLoadingPreset && (
				<div>
					<DropdownInput
						options={getPresetOptions(modelType, theoryType)}
						value={value}
						setValue={v => setValue(v.value)}
					/>
				</div>
			)}
			<ModelTable value={value} setValue={setValue} modelType={modelType} podType={podType} isEditing={isEditing} />
		</div>
	);
};

export default ValueSubpanel;
