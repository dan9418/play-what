import { SCALE } from '@pw/core/src/Pod.presets';
import React, { useState } from 'react';
import { VIEWERS } from '../../../viewers/viewers';
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
	}
];

const DEFAULT_OUTPUTS = [
	{
		id: 'output1',
		name: 'Output 1',
		value: {
			def: VIEWERS[2],
			props: VIEWERS[2].defaultProps
		}
	}
];

const BasicDemo = () => {
	const [inputs, setInputs] = useState(DEFAULT_INPUTS);
	const [outputs, setOutputs] = useState(DEFAULT_OUTPUTS);

	return (
		<div className="basic-demo">
			<div className="input-panel-list">
				{inputs.map((input, i) => (
					<InputPanel key={input.id} i={i} inputs={inputs} setInputs={setInputs} />)
				)}
			</div>
			<div className="output-panel-list">
				{outputs.map((output, i) => (
					<OutputPanel key={output.id} i={i} inputs={inputs} outputs={outputs} setOutputs={setOutputs} />
				))}
			</div>
		</div>
	);
};

export default BasicDemo;
