import React, { useState } from "react";
import EditPanel from "../panels/EditPanel/EditPanel";
import Meter from "../viewers/Meter/Meter";
import PodList from "../viewers/PodList/PodList";
import ButtonInput from '../models/ui/ButtonInput/ButtonInput';
import "./Docs.css";
import MatrixPresetInput from "../models/theory/MatrixPresetInput";

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
	const [panelId, setPanelId] = useState(null);
	const [presetOpen, setPresetOpen] = useState(false);

	console.log('dpb', label, modelType, podType, value);

	return (
		<div className='model-row'>
			<div className='model-row-header'>
				<label className='model-label'>{label}</label>
				<span className='model-type'>{modelType}</span>
			</div>
			<div className='content'>
				<PodList value={value} modelType={modelType} setValue={setValue} podType={viewAs} />
				<div className='action-row'>
					{setValue && <ButtonInput className='action-button' onClick={() => setPanelId('meter')}>meter</ButtonInput>}
					{setValue && <ButtonInput className='action-button' onClick={() => setPanelId('configure')}>configure</ButtonInput>}
					{setValue && <ButtonInput className='action-button' onClick={() => setPanelId('preset')}>preset</ButtonInput>}
					{setValue && <ButtonInput className='action-button' onClick={() => setPanelId('edit')}>edit</ButtonInput>}
					{setValue && <ButtonInput className='action-button' onClick={() => setPanelId(null)}>X</ButtonInput>}
				</div>
				<div className='panel'>
					{panelId === 'meter' &&
						<Meter modelType={modelType} podType={viewAs} value={value} setValue={setValue} />
					}
					{panelId === 'configure' &&
						<ViewAsInput value={viewAs} setValue={setViewAs} />
					}
					{panelId === 'preset' &&
						<MatrixPresetInput value={value} setValue={setValue} />
					}
					{panelId === 'edit' &&
						<EditPanel value={value} modelType={modelType} setValue={setValue} podType={viewAs} />
					}
				</div>
			</div>
		</div>
	);
}

export default ModelRow;
