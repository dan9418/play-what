import PodUtils from '@pw/core/src/Pod.utils';
import EditButton from '@pw/react/src/ui/ButtonInput/EditButton';
import React from 'react';
import useEditContext from '../../../contexts/EditContext';
import useRouteContext from '../../../contexts/RouteContext';
import Table from '../../ui/Table';

const PodTable = ({ pod, setPod, podType }) => {

	const { isEditing } = useEditContext();
	const { push } = useRouteContext();

	const cols = (
		<>
			<th>index</th>
			<th>value</th>
			<th>max</th>
			<th>mod</th>
			<th>rem</th>
			{isEditing && <th>edit</th>}
		</>
	);

	const rows = (
		<>
			<tr>
				<td>p</td>
				<td>{pod[0]}</td>
				<td>12</td>
				<td>{PodUtils.getPitchClass(pod)}</td>
				<td>{PodUtils.getOctave(pod)}</td>
				{isEditing && <td><EditButton/></td>}
			</tr>
			<tr>
				<td>d</td>
				<td>{pod[1]}</td>
				<td>7</td>
				<td>{PodUtils.getDegree(pod)}</td>
				<td>{PodUtils.getX(pod)}</td>
				{isEditing && <td><EditButton /></td>}
			</tr>
		</>
	);

	return (<Table cols={cols} rows={rows} />);
};

export default PodTable;
