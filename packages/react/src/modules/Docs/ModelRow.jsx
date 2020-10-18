import React, { useState } from "react";
import PodListPresetInput from "../models/podList/PodListPresetInput";
import ButtonInput from '../ui/ButtonInput/ButtonInput';
import Meter from "../viewers/Meter/Meter";
import "./ModelDocs.css";
import Model from '../models/Model/Model';

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

const ModelRow = ({ label, modelType, podType, value, setValue, i }) => {

	const [open, setOpen] = useState(false);
	const [panelId, setPanelId] = useState('view');

	console.log('dpb', label, modelType, podType, value);

	return (
		<>
			<div className='model-row'>
				<div className='model-summary'>
					<div className='model-details'>
						<div className='model-name'>{label}</div>
						<div className='type-row'>
							<div className='model-type'>{modelType}</div>
							{` | `}
							<div className='pod-type'>{podType}</div>
						</div>
					</div>
					<div className='edit pin-right'>
						<ButtonInput onClick={() => setOpen(!open)} className='action-button edit'>{open ? '-' : '+'}</ButtonInput>
					</div>
				</div>
				{open && (
					<div className='model-panel'>
						<Meter modelType={modelType} podType={podType} value={value} setValue={setValue} />

						<div className='submenu'>
							<div className="space" />
							<div className="action-row">
								<ButtonInput active={panelId === 'view'} className='action-button edit' onClick={() => setPanelId('view')}>view</ButtonInput>
								<ButtonInput active={panelId === 'edit'} className='action-button edit' onClick={() => setPanelId('edit')}>edit</ButtonInput>
							</div>
						</div>
						<div className='panel'>
							<div>
								{panelId === 'view' &&
									<Model value={value} modelType={modelType} setValue={setValue} podType={podType} isEditing={false} />
								}
								{panelId === 'edit' &&
									<Model value={value} modelType={modelType} setValue={setValue} podType={podType} isEditing={true} />
								}
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default ModelRow;
