import React from 'react';
import usePodContext from '../../../../other/PodContext';
import ValueRowManager from './rows/ValueRowManager';
import ValueTableHeader from './ValueTableHeader';

const ValueTable = () => {
	const podContext = usePodContext();
	const { value, podType, isList } = podContext;
	return (
		<table className='model-table'>
			<ValueTableHeader value={value} podType={podType} isList={isList} />
			<tbody>
				<ValueRowManager value={value} podType={podType} isList={isList} />
			</tbody>
		</table>
	);
};

export default ValueTable;
