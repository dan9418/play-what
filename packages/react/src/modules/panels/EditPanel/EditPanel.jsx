import pw_core from '@pw/core';
import React from 'react';
import ScalarInput from '../../models/math/scalar/ScalarInput';
import VectorInput from '../../models/math/vector/VectorInput';
import IntervalInput from '../../models/theory/interval/IntervalInput';
import NoteInput from '../../models/theory/note/NoteInput';
import './EditPanel.css';

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

const EditRow = ({ value, setValue, podType, i }) => {
	const InputComponent = getInput(podType);
	const [p, d] = value;
	const f = pw_core.tuning.getFrequency(p);
	return (
		<tr>
			<td>{i}</td>
			<td>{InputComponent && <InputComponent value={value} setValue={setValue} />}</td>
			<td>{p}</td>
			<td>{d}</td>
			<td>{`${f} Hz`}</td>
		</tr>
	);
}

const EditTable = ({ value, setValue, podType }) => {
	return (
		<table className="edit-table">
			<thead>
				<th>#</th>
				<th>In</th>
				<th>p</th>
				<th>d</th>
				<th>f</th>
			</thead>
			<tbody>
				{value.map((v, i) => {
					const setSubValue = r => setValue([...value.slice(0, i), r, ...value.slice(i + 1)]);
					return <EditRow value={v} setValue={setSubValue} podType={podType} key={i} i={i} />;
				})}
			</tbody>
		</table>
	);
}

const EditPanel = ({ value, setValue, modelType, podType }) => {
	switch (modelType) {
	case 'scalar':
		return <ScalarInput value={value} setValue={setValue} />;
	case 'vector':
		return <EditTable value={[value]} setValue={v => setValue(v[0])} podType={podType} />;
	case 'matrix':
		return <EditTable value={value} setValue={setValue} podType={podType} />;
	default:
		return null;
	}
}

export default EditPanel;
