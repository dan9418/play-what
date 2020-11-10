import PodIndex from '@pw/core/src/modules/models/index/PodIndex';
import React from 'react';
import DropdownInput from '../../../../../ui/DropdownInput/DropdownInput';

const PodIndexRow = ({ podIndex, setPodIndex, isEditing }) => {

	const raw = podIndex.getValue();
	const reduced = new PodIndex(raw).reduce().getValue();

	return (
		<tr>
			<td>
				{raw}
			</td>
			<td>
				{reduced}
			</td>
			<td>
				{isEditing ?
					<DropdownInput options={[]} value={null} setValue={null} />
					:
					podIndex.getName()}
			</td>
		</tr>
	);
};

export default PodIndexRow;
