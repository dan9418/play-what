import React from 'react';
import ValueRowManager from './PodRowManager';
import './PodTable.css';
import PodTableHeader from './PodTableHeader';

const PodTable = ({ input, setInput }) => {
	return (
		<table className='pod-table'>
			<PodTableHeader />
			<tbody>
				<ValueRowManager input={input} setInput={setInput} />
			</tbody>
		</table>
	);
};

export default PodTable;
