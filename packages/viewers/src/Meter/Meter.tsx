import { IModelOptions, IModelValue, IPod, ModelId } from '@pw/core/src/models/Model.constants';
import ModelUtils from '@pw/core/src/models/Model.utils';
import PodUtils from '@pw/core/src/models/Pod/Pod.utils';
import React from "react";
import styled from 'styled-components';

const StyledDot = styled.div`
 	${({ $color }) => $color ? `background-color: ${$color}` : ''};
	${({ $isDimmed }) => $isDimmed ? 'opacity: 0.4;' : ''};

	:hover {
		cursor: pointer;
		background-color: #eee;;
	}

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
		text-align: center;
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

interface IMeterProps {
	modelId: ModelId;
	modelValue: IModelValue;
	modelOptions: IModelOptions;
	range: number[];
	matchOctave: boolean;
	hoveredIndex: number | null;
	setHoveredIndex: any;
}

const DotList: React.FC<IMeterProps> = ({ modelId, modelValue, modelOptions, range = [0, 12], matchOctave, hoveredIndex, setHoveredIndex }) => {
	const list = [];

	const root = modelOptions && modelOptions.modelRoot ? modelOptions.modelRoot : null;

	for (let i = range[0]; i < range[1]; i++) {

		const podProps = ModelUtils.getPodProps(modelId, modelValue, modelOptions, i, matchOctave);

		const hasDegree = podProps !== null;

		let color = '#fff';
		let podName = null;

		const indexPod: IPod = [i, 0];
		const pitchClass = PodUtils.getPitchClass(indexPod);

		let onMouseEnter = null;
		let onMouseLeave = null;
		if (hasDegree) {
			color = podProps.color;
			onMouseEnter = () => setHoveredIndex(i)
			onMouseLeave = () => setHoveredIndex(null);
		}
		if (pitchClass === 0) {
			podName = PodUtils.getOctave(indexPod, true);
		}

		const isRoot = root && root[0] === i;
		const isMiddleC = i === 0;

		list.push(
			<StyledDot
				$color={color}
				key={i}
				$isDimmed={hoveredIndex !== null && hoveredIndex !== i}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
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

const Meter: React.FC<IMeterProps> = (props) => {
	return (
		<StyledMeter>
			<DotList {...props} />
		</StyledMeter>
	);
}

export default Meter;
