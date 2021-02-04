import PodUtils from '@pw/core/src/Pod.utils';
import EditButton from '@pw/react/src/ui/ButtonInput/EditButton';
import React from 'react';
import useEditContext from '../../../contexts/EditContext';
import Table from '../../ui/Table';

const PodIndexTable = ({ podIndex, setPodIndex, podIndexType }) => {

	const { isEditing } = useEditContext();

	const cols = (
		<>
			<th>value</th>
			<th>type</th>
			<th>max</th>
			<th>mod</th>
			<th>rem</th>
			{isEditing && <th>edit</th>}
		</>
	);

	const rows = (
		<tr>
			<td>{podIndex}</td>
			<td>{podIndexType}</td>
			{podIndexType === 'degree' && <>
				<td>7</td>
				<td>{PodUtils.getDegree([0, podIndex])}</td>
				<td>{PodUtils.getX([0, podIndex])}</td>
			</>}
			{podIndexType === 'pitch' && <>
				<td>12</td>
				<td>{PodUtils.getPitchClass([podIndex, 0])}</td>
				<td>{PodUtils.getOctave([podIndex, 0])}</td>
			</>}
			{isEditing && <td><EditButton /></td>}
		</tr>
	);

	return (<Table cols={cols} rows={rows} />);
};

export default PodIndexTable;
