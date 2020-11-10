import pw_core from "@pw/core";
import React from "react";
import usePodContext from "../../other/PodContext";
import ButtonInput from '../../ui/ButtonInput/ButtonInput';

const ModelPanelHeader = ({ isOpen, setIsOpen }) => {
	const podContext = usePodContext();
	const { value, setValue, podType } = podContext;
	return (
		<div className='model-panel-header'>
			<div>
				<span className='model-name'>{value.getName()}</span>
				<span className='type'>{value.getType()}</span>
				<div className="preview pw-accent-fg">{value.getPreview && value.getPreview({ podType })}</div>
			</div>
			<ButtonInput isActive={isOpen} onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'done' : 'edit'} </ButtonInput>
		</div>
	);
};

export default ModelPanelHeader;
