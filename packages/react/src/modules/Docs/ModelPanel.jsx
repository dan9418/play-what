import React, { useState } from "react";
import ButtonInput from '../ui/ButtonInput/ButtonInput';
import Meter from "../viewers/Meter/Meter";
import "./Docs.css";
import ModelTable from './ModelTable';
import pw_core from "@pw/core";


const getPreviewText = (value, modelType, podType) => {
	if (podType === 'pod') {
		return JSON.stringify(value);
	}
	else if (podType === 'note') {
		return pw_core.models.pod.note.getName({ a: value });
	}
	else if (podType === 'interval') {
		return pw_core.models.pod.interval.getName({ a: value });
	}
	if (podType === 'podList') {
		return JSON.stringify(value);
	}
	else if (podType === 'noteList') {
		return value.map(a => pw_core.models.pod.note.getName({ a })).join(', ');
	}
	else if (podType === 'intervalList') {
		return value.map(a => pw_core.models.pod.interval.getName({ a })).join(', ');
	}

}


const ModelSummary = ({ label, modelType, podType, isOpen, setIsOpen, value }) => {
	return (
		<div className='model-summary'>
			<div>
				<div className='model-name'>{label}</div>
				<div className='type-row'>
					<div className='model-type'>{modelType}</div>
					{` | `}
					<div className='pod-type'>{podType}</div>
				</div>
			</div>
			<div className="preview">
				{getPreviewText(value, modelType, podType)}
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

const ModelPanel = ({ label, modelType, podType, value, setValue, i }) => {

	const [isOpen, setIsOpen] = useState(false);

	console.log('dpb', label, modelType, podType, value);

	return (
		<div className='model-row'>
			<ModelSummary
				label={label}
				modelType={modelType}
				podType={podType}
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
