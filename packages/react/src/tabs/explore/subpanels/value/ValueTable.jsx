import React from 'react';
import ValueRowManager from './rows/ValueRowManager';
import ValueTableHeader from './ValueTableHeader';

const ValueTable = ({ value, type }) => {
	return (
		<table className='model-table'>
			<ValueTableHeader value={value} type={type} />
			<tbody>
				<ValueRowManager value={value} type={type} />
			</tbody>
		</table>
	);
};

export default ValueTable;
