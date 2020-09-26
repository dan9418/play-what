import React from 'react';
import VectorOutput from '../../models/math/vector/VectorOutput';
import NoteOutput from '../../models/theory/note/NoteOutput';
import IntervalOutput from '../../models/theory/interval/IntervalOutput';
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

const List = ({ value, podType }) => {
	const Component = getOutputComponent(podType);
	return (
		<div className='list'>
			{value.map((v, i) => <Component value={v} key={i} />)}
		</div>
	);
};

export const Preview = ({ value, podType, modelType }) => {
	switch (modelType) {
	case 'vector': {
		return <List value={[value]} podType={podType} />;
	}
	case 'matrix': {
		return <List value={value} podType={podType} />;
	}
	default: {
		return <div>{value}</div>;
	}
	}
};
