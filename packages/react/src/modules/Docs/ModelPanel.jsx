import React, { useState } from "react";
import ButtonInput from '../ui/ButtonInput/ButtonInput';
import Meter from "../viewers/Meter/Meter";
import "./Docs.css";
import ModelTable from './ModelTable';
import pw_core from "@pw/core";


const getPreviewText = (value, modelType, podType, theoryType) => {
	if (modelType === 'pod') {
		return pw_core.models.pod.getName({ pod: value, podType });
	}
	if (modelType === 'podList') {
		return pw_core.models.podList.getName({ podList: value, podType, theoryType });
	}
	return JSON.stringify(value);
}


const ModelSummary = ({ label, modelType, podType, theoryType, isOpen, setIsOpen, value }) => {
	return (
		<div className='model-summary'>
			<div>
				<div className='model-name'>{label}</div>
				<div className='type-row'>
					<div className='model-type'>{modelType}</div>
					{` | `}
					<div className='pod-type'>{podType}</div>
					{` | `}
					<div className='pod-type'>{theoryType}</div>
				</div>
			</div>
			<div className="preview">
				{getPreviewText(value, modelType, podType, theoryType)}
			</div>
			<div className='edit pin-right'>
				<ButtonInput onClick={() => setIsOpen(!isOpen)} className='action-button edit'>{isOpen ? '-' : '+'}</ButtonInput>
			</div>
		</div>
	);
};

const ModelTableSubpanel = ({ modelType, podType, value, setValue }) => {
	const [isEditing, setIsEditing] = useState(false);
	return (
		<div className='subpanel'>
			<div className='submenu'>
				<div className="space" />
				<div className="action-row">
					{isEditing &&
						<>
							<div className='edit' onClick={null}>{false ? 'done' : 'load preset'} </div>
							{` | `}
						</>
					}
					<div className='edit' onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'done' : 'edit'} </div>
				</div>
			</div>
			<div>
				<ModelTable value={value} setValue={setValue} modelType={modelType} podType={podType} isEditing={isEditing} />
			</div>
		</div>
	);
};

const MeterSubpanel = ({ modelType, podType, value, setValue }) => {
	return (
		<div className='subpanel'>
			<Meter value={value} setValue={setValue} modelType={modelType} podType={podType} />
		</div>
	);
};

const ModelDetails = ({ modelType, podType, value, setValue }) => {
	return (
		<div className='model-details'>
			<h3>Value</h3>
			<ModelTableSubpanel
				modelType={modelType}
				podType={podType}
				value={value}
				setValue={setValue}
			/>
			<h3>Analysis</h3>
			<MeterSubpanel
				modelType={modelType}
				podType={podType}
				value={value}
				setValue={setValue}
			/>
		</div>
	);
};

const ModelPanel = ({ label, modelType, podType, theoryType, value, setValue, i }) => {

	const [isOpen, setIsOpen] = useState(false);

	console.log('dpb', label, modelType, podType, value);

	return (
		<div className='model-row'>
			<ModelSummary
				label={label}
				modelType={modelType}
				podType={podType}
				theoryType={theoryType}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				value={value}
			/>
			{isOpen && (
				<ModelDetails
					label={label}
					modelType={modelType}
					podType={podType}
					value={value}
					setValue={setValue}
				/>
			)}
		</div>
	);
}

export default ModelPanel;
