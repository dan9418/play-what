import React, { useEffect, useState } from "react";
import usePodContext from "../other/PodContext";
import DropdownInput from "../ui/DropdownInput/DropdownInput";
import AnalysisSubpanel from "./AnalysisSubpanel";
import "./Docs.css";
import EditDash from './EditDash';
import ModelCardHeader from "./ModelCardHeader";
import ValueSubpanel from "./ValueSubpanel";

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
			<EditDash isEditing={isEditing} setIsEditing={setIsEditing} />
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

const ModelDetails = () => {
	return (
		<div className='model-details'>
			<h3>Type</h3>
			<TypeSubpanel />
			<h3>Value</h3>
			<ValueSubpanel />
			<h3>Analysis</h3>
			<AnalysisSubpanel />
		</div>
	);
};

const ModelPanel = ({ label }) => {
	const [isOpen, setIsOpen] = useState(false);
	console.log('dpb', label);
	return (
		<div className='model-row'>
			<ModelCardHeader label={label} isOpen={isOpen} setIsOpen={setIsOpen} />
			{isOpen && (<ModelDetails />)}
		</div>
	);
}

export default ModelPanel;
