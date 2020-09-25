import React, { useState } from "react";
import Meter from "../viewers/Meter/Meter";
import { Edit, View } from "../viewers/Preview/Preview";
import "./Docs.css";

const ViewAsInput = ({ value, setValue }) => {
	return (
		<div className='view-as-input'>
			<div>View As:</div>
			<div className={`view-as-option ${value === 'pod' ? 'active' : ''}`} onClick={() => setValue('pod')}>Pods</div>
			<div className={`view-as-option ${value === 'note' ? 'active' : ''}`} onClick={() => setValue('note')}>Notes</div>
			<div className={`view-as-option ${value === 'interval' ? 'active' : ''}`} onClick={() => setValue('interval')}>Intervals</div>
		</div>
	);
};

const ModelRow = ({ label, modelType, podType, theoryType, value, setValue, max }) => {

	const [viewAs, setViewAs] = useState(podType);
	const [isEditing, setIsEditing] = useState(false);
	const toggleEdit = () => setIsEditing(!isEditing);
	return (
		<div className='model-row'>
			<div className='row-header'>
				<div>
					<label>{`${label}:`}</label>
					<span>{modelType}</span>
				</div>
				<div className='edit' onClick={toggleEdit}>edit</div>
			</div>
			<div className='content'>
				<View value={value} modelType={modelType} setValue={setValue} podType={viewAs} />

				{isEditing &&
					<div className='edit-panel'>
						<ViewAsInput value={viewAs} setValue={setViewAs} />
						<Edit value={value} modelType={modelType} setValue={setValue} podType={viewAs} />
					</div>
				}
				<Meter modelType={modelType} podType={viewAs} value={value} setValue={setValue} max={max} />
			</div>
		</div>
	);
}

export default ModelRow;
