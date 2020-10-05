import React from 'react';
import VectorInput from '../../models/math/vector/VectorInput';
import VectorOutput from '../../models/math/vector/VectorOutput';
import IntervalInput from '../../models/theory/interval/IntervalInput';
import IntervalOutput from '../../models/theory/interval/IntervalOutput';
import NoteInput from '../../models/theory/note/NoteInput';
import NoteOutput from '../../models/theory/note/NoteOutput';
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

const Multi = ({ value, setValue, isEditing, podType }) => {
	const Component = isEditing ? getInputComponent(podType) : getOutputComponent(podType);
	return (
		<div className='multi-preview'>
			{value.map((v, i) => {
				const setSubValue = r => setValue([...value.slice(0, i), r, ...value.slice(i + 1)]);
				return <Component value={v} setValue={setSubValue} key={i} />;
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
