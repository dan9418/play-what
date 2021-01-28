import React from 'react';
import Table from '../../ui/Table';
import PodListTableRowManager from './PodListTableRowManager';


const POD_LIST_ACTIONS = [
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

const PodListTable = ({ editable, pods, setPods, podType }) => {
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
			name="Pod"
			actions={POD_LIST_ACTIONS}
			editable
		/>
	);
};

export default PodListTable;
