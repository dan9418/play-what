import React from 'react';
import Table from '../../ui/Table';
import PodListTableRowManager from './PodListTableRowManager';

const PodListTable = ({ headers, rows }) => {
	const headerCells = headers.map(h => <td key={h}>{h}</td>);

	const bodyRows = rows.map((r, i) => {
		return (
			<tr key={i}>
				{r.cols.map((c, j) => {
					return <td key={j}>{c}</td>;
				})}
			</tr>
		);
	});

	//const rows = <PodListTableRowManager pods={pods} setPods={setPods} podType={podType} />

	return (
		<Table
			headers={headerCells}
			rows={bodyRows}
		/>
	);
};

export default PodListTable;
