import React, { useState } from "react";
import Edit from "../viewers/Edit/Edit";
import Meter from "../viewers/Meter/Meter";
import ButtonInput from '../models/ui/ButtonInput/ButtonInput';
import { Preview } from "../viewers/Preview/Preview";
import "./Docs.css";

const isPodModel = modelType => modelType === 'vector' || modelType === 'matrix';

const ViewAsInput = ({ value, setValue }) => {
	if (!value) return null;
	return (
		<div className='view-as-input'>
			<div>View As:</div>
			<div className={`view-as-option ${value === 'pod' ? 'active' : ''}`} onClick={() => setValue('pod')}>Pods</div>
			<div className={`view-as-option ${value === 'note' ? 'active' : ''}`} onClick={() => setValue('note')}>Notes</div>
			<div className={`view-as-option ${value === 'interval' ? 'active' : ''}`} onClick={() => setValue('interval')}>Intervals</div>
		</div>
	);
};

const ModelRow = ({ label, modelType, podType, value, setValue }) => {

	const [viewAs, setViewAs] = useState(podType);
	const [isEditing, setIsEditing] = useState(false);
	const [presetOpen, setPresetOpen] = useState(false);
	const toggleEdit = () => setIsEditing(!isEditing);

	console.log('dpb', label, modelType, podType, value);

	return (
		<div className='model-row'>
			<div className='model-row-header'>
				<label className='model-label'>{label}</label>
				<span className='model-type'>{modelType}</span>
			</div>
			<div className='content'>
				<Preview value={value} modelType={modelType} setValue={setValue} podType={viewAs} />
				<div className='action-row'>
					{setValue && <ButtonInput onClick={toggleEdit}>edit</ButtonInput>}
				</div>
				{isEditing &&
					<div className='edit-panel'>
						<ViewAsInput value={viewAs} setValue={setViewAs} />
						<Meter modelType={modelType} podType={viewAs} value={value} setValue={setValue} />
						<Edit value={value} modelType={modelType} setValue={setValue} podType={viewAs} />
					</div>
				}
			</div>
		</div>
	);
}

export default ModelRow;
