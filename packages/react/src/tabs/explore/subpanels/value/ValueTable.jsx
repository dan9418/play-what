import React from 'react';
import usePodContext from '../../../../other/PodContext';
import ValueRowManager from './rows/ValueRowManager';
import ValueTableHeader from './ValueTableHeader';

const ValueTable = () => {
	const podContext = usePodContext();
	return (
		<table className='model-table'>
			<ValueTableHeader {...podContext} />
			<tbody>
				<ValueRowManager {...podContext} />
			</tbody>
		</table>
	);
};

export default ValueTable;
