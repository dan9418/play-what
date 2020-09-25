import PW_Core from '@pw/core';
import PW_Color from '@pw/color';
import PW_Tone from '@pw/tone';
import React, { useState } from 'react';
import './Preview.css';
import ScalarInput from '../../models/math/ScalarInput/ScalarInput';
import VectorInput from '../../models/math/VectorInput/VectorInput';
import MatrixInput from '../../models/math/MatrixInput/MatrixInput';

const ListItem = ({ value, podType }) => {

	let onClick = null;
	let text = '';
	let color = null;
	let style = {};

	switch (podType) {
	case 'note': {
		const note = PW_Core.models.math.vector.reduce(value);
		const [p, d] = note;
		text = PW_Core.models.theory.note.getName({ A: note })
		color = PW_Core.models.theory.degree.getColor(d);
		style = {
			border: `1px solid ${color}`
		};
		const f = PW_Core.tuning.getFrequency(value[0]);
		onClick = () => PW_Tone.out.play(f);
		break;
	}
	case 'interval': {
		const interval = PW_Core.models.math.vector.reduce(value);
		const [p, d] = interval;
		text = PW_Core.models.theory.interval.getName({ A: interval })
		color = PW_Core.models.theory.degree.getColor(d);
		style = {
			border: `1px solid ${color}`
		};
		break;
	}
	default: {
		return null;
	}
	}

	return (
		<div className='list-item' style={style} onClick={onClick}>
			{text}
		</div>
	);
};

const List = ({ value, podType }) => {
	return (
		<div className='list'>
			{value.map((v, i) => <ListItem value={v} podType={podType} key={i} />)}
		</div>
	);
};

const Preview = ({ value, setValue, modelType, podType, theoryType, ...props }) => {
	const [isEditing, setIsEditing] = useState(false);
	const toggleEdit = () => setIsEditing(!isEditing);

	let child = null;

	if(isEditing) {
		switch (modelType) {
		case 'scalar': {
			child = <ScalarInput value={value} setValue={setValue} max={max} />;
		}
		case 'vector': {
			child =  <VectorInput value={value} setValue={setValue} max={max} />;
		}
		case 'matrix': {
			child =  <MatrixInput value={value} setValue={setValue} max={max} />;
		}
		}
	}
	else {
		switch (modelType) {
		case 'vector': {
			child = <List value={[value]} podType={podType} />;
		}
		case 'matrix': {
			child = <List value={value} podType={podType} />;
		}
		default: {
			child = <div className='list-item' >{value}</div>;
		}
		}
	}
	return (
		<div>
			<div onClick={toggleEdit}>edit</div>
			{child}
		</div>
	);
}

export default Preview;
