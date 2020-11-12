import React, { useState } from "react";
import pw_core from "@pw/core";
import usePodContext from "../../other/PodContext";
import ButtonInput from '../../ui/ButtonInput/ButtonInput';
import AnalysisSubpanel from "./subpanels/analysis/AnalysisSubpanel";
import ValueSubpanel from "./subpanels/value/ValueSubpanel";

const PanelHeader = ({ isOpen, setIsOpen, name }) => {
	const podContext = usePodContext();
	const { podType } = podContext;
	return (
		<div className='model-panel-header'>
			<div>
				<span className='model-name'>{name}</span>
				<span className='type'>{podType}</span>
				<div className="preview pw-accent-fg">{podType}</div>
			</div>
			<ButtonInput isActive={isOpen} onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'done' : 'edit'} </ButtonInput>
		</div>
	);
};

const GenericPanel = ({ name, children }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='model-panel'>
			<PanelHeader isOpen={isOpen} setIsOpen={setIsOpen} name={name} />
			{isOpen && (
				<div className='model-panel-body'>
					{children}
				</div>
			)}
		</div>
	);
}

const Panel = () => {
	const podContext = usePodContext();
	const { value, podType, isList } = podContext;
	return (
		<GenericPanel name="Name">
			<AnalysisSubpanel />
			{/*<ValueSubpanel />*/}
		</GenericPanel>
	);
}

export default Panel;
