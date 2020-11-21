import React from 'react';
import usePodContext from '../../../../../other/PodContext';
import ValueRowManager from './PodRowManager';
import PodTableHeader from './PodTableHeader';

const PodTable = () => {
	const podContext = usePodContext();
	return (
		<table className='pod-table'>
			<PodTableHeader {...podContext} />
			<tbody>
				<ValueRowManager {...podContext} />
			</tbody>
		</table>
	);
};

export default PodTable;
