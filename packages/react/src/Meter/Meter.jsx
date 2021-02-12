import { COLOR_SCHEME } from '@pw/core/src/color/Color.constants';
import NumberUtils from '@pw/core/src/general/Number.utils';
import { MODEL } from '@pw/core/src/models/helpers/Model.constants';
import React from 'react';
import styled from 'styled-components';
import DEFAULT_METER_PROPS from './Meter.defaults';

const BLACK_KEY_INDICES = [0, 2, 4, 5, 7, 9, 11];

const StyledDot = styled.div`
 	${({ $color }) => $color ? `background-color: ${$color}` : ''};
	min-height: 16px;
	width: 100%;
	border-radius: 4px;
	padding: 2px;
	border: 1px solid #555;
	margin: 0 4px;
	font-size: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledMeter = styled.div`
 	margin: 16px 0 8px;
	.dot-list {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

const DotList = ({ data, modelId }) => {

	const model = MODEL[modelId];

	let max = 12;

	const list = [];
	for (let i = 0; i < max; i++) {
		const degree = model.utils.getDegreeAtPitch(data, i);
		const hasDegree = degree !== null;

		let color = BLACK_KEY_INDICES.includes(NumberUtils.modulo(i, 12)) ? '#eee' : '#333';
		if (hasDegree) {
			color = COLOR_SCHEME.degree[degree]
		}

		const podName = null;

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
