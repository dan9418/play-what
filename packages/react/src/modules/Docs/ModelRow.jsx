import React, { useState } from "react";
import PodListPresetInput from "../models/podList/PodListPresetInput";
import ButtonInput from '../ui/ButtonInput/ButtonInput';
import Meter from "../viewers/Meter/Meter";
import "./ModelDocs.css";
import Model from '../models/Model/Model';
import DropdownInput from "../ui/DropdownInput/DropdownInput";

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

const ModelRow = ({ label, modelType, podType, theoryType, value, setValue, i }) => {

	const [open, setOpen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

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
							{` | `}
							<div className='pod-type'>{theoryType}</div>
						</div>
					</div>
					<div className='edit pin-right'>
						<ButtonInput onClick={() => setOpen(!open)} className='action-button edit'>{open ? '-' : '+'}</ButtonInput>
					</div>
				</div>
				{open && (
					<div className='model-panel'>
						<div className='panel'>


							<div className='subpanel'>
								<div className='submenu'>
									<div className="space" />
									<div className="action-row">
										<div className='edit' onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'done' : 'edit'} </div>
									</div>
								</div>
								{isEditing &&
									<div className='submenu'>
										<div className="space" />
										<div className="action-row">
											<div className='edit' onClick={null}>{false ? 'done' : 'load preset'} </div>
										</div>
									</div>
								}
								<div>
									<Model value={value} modelType={modelType} setValue={setValue} podType={podType} isEditing={isEditing} />
								</div>
							</div>

							<h3>Meter</h3>
							<Meter modelType={modelType} podType={podType} value={value} setValue={setValue} />

						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default ModelRow;
