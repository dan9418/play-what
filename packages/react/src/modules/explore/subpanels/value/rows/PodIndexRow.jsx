import React from 'react';
import DropdownInput from '../../../../ui/DropdownInput/DropdownInput';

const PodIndexRow = ({ podIndex, setPodIndex, isEditing }) => {

	return (
		<tr>
			<td colSpan="100">
				{isEditing ?
					<DropdownInput options={[]} value={null} setValue={null} />
					:
					podIndex.getName()}
			</td>
		</tr>
	);
};

export default PodIndexRow;
