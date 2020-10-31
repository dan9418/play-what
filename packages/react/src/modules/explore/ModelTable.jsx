import React from 'react';
import ModelRowManager from './ModelTableRow';

const ModelTable = ({ value }) => {
	return (
		<table className='model-table'>
			<thead>
				<tr>
					<th>#</th>
					<th>Pod</th>
					<th>Reduced</th>
					<th>Type</th>
					<th>Other</th>
					{isEditing && (
						<>
							<th>
								Delete
							</th>
							<th>
								Order
							</th>
						</>
					)}
				</tr>
			</thead>
			<tbody>
				<ModelRowManager
					value={value}
					setValue={setValue}
					isEditing={isEditing}
				/>
			</tbody>
		</table>
	);
};

export default ModelTable;
