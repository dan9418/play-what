import { COLOR_SCHEME } from '@pw/core/src/Color.constants';
import ColorUtils from '@pw/core/src/Color.utils';
import CoreUtils from '@pw/core/src/Core.utils';
import React from 'react';
import DEFAULT_METER_PROPS from './Meter.defaults';
import styled from 'styled-components';

const StyledMeter = styled.div`
 	margin: 0 8px;
	.dot-list {
		display: inline-flex;
		align-items: center;

		.dot {
			height: 12px;
			width: 12px;
			border-radius: 50%;
			background-color: white;
			border: 1px solid #555;
			margin: 0 4px;
		}
	}
`;

const getPitchColor = p => COLOR_SCHEME.pitchClass[p % 12];
const getDegreeColor = d => COLOR_SCHEME.degree[d % 7];

const DotList = ({ pods, meterType }) => {

	let max = 12;
	let colorFn = getDegreeColor;

	const list = [];
	for (let i = 0; i < max; i++) {
		const index = pods.findIndex(pod => CoreUtils.modulo(pod[0], max) === i);
		const color = colorFn(index);
		const style = ColorUtils.getStylesFromBgColor(color);

		list.push(<div className='dot' style={style} key={i} />);
	}
	return (
		<div className='dot-list'>
			{list}
		</div>
	);
};

const Meter = (userProps) => {
	const props = { ...DEFAULT_METER_PROPS, ...userProps };
	const { pods } = props;

	return (
		<StyledMeter>
			<DotList pods={pods} />
		</StyledMeter>
	);
}

export default Meter;
