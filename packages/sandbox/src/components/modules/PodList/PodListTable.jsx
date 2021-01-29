import React from 'react';
import Table from '../../ui/Table';
import PodListTableRowManager from './PodListTableRowManager';

const PodListTable = ({ pods, setPods, podType, setPodType }) => {
	const cols = <>
		<th>#</th>
		<th>name</th>
		<th>p</th>
		<th>d</th>
		<th>x</th>
	</>;

	const rows = <PodListTableRowManager pods={pods} setPods={setPods} podType={podType} />

	return (
		<Table
			cols={cols}
			rows={rows}
		/>
	);
};

export default PodListTable;
