import React, { useState } from 'react';
import ButtonInput from '../ui/ButtonInput/ButtonInput';
import ModelRowManager from './ModelRowManager';
import pw_core from '@pw/core';

import './ModelTable.css';

const NewPod = ({ value, setValue, podType, i }) => {
	const [isAdding, setIsAdding] = useState(false);
	const Component = getInputComponent(podType);
	const close = () => setIsAdding(false);
	const insert = r => {
		close();
		setValue([...value.slice(0, i), r, ...value.slice(i)]);
	};
	return (
		<div className={`new-pod add ${isAdding ? 'active' : ''}`}>
			{!isAdding && (
				<ButtonInput onClick={() => setIsAdding(true)} >+</ButtonInput>
			)}
			{isAdding && (
				<Component value={value} setValue={insert} />
			)}
		</div>
	);
};

const ModelTable = ({ value, setValue, isEditing, modelType, podType }) => {
	const valueText = podType === 'note' ? 'Note' : podType === 'interval' ? 'Interval' : 'Value';
	const specialText = podType === 'note' ? 'Frequency' : podType === 'interval' ? 'Ratio' : null;

	return (
		<table className='model-table'>
			<thead>
				<tr>
					<th>#</th>
					<th>Pod</th>
					<th>Reduced</th>
					<th>{valueText}</th>
					<th>{specialText}</th>
				</tr>
			</thead>
			<tbody>
				<ModelRowManager
					value={value}
					setValue={setValue}
					isEditing={isEditing}
					modelType={modelType}
					podType={podType}
				/>
			</tbody>
		</table>
	);
};

export default ModelTable;
