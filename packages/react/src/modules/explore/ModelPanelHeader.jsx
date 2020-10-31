import pw_core from "@pw/core";
import React from "react";
import usePodContext from "../other/PodContext";
import ButtonInput from '../ui/ButtonInput/ButtonInput';

const ModelPanelHeader = ({ label, isOpen, setIsOpen }) => {
	const podContext = usePodContext();
	const { value, setValue } = podContext;
	return (
		<div className='model-panel-header'>
			<div>
				<div className='model-name'>{label}</div>
				<div className='type-row'>
					<div className='type'>{typeof value}</div>
				</div>
			</div>
			<div className="preview">
				{value.getName()}
			</div>
			<div className='expand'>
				<ButtonInput onClick={() => setIsOpen(!isOpen)} className='action-button edit'>{isOpen ? '-' : '+'}</ButtonInput>
			</div>
		</div>
	);
};

export default ModelPanelHeader;
