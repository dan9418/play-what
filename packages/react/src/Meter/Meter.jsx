import ModelUtils from '@pw/core/src/models/Model.utils';
import { DEFAULT_DEGREE_COLOR_SCHEME } from '@pw/core/src/theory/Degree.constants';
import React from "react";
import styled from 'styled-components';
import DEFAULT_METER_PROPS from './Meter.defaults';

const BLACK_KEY_INDICES = [0, 2, 4, 5, 7, 9, 11];

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
`;

const StyledMeter = styled.div`
 	margin: 16px 0 8px;
	display: flex;
	justify-content: space-between;

	.dot-list {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

const DotList = ({ modelId, modelValue, modelRoot }) => {
	const list = [];
	for (let i = -39; i < 48; i++) {
		const pod = ModelUtils.getPodAtPitch(modelId, modelValue, modelRoot, i, true);
		const hasDegree = pod !== null;

		let color = '#fff';
		let podName = null;
		if (hasDegree) {
			color = DEFAULT_DEGREE_COLOR_SCHEME[pod[1]];
			//podName = pod[1];
		}
		if (i === 0) {
			podName = 'C'
		}

		list.push(<StyledDot $color={color} key={i}>{podName}</StyledDot>);
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
