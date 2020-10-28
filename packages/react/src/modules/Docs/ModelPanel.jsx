import React, { useEffect, useState } from "react";
import ButtonInput from '../ui/ButtonInput/ButtonInput';
import Meter from "../viewers/Meter/Meter";
import "./Docs.css";
import ModelTable from './ModelTable';
import pw_core from "@pw/core";
import DropdownInput from "../ui/DropdownInput/DropdownInput";
import Fretboard from '../viewers/Fretboard/_module';
import usePodContext from "../other/PodContext";

const EditDash = ({ isEditing, setIsEditing, actions }) => {
	return (
		<div className='submenu'>
			<div className="space" />
			<div className="action-row">
				{isEditing && actions && actions.length && actions.map(a => (
					<>
						<div className='edit' onClick={a.onClick}>{a.text}</div>
						{` | `}
					</>
				))}
				<div className='edit' onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'done' : 'edit'} </div>
			</div>
		</div>
	);
};

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
			{isEditing && (
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
		theoryTypes: [
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
		theoryTypes: [
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
		theoryTypes: [
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
	const { modelType, podType, theoryType, value, setValue } = podContext;

	const [isEditing, setIsEditing] = useState(false);

	const [model, setModel] = useState(TYPE_OPTIONS[0]);
	const [theory, setTheory] = useState(model.theoryTypes[0]);

	const [pod, setPod] = useState(POD_TYPE_OPTIONS[0]);

	useEffect(() => {
		setTheory(model.theoryTypes[0]);
	}, [model.id]);

	return (
		<div className='subpanel'>
			<EditDash isEditing={isEditing} setIsEditing={setIsEditing} />
			<table>
				<thead>
					<tr>
						<th>Model Type</th>
						<th>Pod Type</th>
						<th>Theory Type</th>
					</tr>
				</thead>
				<tbody>
					{isEditing ?
						<tr>
							<td>
								<DropdownInput options={TYPE_OPTIONS} value={model} setValue={setModel} />
							</td>
							<td>
								<DropdownInput options={model.theoryTypes} value={theory} setValue={setTheory} />
							</td>
							<td>
								<DropdownInput options={POD_TYPE_OPTIONS} value={pod} setValue={setPod} />
							</td>
						</tr>
						:
						<tr>
							<td>{modelType}</td>
							<td>{podType}</td>
							<td>{theoryType || 'n/a'}</td>
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
