import { IModelOptions, IModelValue, IPod, ModelId } from '@pw/core/src/models/Model.constants';
import ModelUtils from '@pw/core/src/models/Model.utils';
import PodUtils from '@pw/core/src/models/Pod/Pod.utils';
import React from "react";
import styled from 'styled-components';

const StyledDot = styled.div`
 	${({ $color }) => $color ? `
	 	background-color: ${$color};
		:hover {
			cursor: pointer;
			opacity: 1;
		}
	 ` : `
		:hover {
			background-color: #eee;
		}
	 `};
	opacity: ${({ $isDimmed }) => $isDimmed ? .4 : .9};

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
	${({ $fgColor }) => $fgColor ? `color: ${$fgColor}` : ''};
	.label {
		color: #333;
		font-size: 90%;
		padding-top: 4px;
		position: absolute;
		top: 100%;
		width: 100%;
		text-align: center;
	}
	.octave {
		color: #333;
		font-size: 90%;
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
		let fgColor = '#333';

		const indexPod: IPod = [i, 0];
		const pitchClass = PodUtils.getPitchClass(indexPod);

		const onMouseEnter = () => setHoveredIndex(i)
		const onMouseLeave = () => setHoveredIndex(null);
		let name = null;
		if (hasDegree) {
			name = podProps.label;
			color = podProps.color;
			fgColor = podProps.fgColor;
		}

		const isRoot = root && root[0] === i;
		const isMiddleC = i === 0;
		const isOctave = pitchClass === 9;

		const octave = isOctave ? PodUtils.getOctave(indexPod, true) : null;

		list.push(
			<StyledDot
				$color={color}
				$fgColor={fgColor}
				key={i}
				$isDimmed={hoveredIndex !== null && hoveredIndex !== i}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				{name}
				{isOctave ? <span className="octave">{octave}</span> : null}
				{isRoot ? <span className="label">R</span> : null}
				{!isRoot && isMiddleC ? <span className="label">C</span> : null}
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
