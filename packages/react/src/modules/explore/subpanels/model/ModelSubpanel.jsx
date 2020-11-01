import React, { useEffect, useState } from "react";
import usePodContext from "../../../other/PodContext";
import DropdownInput from "../../../ui/DropdownInput/DropdownInput";

import EditDash from '../../EditDash';

const TYPE_OPTIONS = [
	{
		id: 'index',
		name: 'Index',
		theoryOptions: [
			{
				id: 'pitch',
				name: 'Pitch'
			},
			{
				id: 'degree',
				name: 'Degree'
			}
		]
	},
	{
		id: 'pod',
		name: 'Pod',
		theoryOptions: [
			{
				id: 'note',
				name: 'Note'
			},
			{
				id: 'interval',
				name: 'Interval'
			}
		]
	},
	{
		id: 'podList',
		name: 'Pod List',
		theoryOptions: [
			{
				id: 'chord',
				name: 'Chord'
			},
			{
				id: 'scale',
				name: 'Scale'
			}
		]
	}
];

const POD_TYPE_OPTIONS = [
	{
		id: 'note',
		name: 'Note'
	},
	{
		id: 'interval',
		name: 'Interval'
	}
];

const ModelSubpanel = () => {
	const podContext = usePodContext();
	const { value, setValue } = podContext;

	const [isEditing, setIsEditing] = useState(false);

	return (
		<div className='subpanel'>
			<EditDash name="Model" isEditing={isEditing} setIsEditing={setIsEditing} />
			<table>
				<thead>
					<tr>
						<th>Type</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{value.getType()}</td>
					</tr>
				</tbody>
			</table>

		</div>
	);
};

export default ModelSubpanel;
