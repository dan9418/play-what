import React from 'react';
import './Edit.css';

import VectorInput from '../../models/math/vector/VectorInput';

import PW_Core from '@pw/core';
import IntervalInput from '../../models/theory/interval/IntervalInput';
import NoteInput from '../../models/theory/note/NoteInput';
import VectorOutput from '../../models/math/vector/VectorOutput';
import NoteOutput from '../../models/theory/note/NoteOutput';
import IntervalOutput from '../../models/theory/interval/IntervalOutput';

const getInput = (podType) => {
	switch (podType) {
	case 'pod':
		return VectorInput;
	case 'interval':
		return IntervalInput;
	case 'note':
		return NoteInput;
	}
}

const getOutput = (value, podType) => {
	switch (podType) {
	case 'pod':
		return VectorOutput;
	case 'interval':
		return IntervalOutput;
	case 'note':
		return NoteOutput;
	}
}

const SingleInput = ({ value, setValue, podType }) => {
	const InputComponent = getInput(podType);
	const OutputComponent = getOutput(value, podType);
	return (
		<div className="center-x" >
			<InputComponent value={value} setValue={setValue} />
			<OutputComponent value={value} />
		</div>
	);
}

const Edit = ({ value, setValue, modelType, podType }) => {

	switch (modelType) {
	case 'scalar':
		return value;
	case 'vector':
		return <SingleInput value={value} setValue={setValue} podType={podType} />;
	case 'matrix':
		return (
			<div className="multi-input">
				{value.map((v, i) => {
					const setSubValue = r => setValue([...value.slice(0, i), r, ...value.slice(i + 1)]);
					return <SingleInput value={v} setValue={setSubValue} podType={podType} key={i} />;
				})}
			</div>
		);
	default:
		return null;
	}
}

export default Edit;
