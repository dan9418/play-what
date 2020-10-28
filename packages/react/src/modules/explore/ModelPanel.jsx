import React, { useState } from "react";
import AnalysisSubpanel from "./AnalysisSubpanel";

import ModelPanelHeader from "./ModelPanelHeader";
import TypeSubpanel from "./TypeSubpanel";
import ValueSubpanel from "./ValueSubpanel";

const ModelPanelBody = () => {
	return (
		<div className='model-panel-body'>
			<TypeSubpanel />
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
