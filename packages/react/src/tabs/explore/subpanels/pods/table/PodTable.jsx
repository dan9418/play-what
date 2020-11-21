import React from 'react';
import ValueRowManager from './PodRowManager';
import './PodTable.css';
import PodTableHeader from './PodTableHeader';

const PodTable = () => {
	return (
		<table className='pod-table'>
			<PodTableHeader />
			<tbody>
				<ValueRowManager />
			</tbody>
		</table>
	);
};

export default PodTable;
