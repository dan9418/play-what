import { COLOR_SCHEME } from '@pw/core/src/color/Color.constants';
import NumberUtils from '@pw/core/src/general/Number.utils';
import { MODEL } from '@pw/core/src/models/Model.constants';
import React from 'react';
import styled from 'styled-components';
import DEFAULT_METER_PROPS from './Meter.defaults';

const BLACK_KEY_INDICES = [0, 2, 4, 5, 7, 9, 11];

const StyledDot = styled.div`
 	${({ $color }) => $color ? `background-color: ${$color}` : ''};
	min-height: 2px;
	width: 100%;
	//border-radius: 2px;
	padding: 2px;
	//border: 1px solid #333;
	margin: 0 2px;
	font-size: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledMeter = styled.div`
 	margin: 16px 0 8px;
	background-color: #bbb;
	padding: 8px;
	border-radius: 8px;

	display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 8px;

	.dot-list {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

const StyledPD = styled.div`
	background-color: #eee;
	padding: 8px;
	border-radius: 8px;
	text-align: center;
`;

const DotList = ({ data, modelId }) => {

	const model = MODEL[modelId];

	let max = 12;

	const list = [];
	for (let i = 0; i < max; i++) {
		const pod = model.utils.getPodAtPitch(data, i);
		const hasDegree = pod !== null;

		let color = BLACK_KEY_INDICES.includes(NumberUtils.modulo(i, 12)) ? '#fff' : '#ccc';
		if (hasDegree) {
			color = COLOR_SCHEME.degree[pod[1]]
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
			<DotList {...props} />
			<StyledPD>
					p (o, pc)
			</StyledPD>
			<StyledPD>
					d (x, dc)
			</StyledPD>
		</StyledMeter>
	);
}

export default Meter;
