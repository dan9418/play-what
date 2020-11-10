import React from 'react';
import ValueRowManager from './rows/ValueRowManager';
import ValueTableHeader from './ValueTableHeader';

const Value = ({ isEditing }) => {
	return (
		<table className='model-table'>
			<ValueTableHeader isEditing={isEditing} />
			<tbody>
				<ValueRowManager isEditing={isEditing} />
			</tbody>
		</table>
	);
};

export default Value;
