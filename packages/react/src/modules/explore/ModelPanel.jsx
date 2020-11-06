import React, { useState } from "react";

import ModelPanelHeader from "./ModelPanelHeader";
import ValueSubpanel from "./subpanels/value/ValueSubpanel";
import AnalysisSubpanel from "./subpanels/analysis/AnalysisSubpanel";
import SwitchInput from '../ui/SwitchInput/SwitchInput';
import usePodContext from "../other/PodContext";

const PodTypeBar = () => {
	const { podType, setPodType } = usePodContext();
	return (
		<div className='pod-type-bar'>
			<div>Pod Type</div>
			<span>Interval</span>
			<SwitchInput value={podType} setValue={setPodType} />
			<span>Note</span>
		</div>
	);
};

const ModelPanelBody = () => {
	return (
		<div className='model-panel-body'>
			<PodTypeBar />
			<ValueSubpanel />
			<AnalysisSubpanel />
		</div>
	);
};

const ModelPanel = ({ label }) => {
	const [isOpen, setIsOpen] = useState(false);
	console.log('dpb', label);
	return (
		<div className='model-panel'>
			<ModelPanelHeader label={label} isOpen={isOpen} setIsOpen={setIsOpen} />
			{isOpen && (<ModelPanelBody />)}
			<div className='model-panel-footer' />
		</div>
	);
}

export default ModelPanel;
