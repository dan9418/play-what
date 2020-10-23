import React from 'react';
import ModelRowManager from './ModelRowManager';
import './ModelTable.css';

const ModelTable = ({ value, setValue, isEditing, modelType, podType }) => {
	return (
		<table className='model-table'>
			<thead>
				<tr>
					<th>#</th>
					<th>Pod</th>
					<th>Reduced</th>
					<th>{podType}</th>
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
					modelType={modelType}
					podType={podType}
				/>
			</tbody>
		</table>
	);
};

export default ModelTable;
