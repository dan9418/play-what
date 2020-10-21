import React, { useState } from 'react';
import ButtonInput from '../ui/ButtonInput/ButtonInput';
import ModelIO from './ModelIO';
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

const reduceModel = (value, modelType) => {
	if(modelType === 'pod') return pw_core.models.pod.reduce({ a: value });
	if(modelType === 'podList') return pw_core.models.podList.reduce({ A: value });
}

const ModelTable = ({ value, setValue, isEditing, modelType, podType, theoryType }) => {
	const valueText = podType === 'note' ? 'Note' : podType === 'interval' ? 'Interval' : 'Value';
	const specialText = podType === 'note' ? 'Frequency' : podType === 'interval' ? 'Ratio' : null;

	const reduced = reduceModel(value, modelType);

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
				{isEditing && <tr>
					<td colSpan="5" className="add">
						<NewPod value={value} setValue={setValue} podType={podType} i={0} />
					</td>
				</tr>}
				{value.map((v, i) => {
					const setSubValue = r => setValue([...value.slice(0, i), r, ...value.slice(i + 1)]);
					const remove = () => setValue([...value.slice(0, i), ...value.slice(i + 1)]);
					return <>
						<tr>
							<td>
								{i}
							</td>
							<td>
								{JSON.stringify(v)}
							</td>
							<td>
								{JSON.stringify(reduced[i])}
							</td>
							<td>
								<ModelIO
									value={value}
									setValue={setSubValue}
									i={i}
									isEditing={isEditing}
									modelType={modelType}
									podType={podType}
									theoryType={theoryType}
								/>
							</td>
							<td>
								1:1
							</td>
							{isEditing && <td className='pin-right'><ButtonInput onClick={remove} >X</ButtonInput></td>}
						</tr>
						{isEditing && <tr>
							<td colSpan="5" className="add">
								<NewPod value={value} setValue={setValue} podType={podType} i={i + 1} />
							</td>
						</tr>}
					</>;
				})}
			</tbody>
		</table>
	);
};

export default ModelTable;
