import { SCALE } from '@pw/core/src/Pod.presets';
import React, { useState } from 'react';
import { VIEWER } from '../../viewers/viewers';
import BasicDemo from './demos/BasicDemo';
import './ExploreTab.css';
import InputPanel from './panels/InputPanel';
import OutputPanel from './panels/OutputPanel';

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
			viewerInput: null,
			viewerDef: VIEWER.fretboard,
			viewerProps: VIEWER.fretboard.defaultProps
		}
	},
	{
		id: 'output1',
		name: 'Output 1',
		value: {
			viewerInput: null,
			viewerDef: VIEWER.keyboard,
			viewerProps: VIEWER.keyboard.defaultProps
		}
	}
];

const Explore = () => {
	const [inputs, setInputs] = useState(DEFAULT_INPUTS);
	const [outputs, setOutputs] = useState(DEFAULT_OUTPUTS);

	return (
		<div className="explore-tab">
			<InputPanel inputs={inputs} setInputs={setInputs} />
			<OutputPanel inputs={inputs} outputs={outputs} setOutputs={setOutputs} />
		</div>
	);
};

export default Explore;
