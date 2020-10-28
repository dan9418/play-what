import React, { useEffect, useState } from "react";
import usePodContext from "../other/PodContext";
import DropdownInput from "../ui/DropdownInput/DropdownInput";

import EditDash from './EditDash';

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

const TypeSubpanel = () => {
	const podContext = usePodContext();
	const { modelType, setModelType, podType, setPodType, theoryType, setTheoryType, value, setValue } = podContext;

	const [isEditing, setIsEditing] = useState(false);

	const modelObj = TYPE_OPTIONS.find(x => x.id === modelType);
	const theoryObj = modelObj.theoryOptions.find(x => x.id === theoryType);
	const podObj = POD_TYPE_OPTIONS.find(x => x.id === podType);

	useEffect(() => {
		setTheoryType(modelObj.theoryOptions[0].id);
	}, [modelType]);

	return (
		<div className='subpanel'>
			<EditDash name="Types" isEditing={isEditing} setIsEditing={setIsEditing} />
			<table>
				<thead>
					<tr>
						<th>Model</th>
						<th>Pod</th>
						<th>Theory</th>
					</tr>
				</thead>
				<tbody>
					{isEditing ?
						<tr>
							<td>
								<DropdownInput options={TYPE_OPTIONS} value={modelType} setValue={t => setModelType(t.id)} />
							</td>
							<td>
								<DropdownInput options={modelObj.theoryOptions} value={theoryType} setValue={t => setTheoryType(t.id)} />
							</td>
							<td>
								<DropdownInput options={POD_TYPE_OPTIONS} value={podType} setValue={t => setPodType(t.id)} />
							</td>
						</tr>
						:
						<tr>
							<td>{modelObj.name}</td>
							<td>{podObj.name}</td>
							<td>{theoryObj && theoryObj.name || 'n/a'}</td>
						</tr>
					}
				</tbody>
			</table>

		</div>
	);
};

export default TypeSubpanel;
