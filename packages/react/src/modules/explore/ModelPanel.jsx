import React, { useState } from "react";
import AnalysisSubpanel from "./AnalysisSubpanel";

import ModelPanelHeader from "./ModelPanelHeader";
import TypeSubpanel from "./TypeSubpanel";
import ValueSubpanel from "./ValueSubpanel";

const ModelPanelBody = () => {
	return (
		<div className='model-panel-body'>
			<h3>Type</h3>
			<TypeSubpanel />
			<h3>Value</h3>
			<ValueSubpanel />
			<h3>Analysis</h3>
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
