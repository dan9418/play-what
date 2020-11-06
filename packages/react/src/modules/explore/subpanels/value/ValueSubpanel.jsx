import pw_core from "@pw/core";
import React, { useState } from "react";
import usePodContext from "../../../other/PodContext";
import ButtonInput from "../../../ui/ButtonInput/ButtonInput";
import DropdownInput from "../../../ui/DropdownInput/DropdownInput";

import EditDash from '../../EditDash';
import Value from "./Value";

const MODELS = [
	{
		id: 'podIndex',
		name: 'podIndex',
		cl: pw_core.PodIndex,
		defaultValue: 0
	},
	{
		id: 'pitch',
		name: 'pitch',
		cl: pw_core.Pitch,
		defaultValue: pw_core.Pitch.presetValues[0].value
	},
	{
		id: 'degree',
		name: 'degree',
		cl: pw_core.Degree,
		defaultValue: pw_core.Degree.presetValues[0].value
	},
	{
		id: 'pod',
		name: 'pod',
		cl: pw_core.Pod,
		defaultValue: [0, 0]
	},
	{
		id: 'note',
		name: 'note',
		cl: pw_core.Note,
		defaultValue: pw_core.Note.presetValues[0].value
	},
	{
		id: 'interval',
		name: 'interval',
		cl: pw_core.Interval,
		defaultValue: pw_core.Interval.presetValues[0].value
	},
	{
		id: 'podList',
		name: 'podList',
		cl: pw_core.PodList,
		defaultValue: [[0, 0], [0, 0]]
	},
	{
		id: 'chord',
		name: 'chord',
		cl: pw_core.Chord,
		defaultValue: pw_core.Chord.presetValues[0].value
	},
	{
		id: 'scale',
		name: 'scale',
		cl: pw_core.Scale,
		defaultValue: pw_core.Scale.presetValues[0].value
	}
]

const getModel = (value) => {
	return MODELS.find(m => m.id === value.getType());
}

const getPreset = (value, presets = []) => {
	return presets.find(m => false);
}

const ValueSubpanel = () => {
	const podContext = usePodContext();
	const { value, setValue } = podContext;

	const [isEditing, setIsEditing] = useState(false);
	const [isLoadingPreset, setIsLoadingPreset] = useState(false);

	const model = getModel(value);
	const preset = getPreset(value, model.cl.presetValues);

	return (
		<div className='subpanel'>
			<EditDash name="Value" isEditing={isEditing} setIsEditing={setIsEditing} />
			<div>
				<div>Model</div>
				<DropdownInput options={MODELS} value={model} setValue={v => setValue(new v.cl(v.defaultValue))} />
				{model.cl.presetValues && (
					<>
						<div>Preset</div>
						<DropdownInput options={model.cl.presetValues} value={preset} setValue={v => setValue(new v.cl(v.value))} />
					</>
				)}
			</div>
			<Value isEditing={isEditing} />
			{isEditing && (
				<div className='preset-box' >
					<ButtonInput onClick={() => setIsLoadingPreset(!isLoadingPreset)}>Load Preset</ButtonInput>
				</div>
			)}
			{isLoadingPreset && (
				<div>
					<DropdownInput
						options={getPresetOptions()}
						value={value}
						setValue={v => setValue(v.value)}
					/>
				</div>
			)}
		</div>
	);
};

export default ValueSubpanel;
