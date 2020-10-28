import React, { useEffect, useState } from "react";
import ButtonInput from '../ui/ButtonInput/ButtonInput';
import Meter from "../viewers/Meter/Meter";
import "./Docs.css";
import ModelTable from './ModelTable';
import pw_core from "@pw/core";
import DropdownInput from "../ui/DropdownInput/DropdownInput";
import Fretboard from '../viewers/Fretboard/_module';
import usePodContext from "../other/PodContext";
import EditDash from "./EditDash";

const getPreviewText = (value, modelType, podType, theoryType) => {
	if (modelType === 'pod') {
		return pw_core.models.pod.getName({ pod: value, podType });
	}
	if (modelType === 'podList') {
		return pw_core.models.podList.getName({ podList: value, podType, theoryType });
	}
	return JSON.stringify(value);
}

const PreviewText = ({ value, modelType, podType, theoryType }) => getPreviewText(value, modelType, podType, theoryType);

const ModelSummary = ({ label, isOpen, setIsOpen }) => {
	const podContext = usePodContext();
	const { modelType, podType, theoryType, value, setValue } = podContext;
	return (
		<div className='model-summary'>
			<div>
				<div className='model-name'>{label}</div>
				<div className='type-row'>
					<div className='model-type'>{modelType}</div>
					{` | `}
					<div className='pod-type'>{podType}</div>
					{` | `}
					<div className='pod-type'>{theoryType}</div>
				</div>
			</div>
			<div className="preview">
				{getPreviewText(value, modelType, podType, theoryType)}
			</div>
			<div className='edit pin-right'>
				<ButtonInput onClick={() => setIsOpen(!isOpen)} className='action-button edit'>{isOpen ? '-' : '+'}</ButtonInput>
			</div>
		</div>
	);
};

const getPresetOptions = (modelType, theoryType) => {
	if (modelType === 'pod') {
		if (theoryType === 'note') return pw_core.models.pod.note.presetValues;
		else if (theoryType === 'interval') return pw_core.models.pod.interval.presetValues;
	}
	else if (modelType === 'podList') {
		if (theoryType === 'chord') return pw_core.models.podList.chord.presetValues;
		else if (theoryType === 'scale') return pw_core.models.podList.scale.presetValues;
	}
	return [];
}

const ModelTableSubpanel = () => {
	const podContext = usePodContext();
	const { modelType, podType, theoryType, value, setValue } = podContext;

	const [isEditing, setIsEditing] = useState(false);
	const [isLoadingPreset, setIsLoadingPreset] = useState(false);
	const editOptionText = isLoadingPreset ? 'done' : 'load preset';
	const editOptions = [{ text: editOptionText, onClick: () => setIsLoadingPreset(!isLoadingPreset) }];
	return (
		<div className='subpanel'>
			<EditDash isEditing={isEditing} setIsEditing={setIsEditing} actions={editOptions} />
			{isLoadingPreset && (
				<div>
					<DropdownInput
						options={getPresetOptions(modelType, theoryType)}
						value={value}
						setValue={v => setValue(v.value)}
					/>
				</div>
			)}
			<ModelTable value={value} setValue={setValue} modelType={modelType} podType={podType} isEditing={isEditing} />
		</div>
	);
};

const ANALYSIS_OPTIONS = [
	{
		id: 'meter',
		name: 'Meter',
		component: Meter
	},
	{
		id: 'text',
		name: 'Text',
		component: PreviewText
	},
	{
		id: 'fretboard',
		name: 'Fretboard',
		component: Fretboard.component
	}
];

const AnalysisSubpanel = () => {
	const podContext = usePodContext();
	const { modelType, podType, theoryType, value, setValue } = podContext;

	const [analysis, setAnalysis] = useState(ANALYSIS_OPTIONS[0]);
	const [isEditing, setIsEditing] = useState(false);

	const Component = analysis.component;

	return (
		<div className='subpanel'>
			<EditDash isEditing={isEditing} setIsEditing={setIsEditing} />
			{isEditing && <DropdownInput options={ANALYSIS_OPTIONS} setValue={setAnalysis} />}
			<div>
				<Component value={value} modelType={modelType} podType={podType} theoryType={theoryType} />
			</div>
		</div>
	);
};

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
			<ModelTableSubpanel />
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
			<ModelSummary label={label} isOpen={isOpen} setIsOpen={setIsOpen} />
			{isOpen && (<ModelDetails />)}
		</div>
	);
}

export default ModelPanel;
