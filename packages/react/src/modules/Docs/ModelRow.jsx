import React, { useState } from "react";
import MatrixPresetInput from "../models/theory/MatrixPresetInput";
import ButtonInput from '../models/ui/ButtonInput/ButtonInput';
import Meter from "../viewers/Meter/Meter";
import PodList from "../viewers/PodList/PodList";
import "./Docs.css";

const ViewAsInput = ({ value, setValue }) => {
	if (!value) return null;
	return (
		<div className='view-as-input'>
			<div className={`view-as-option ${value === 'pod' ? 'active' : ''}`} onClick={() => setValue('pod')}>Pods</div>
			|
			<div className={`view-as-option ${value === 'note' ? 'active' : ''}`} onClick={() => setValue('note')}>Notes</div>
			|
			<div className={`view-as-option ${value === 'interval' ? 'active' : ''}`} onClick={() => setValue('interval')}>Intervals</div>
		</div>
	);
};

const ModelRow = ({ label, modelType, podType, value, setValue }) => {

	const [open, setOpen] = useState(false);
	const [viewAs, setViewAs] = useState(podType);
	const [panelId, setPanelId] = useState(null);
	const [subPanelId, setSubPanelId] = useState(null);

	console.log('dpb', label, modelType, podType, value);

	return (
		<div className='model-row'>
			<div className='model-row-header'>
				<div className='title-row' onClick={() => setOpen(!open)}>
					<label className='model-label'>{label}</label>
					<span className='model-type'>{modelType}</span>
				</div>
				{open && <>
					<div>
						<ViewAsInput value={viewAs} modelType={modelType} setValue={setViewAs} podType={viewAs} />
						<div className="space" />
						{!panelId && <ButtonInput className='action-button edit' onClick={() => setPanelId('view')}>view</ButtonInput>}
						{!panelId && <ButtonInput className='action-button edit' onClick={() => setPanelId('edit')}>edit</ButtonInput>}
						{panelId && <ButtonInput className='action-button edit' onClick={() => setPanelId(null)}>X</ButtonInput>}
					</div>
					{panelId === 'view' &&
						<div className='action-row'>
							<ButtonInput className='action-button' onClick={() => setSubPanelId('meter')}>meter</ButtonInput>
						</div>
					}
					{panelId === 'edit' &&
						<div className='action-row'>
							<ButtonInput className='action-button' onClick={() => setSubPanelId('transform')}>transform</ButtonInput>
							<ButtonInput className='action-button' onClick={() => setSubPanelId('preset')}>load preset</ButtonInput>
						</div>
					}
					{panelId === 'view' &&
						<div className='panel'>
							{subPanelId === 'meter' &&
								<Meter modelType={modelType} podType={viewAs} value={value} setValue={setValue} />
							}
						</div>
					}
					{panelId === 'edit' &&
						<div className='panel'>
							{subPanelId === 'preset' &&
								<MatrixPresetInput value={value} setValue={setValue} />
							}
						</div>
					}
					<div className='content'>
						<PodList value={value} modelType={modelType} setValue={setValue} podType={viewAs} isEditing={panelId === 'edit'} />
					</div>
				</>
				}
			</div>
		</div>
	);
}

export default ModelRow;
