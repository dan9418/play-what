
import ToneUtils from "@pw-core/tone/Tone.utils";
import TuningUtils from "@pw-core/tuning/Tuning.utils";
import * as React from "react";
import styled from "styled-components";
import Model from "../../../core/models/Model";
import { IFretLabelProps } from "./Fretboard.utils";

const StyledFretLabel = styled.div`
	position: absolute;
	width: 32px;
	height: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
	background-color: ${({ $bgColor }) => $bgColor ? $bgColor : 'transparent'};
	color: ${({ $fgColor }) => $fgColor ? $fgColor : ''};

	cursor: pointer;
	&:hover {
		width: 100%;
		height: 100%;
	}
`;


const FretLabel: React.FC<IFretLabelProps> = ({ noteIndex, model }) => {

	if (!model) return null;

	const notes = model.getNoteListPods();

	const index = Model.getIndexOfPodAtPitch(notes, noteIndex, false);

	if (index === null) return null;

	let bgColor = '#333'; //Pod.arePodsEqual(model.intervals[0].pod, [0, 0]) ? 'red' : 'black';
	let fgColor = 'white';

	const f = TuningUtils.getFrequency(noteIndex);

	return (
		<StyledFretLabel $bgColor={bgColor} $fgColor={fgColor} onClick={() => ToneUtils.playSound(f)}>
			{null}
		</StyledFretLabel>
	);
};

export default FretLabel;
