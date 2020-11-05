import React from 'react';

const ValueTableHeader = ({ value, setValue, isEditing }) => {
	return (
		<thead>
			<tr>
				{/* start with introducitng core cells concept */}
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
	);
};

export default ValueTableHeader;
