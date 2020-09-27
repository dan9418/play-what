import React from 'react';
import VectorOutput from '../../models/math/vector/VectorOutput';
import IntervalOutput from '../../models/theory/interval/IntervalOutput';
import NoteOutput from '../../models/theory/note/NoteOutput';
import './Preview.css';

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

const Single = ({ value, podType }) => {
	const Component = getOutputComponent(podType);
	return Component && <Component value={value} />;
};

const Multi = ({ value, podType }) => {
	const Component = getOutputComponent(podType);
	return (
		<div className='multi-preview'>
			{value.map((v, i) => <Component value={v} key={i} />)}
		</div>
	);
};

export const Preview = ({ value, podType, modelType }) => {
	switch (modelType) {
	case 'vector':
		return <Single value={value} podType={podType} />;
	case 'matrix':
		return <Multi value={value} podType={podType} />;
	default:
		return <div>{value}</div>;
	}
};
