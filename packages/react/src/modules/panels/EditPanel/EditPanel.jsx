import pw_core from '@pw/core';
import React from 'react';
import IndexInput from '../../models/math/index/IndexInput';
import PodInput from '../../models/math/pod/PodInput';
import IntervalInput from '../../models/theory/interval/IntervalInput';
import NoteInput from '../../models/theory/note/NoteInput';
import './EditPanel.css';

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
	case 'index':
		return <IndexInput value={value} setValue={setValue} />;
	case 'pod':
		return <EditTable value={[value]} setValue={} podType={podType} />;
	case 'podList':
		return <EditTable value={value} setValue={setValue} podType={podType} />;
	default:
		return null;
	}
}

export default EditPanel;
