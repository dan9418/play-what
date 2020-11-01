import React, { useState } from "react";

import ModelPanelHeader from "./ModelPanelHeader";
import ModelSubpanel from "./subpanels/ModelSubpanel";
import ValueSubpanel from "./subpanels/ValueSubpanel";
import AnalysisSubpanel from "./subpanels/AnalysisSubpanel";


const ModelPanelBody = () => {
	return (
		<div className='model-panel-body'>
			<ModelSubpanel />
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
