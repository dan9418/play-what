import React, { useState } from 'react';
import PodInput from '../pod/PodInput';
import PodOutput from '../pod/PodOutput';
import IntervalInput from '../pod/IntervalInput';
import IntervalOutput from '../pod/IntervalOutput';
import NoteInput from '../pod/NoteInput';
import NoteOutput from '../pod/NoteOutput';
import ButtonInput from '../../ui/ButtonInput/ButtonInput';
import './Model.css';

const getOutputComponent = (podType) => {
	switch (podType) {
	case 'pod':
		return PodOutput;
	case 'interval':
		return IntervalOutput;
	case 'note':
		return NoteOutput;
	}
}

const getInputComponent = (podType) => {
	switch (podType) {
	case 'pod':
		return PodInput;
	case 'interval':
		return IntervalInput;
	case 'note':
		return NoteInput;
	}
}

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

const EditTable = ({ value, setValue, isEditing, podType }) => {
	const Component = isEditing ? getInputComponent(podType) : getOutputComponent(podType);
	return (
		<table className='edit-table'>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Pod</th>
					<th>Ratio</th>
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
								<Component value={v} setValue={setSubValue} key={i} />
							</td>
							<td>
								{JSON.stringify(v)}
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

const Model = ({ value, setValue, isEditing, podType, modelType }) => {
	switch (modelType) {
	case 'pod':
		return <EditTable value={[value]} setValue={v => setValue(v[0])} podType={podType} isEditing={isEditing} />;
	case 'podList':
		return <EditTable value={value} setValue={setValue} podType={podType} isEditing={isEditing} />;
	default:
		return <div>{value}</div>;
	}
};

export default Model;
