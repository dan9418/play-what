import React, { useState } from "react";
import PodListPresetInput from "../models/theory/PodListPresetInput";
import ButtonInput from '../models/ui/ButtonInput/ButtonInput';
import Meter from "../viewers/Meter/Meter";
import podList from "../viewers/podList/podList";
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

const ModelRow = ({ label, modelType, podType, value, setValue, i }) => {

	const [open, setOpen] = useState(false);
	const [isLoadingPreset, setIsLoadingPreset] = useState(false);
	const [viewAs, setViewAs] = useState(podType);
	const [panelId, setPanelId] = useState('preview');

	console.log('dpb', label, modelType, podType, value);

	return (
		<>
			<tr>
				<td className='model-type'>{'0'}</td>
				<td className='name'>{label}</td>
				<td className='model-type'>{modelType}</td>
				<td className='model-type'>{podType}</td>
				<td className='preview'></td>
				<td className='edit pin-right'>
					<ButtonInput onClick={() => setOpen(!open)} className='action-button edit'>{open ? '-' : '+'}</ButtonInput>
				</td>
			</tr>
			{open && (<>
				<tr className='submenu'>
					<td colSpan="6">
						<div className="space-between">
							<ViewAsInput value={viewAs} modelType={modelType} setValue={setViewAs} podType={viewAs} />
							<div className="space" />
							<div className="action-row">
								<ButtonInput active={panelId === 'preview'} className='action-button edit' onClick={() => setPanelId('preview')}>preview</ButtonInput>
								<ButtonInput active={panelId === 'analyze'} className='action-button edit' onClick={() => setPanelId('analyze')}>analyze</ButtonInput>
								<ButtonInput active={panelId === 'edit'} className='action-button edit' onClick={() => setPanelId('edit')}>edit</ButtonInput>
							</div>
						</div>
					</td>
				</tr>
				<tr className='panel'>
					<td colSpan="6">
						{panelId === 'preview' &&
							<podList value={value} modelType={modelType} setValue={setValue} podType={viewAs} isEditing={false} />
						}
						{panelId === 'analyze' &&
							<Meter modelType={modelType} podType={viewAs} value={value} setValue={setValue} />
						}
						{panelId === 'edit' &&
							<>
								<div className="space-between">
									<div className="space" />
									<div className='view-as-option' onClick={() => setIsLoadingPreset(!isLoadingPreset)}>{isLoadingPreset ? 'cancel' : 'load preset'}</div>
								</div>
								{isLoadingPreset && <PodListPresetInput value={value} setValue={setValue} modelType={modelType} />}
								{!isLoadingPreset && <podList value={value} modelType={modelType} setValue={setValue} podType={viewAs} isEditing={true} />}
							</>
						}
					</td>
				</tr >
			</>)}
		</>
	);
}

export default ModelRow;
