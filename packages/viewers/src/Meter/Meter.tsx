import ModelUtils from '@pw/core/src/models/Model.utils';
import { DEFAULT_DEGREE_COLOR_SCHEME } from '@pw/core/src/theory/Degree.constants';
import PodUtils from '@pw/core/src/models/Pod/Pod.utils';
import React from "react";
import styled from 'styled-components';
import DEFAULT_METER_PROPS from './Meter.defaults';
import { IPod } from '@pw/core/src/models/Model.constants';

const StyledDot = styled.div`
 	${({ $color }) => $color ? `background-color: ${$color}` : ''};
	height: 32px;
	width: 100%;
	border: 1px solid black;
	:not(:last-child){
		border-right: 0;
	}
	//border-radius: 2px;
	padding: 2px;
	//margin: 0 2px;
	font-size: 80%;
	display: flex;
	align-items: center;
	justify-content: center;

	:last-child {
		border-radius: 0 4px 4px 0;
	}
	:first-child {
		border-radius: 4px 0 0 4px;
	}

	position: relative;
	.label {
		padding-bottom: 4px;
		position: absolute;
		bottom: 100%;
		width: 100%;
	}
`;

const StyledMeter = styled.div`
	display: flex;
	justify-content: space-between;

	.dot-list {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

const DotList = ({ modelId, modelValue, modelOptions, range = [0, 12], matchOctave = true }) => {
	const list = [];

	const root = modelOptions && modelOptions.modelRoot ? modelOptions.modelRoot : null;

	for (let i = range[0]; i < range[1]; i++) {
		const pod = ModelUtils.getPodAtPitch(modelId, modelValue, modelOptions, i, matchOctave);
		const hasDegree = pod !== null;

		let color = '#fff';
		let podName = null;

		const indexPod: IPod = [i, 0];
		const pitchClass = PodUtils.getPitchClass(indexPod);
		if (hasDegree) {
			color = DEFAULT_DEGREE_COLOR_SCHEME[pod[1]];
			//podName = pod[1];
		}
		if (pitchClass === 0) {
			podName = PodUtils.getOctave(indexPod, true);
		}

		const isRoot = root[0] === i;
		const isMiddleC = i === 0;

		list.push(
			<StyledDot
				$color={color}
				key={i}
			>
				{podName}
				{isRoot ? <span className="label">R</span> : null}
				{isMiddleC ? <span className="label">C</span> : null}
			</StyledDot>
		);
	}
	return (
		<div className='dot-list'>
			{list}
		</div>
	);
};

const Meter = (userProps) => {
	const props = { ...DEFAULT_METER_PROPS, ...userProps };

	return (
		<StyledMeter>
			<DotList {...props} />
		</StyledMeter>
	);
}

export default Meter;
