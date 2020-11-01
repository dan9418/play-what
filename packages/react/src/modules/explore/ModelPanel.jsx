import React, { useState } from "react";

import ModelPanelHeader from "./ModelPanelHeader";
import ModelSubpanel from "./subpanels/model/ModelSubpanel";
import ValueSubpanel from "./subpanels/value/ValueSubpanel";
import AnalysisSubpanel from "./subpanels/analysis/AnalysisSubpanel";


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
