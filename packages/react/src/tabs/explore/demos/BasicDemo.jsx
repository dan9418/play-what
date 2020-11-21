import { SCALE } from '@pw/core/src/Pod.presets';
import React, { useState } from 'react';
import { VIEWER } from '../../../viewers/viewers';
import InputPanel from '../panels/InputPanel';
import OutputPanel from '../panels/OutputPanel';

const DEFAULT_INPUTS = [
	{
		id: 'input1',
		name: 'Input 1',
		value: {
			pods: SCALE.Major.value,
			podType: 'note'
		}
	},
	{
		id: 'input2',
		name: 'Input 2',
		value: {
			pods: SCALE.NaturalMinor.value,
			podType: 'note'
		}
	}
];

const DEFAULT_OUTPUTS = [
	{
		id: 'output1',
		name: 'Output 1',
		value: {
			viewerDef: VIEWER.fretboard,
			viewerProps: VIEWER.fretboard.defaultProps
		}
	},
	{
		id: 'output1',
		name: 'Output 1',
		value: {
			viewerDef: VIEWER.keyboard,
			viewerProps: VIEWER.keyboard.defaultProps
		}
	}
];

const BasicDemo = () => {
	const [inputs, setInputs] = useState(DEFAULT_INPUTS);
	const [outputs, setOutputs] = useState(DEFAULT_OUTPUTS);

	return (
		<div className="basic-demo">
			<InputPanel inputs={inputs} setInputs={setInputs} />
			<OutputPanel inputs={inputs} outputs={outputs} setOutputs={setOutputs} />
		</div>
	);
};

export default BasicDemo;
