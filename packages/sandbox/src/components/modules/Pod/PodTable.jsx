import PodUtils from '@pw/core/src/Pod.utils';
import React from 'react';
import Table from '../../ui/Table';

const POD_ACTIONS = [
	{
		id: 'preset',
		text: 'Import Preset',
		component: <React.Fragment />
	},
	{
		id: 'transform',
		text: 'Transform',
		component: <React.Fragment />
	}
];

const PodTable = ({ name, editable, pod, setPod, podType }) => {

	const cols = <>
		<th>index</th>
		<th>value</th>
		<th>max</th>
		<th>mod</th>
		<th>rem</th>
	</>;

	const rows = <>
		<tr>
			<td>p</td>
			<td>{pod[0]}</td>
			<td>12</td>
			<td>{PodUtils.getPitchClass(pod)}</td>
			<td>{PodUtils.getOctave(pod)}</td>
		</tr>
		<tr>
			<td>d</td>
			<td>{pod[1]}</td>
			<td>7</td>
			<td>{PodUtils.getDegree(pod)}</td>
			<td>{PodUtils.getX(pod)}</td>
		</tr>
	</>;

	return (
		<Table
			cols={cols}
			rows={rows}
			name="Pod"
			actions={POD_ACTIONS}
			editable
		/>
	);
};

export default PodTable;
