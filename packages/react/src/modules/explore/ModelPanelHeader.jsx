import pw_core from "@pw/core";
import React from "react";
import usePodContext from "../other/PodContext";
import ButtonInput from '../ui/ButtonInput/ButtonInput';


const getPreviewText = (value, modelType, podType, theoryType) => {
	if (modelType === 'pod') {
		const pod = new pw_core.models.pod(value);
		return pod.getName({ pod: value, podType });
	}
	if (modelType === 'podList') {
		return pw_core.models.podList.getName({ podList: value, podType, theoryType });
	}
	return JSON.stringify(value);
}

const ModelPanelHeader = ({ label, isOpen, setIsOpen }) => {
	const podContext = usePodContext();
	const { modelType, podType, theoryType, value, setValue } = podContext;
	return (
		<div className='model-panel-header'>
			<div>
				<div className='model-name'>{label}</div>
				<div className='type-row'>
					<div className='type'>{modelType}</div>
					{` | `}
					<div className='type'>{podType}</div>
					{` | `}
					<div className='type'>{theoryType}</div>
				</div>
			</div>
			<div className="preview">
				{getPreviewText(value, modelType, podType, theoryType)}
			</div>
			<div className='expand'>
				<ButtonInput onClick={() => setIsOpen(!isOpen)} className='action-button edit'>{isOpen ? '-' : '+'}</ButtonInput>
			</div>
		</div>
	);
};

export default ModelPanelHeader;
