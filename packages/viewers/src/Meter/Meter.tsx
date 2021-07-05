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

	height: 16px;
	width: 100%;
	border: 1px solid black;
	:not(:last-child){
		border-right: 0;
	}
	:last-child {
		border-radius: 0 4px 4px 0;
	}
	:first-child {
		border-radius: 4px 0 0 4px;
	}
	font-size: 80%;
	display: flex;
	align-items: center;
	justify-content: center;

	position: relative;
	${({ $fgColor }) => $fgColor ? `color: ${$fgColor}` : ''};
	.note {
		font-weight: bold;
		margin-right: 4px;
	}
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
		margin: 8px 0;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

interface IMeterProps {
	root: IPod;
	notes: IPod[];
	range?: number[];
	matchOctave?: boolean;
	hoveredIndex?: number | null;
	setHoveredIndex?: any;
}

const DotList: React.FC<IMeterProps> = ({ notes, root = [0, 0], range = [0, 12], matchOctave = false}) => {
	const list = [];

	for (let i = range[0]; i < range[1]; i++) {

		const podProps = ModelUtils.getPodProps(notes, i);

		const hasDegree = podProps !== null;

		let color = '#fff';
		let fgColor = '#333';

		const indexPod: IPod = [i, 0];
		const pitchClass = PodUtils.getPitchClass(indexPod);

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
			>
				{/*<span className="note">{hasDegree && podProps.label}</span>*/}
				{/*name && <span className="interval">{name}</span>*/}
				{/*isOctave ? <span className="octave">{octave}</span> : null*/}
				{/*isRoot ? <span className="label">R</span> : null*/}
				{/*!isRoot && isMiddleC ? <span className="label">C</span> : null*/}
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
