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
	const [isLoadingPreset, setIsLoadingPreset] = useState(false);
	const [viewAs, setViewAs] = useState(podType);
	const [panelId, setPanelId] = useState('preview');

	console.log('dpb', label, modelType, podType, value);

	return (
		<>
			<tr>
				<td className='prop'>{label}</td>
				<td className='model-type'>{modelType}</td>
				<td className='name'></td>
				<td className='edit'>
					<ButtonInput onClick={() => setOpen(!open)} className='action-button edit'>{open ? '-' : '+'}</ButtonInput>
				</td>
			</tr>
			{open && (
				<tr>
					<td colSpan="4">
						<div className='subtitle-row'>
							<ViewAsInput value={viewAs} modelType={modelType} setValue={setViewAs} podType={viewAs} />
							<div className="space" />
							<ButtonInput active={panelId === 'preview'} className='action-button edit' onClick={() => setPanelId('preview')}>preview</ButtonInput>
							<ButtonInput active={panelId === 'analyze'} className='action-button edit' onClick={() => setPanelId('analyze')}>analyze</ButtonInput>
							<ButtonInput active={panelId === 'edit'} className='action-button edit' onClick={() => setPanelId('edit')}>edit</ButtonInput>
						</div>
						{panelId === 'preview' &&
							<div className='panel'>
								<PodList value={value} modelType={modelType} setValue={setValue} podType={viewAs} isEditing={false} />
							</div>
						}
						{panelId === 'analyze' &&
							<div className='panel'>
								<Meter modelType={modelType} podType={viewAs} value={value} setValue={setValue} />
							</div>
						}
						{panelId === 'edit' &&
							<div className='panel'>
								<ButtonInput className='action-button' onClick={() => setIsLoadingPreset(!isLoadingPreset)}>load preset</ButtonInput>
								{isLoadingPreset && <MatrixPresetInput value={value} setValue={setValue} modelType={modelType} />}
								<PodList value={value} modelType={modelType} setValue={setValue} podType={viewAs} isEditing={true} />
							</div>
						}
					</td>
				</tr >
			)}
		</>
	);
}

export default ModelRow;
