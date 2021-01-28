import { COLOR_SCHEME } from '@pw/core/src/Color.constants';
import ColorUtils from '@pw/core/src/Color.utils';
import CoreUtils from '@pw/core/src/Core.utils';
import React from 'react';
import DEFAULT_METER_PROPS from './Meter.defaults';
import styled from 'styled-components';
import PodUtils from '@pw/core/src/Pod.utils';

const StyledMeter = styled.div`
 	margin: 16px 0 8px;
	.dot-list {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.dot {
			min-height: 16px;
			width: 100%;
			border-radius: 4px;
			padding: 2px;
			background-color: white;
			border: 1px solid #555;
			margin: 0 4px;
			font-size: 80%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
`;

const getPitchColor = p => COLOR_SCHEME.pitchClass[p % 12];
const getDegreeColor = d => COLOR_SCHEME.degree[d % 7];

const DotList = ({ pods, podType }) => {

	let max = 12;
	let colorFn = getDegreeColor;

	const list = [];
	for (let i = 0; i < max; i++) {
		const pod = pods.find(pod => CoreUtils.modulo(pod[0], max) === i);
		const color = colorFn(pod && pod[0]);
		const style = ColorUtils.getStylesFromBgColor(color);

		const podName = pod ? PodUtils.getName(pod, { podType }) : null;

		list.push(<div className='dot' style={style} key={i}>{podName}</div>);
	}
	return (
		<div className='dot-list'>
			{list}
		</div>
	);
};

const Meter = (userProps) => {
	const props = { ...DEFAULT_METER_PROPS, ...userProps };
	const { pods, podType } = props;

	return (
		<StyledMeter>
			<DotList pods={pods} podType={podType} />
		</StyledMeter>
	);
}

export default Meter;
