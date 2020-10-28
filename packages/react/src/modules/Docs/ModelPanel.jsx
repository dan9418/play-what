import React, { useState } from "react";
import AnalysisSubpanel from "./AnalysisSubpanel";
import "./Docs.css";
import ModelCardHeader from "./ModelCardHeader";
import TypeSubpanel from "./TypeSubpanel";
import ValueSubpanel from "./ValueSubpanel";

const ModelDetails = () => {
	return (
		<div className='model-details'>
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
		<div className='model-row'>
			<ModelCardHeader label={label} isOpen={isOpen} setIsOpen={setIsOpen} />
			{isOpen && (<ModelDetails />)}
		</div>
	);
}

export default ModelPanel;
