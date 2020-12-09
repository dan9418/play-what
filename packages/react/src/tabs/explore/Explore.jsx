import { SCALE } from '@pw/core/src/Pod.presets';
import React, { useState } from 'react';
import { VIEWER } from '../../viewers/viewers';
import './Explore.css';
import InputPanel from './panels/InputPanel';
import OutputPanel from './panels/OutputPanel';
import Timeline from './Timeline/Timeline';

const INPUT_1 = {
	id: 'input1',
	name: 'Input 1',
	value: {
		pods: SCALE.Major.value,
		podType: 'note'
	}
};

const INPUT_2 = {
	id: 'input2',
	name: 'Input 2',
	value: {
		pods: SCALE.NaturalMinor.value,
		podType: 'note'
	}
};

const OUTPUT_1 = {
	id: 'output1',
	name: 'Output 1',
	value: {
		viewerInput: null,
		viewerDef: VIEWER.fretboard,
		viewerProps: VIEWER.fretboard.defaultProps
	}
};

const OUTPUT_2 = {
	id: 'output1',
	name: 'Output 1',
	value: {
		viewerInput: null,
		viewerDef: VIEWER.keyboard,
		viewerProps: VIEWER.keyboard.defaultProps
	}
}

const DEFAULT_FRAMES = [
	{
		id: '1',
		name: 'Frame 1',
		value: {
			inputs: [INPUT_1],
			outputs: [OUTPUT_1]
		}
	},
	{
		id: '2',
		name: 'Frame 2',
		value: {
			inputs: [INPUT_2],
			outputs: [OUTPUT_2]
		}
	}
];

const DEFAULT_FRAMESET = {
	id: '2-5-1',
	name: '2-5-1',
	measures: [[SCALE.Major.value, [], SCALE.NaturalMinor.value, SCALE.Chromatic.value], [SCALE.Major.value, [], [], []]]
}

const Explore = () => {
	const [frameset, setFrameset] = useState(DEFAULT_FRAMESET);
	const [frameIndex, setFrameIndex] = useState(0);

	const frame = { inputs: [], outputs: [] };
	const { inputs, outputs } = frame;
	const setInputs = null;
	const setOutputs = null;

	return (
		<div className="explore">
			<InputPanel inputs={inputs} setInputs={setInputs} />
			<OutputPanel inputs={inputs} outputs={outputs} setOutputs={setOutputs} />
			<Timeline frameset={frameset} frameIndex={frameIndex} setFrameIndex={setFrameIndex} />
		</div>
	);
};

export default Explore;
