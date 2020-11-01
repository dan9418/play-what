import React from 'react';
import ValueTableBody from './ValueTableBody';
import ValueTableHeader from './ValueTableHeader';

const Value = ({ isEditing }) => {
	return (
		<table className='model-table'>
			<ValueTableHeader isEditing={isEditing} />
			<ValueTableBody isEditing={isEditing} />
		</table>
	);
};

export default Value;
