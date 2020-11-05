import pw_core from "@pw/core";
import React from "react";
import usePodContext from "../other/PodContext";
import ButtonInput from '../ui/ButtonInput/ButtonInput';

const ModelPanelHeader = ({ label, isOpen, setIsOpen }) => {
	const podContext = usePodContext();
	const { value, setValue } = podContext;
	console.log(value)
	return (
		<div className='model-panel-header'>
			<div>
				<span className='model-name'>{label}</span>
				<span className='type'>{value.getType()}</span>
				<div className="preview">{value.getName()}</div>
			</div>
			<div className='edit-button' onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'done' : 'edit'} </div>
		</div>
	);
};

export default ModelPanelHeader;
