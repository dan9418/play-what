import React, { useState } from 'react';
import VectorInput from '../../models/math/vector/VectorInput';
import VectorOutput from '../../models/math/vector/VectorOutput';
import IntervalInput from '../../models/theory/interval/IntervalInput';
import IntervalOutput from '../../models/theory/interval/IntervalOutput';
import NoteInput from '../../models/theory/note/NoteInput';
import NoteOutput from '../../models/theory/note/NoteOutput';
import ButtonInput from '../../models/ui/ButtonInput/ButtonInput';
import './PodList.css';

const getOutputComponent = (podType) => {
	switch (podType) {
	case 'pod':
		return VectorOutput;
	case 'interval':
		return IntervalOutput;
	case 'note':
		return NoteOutput;
	}
}

const getInputComponent = (podType) => {
	switch (podType) {
	case 'pod':
		return VectorInput;
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
		<div className={`new-pod ${isAdding ? 'active' : ''}`}>
			{!isAdding && (
				<ButtonInput onClick={() => setIsAdding(true)} >+</ButtonInput>
			)}
			{isAdding && (
				<Component value={value} setValue={insert} />
			)}
		</div>
	);
};

const Multi = ({ value, setValue, isEditing, podType }) => {
	const Component = isEditing ? getInputComponent(podType) : getOutputComponent(podType);
	return (
		<div className='multi-preview'>
			{isEditing && <NewPod value={value} setValue={setValue} podType={podType} i={0} />}
			{value.map((v, i) => {
				const setSubValue = r => setValue([...value.slice(0, i), r, ...value.slice(i + 1)]);
				const remove = () => setValue([...value.slice(0, i), ...value.slice(i + 1)]);
				return <>
					<div>
						<Component value={v} setValue={setSubValue} key={i} />
						{isEditing && <ButtonInput onClick={remove} >X</ButtonInput>}
					</div>
					{isEditing && <NewPod value={value} setValue={setValue} podType={podType} i={i + 1} />}
				</>;
			})}
		</div>
	);
};

const PodList = ({ value, setValue, isEditing, podType, modelType }) => {
	switch (modelType) {
	case 'vector':
		return <Multi value={[value]} setValue={v => setValue(v[0])} podType={podType} isEditing={isEditing} />;
	case 'matrix':
		return <Multi value={value} setValue={setValue} podType={podType} isEditing={isEditing} />;
	default:
		return <div>{value}</div>;
	}
};

export default PodList;
