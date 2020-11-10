import React, { useState } from "react";
import ModelPanelHeader from "./ModelPanelHeader";
import AnalysisSubpanel from "./subpanels/analysis/AnalysisSubpanel";
import ConfigSubpanel from "./subpanels/config/ConfigSubpanel";
import ValueSubpanel from "./subpanels/value/ValueSubpanel";

const ModelPanelBody = () => {
	return (
		<div className='model-panel-body'>
			<ConfigSubpanel />
			<ValueSubpanel />
			<AnalysisSubpanel />
		</div>
	);
};

const ModelPanel = () => {
	const [isOpen, setIsOpen] = useState(true);
	console.log('dpb');
	return (
		<div className='model-panel'>
			<ModelPanelHeader isOpen={isOpen} setIsOpen={setIsOpen} />
			{isOpen && (<ModelPanelBody />)}
			<div className='model-panel-footer' />
		</div>
	);
}

export default ModelPanel;
