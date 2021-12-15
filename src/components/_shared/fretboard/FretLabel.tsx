
import ToneUtils from "@pw-core/tone/Tone.utils";
import TuningUtils from "@pw-core/tuning/Tuning.utils";
import * as React from "react";
import styled from "styled-components";
import { IFretLabelProps } from "./Fretboard.defaults";

const StyledFretLabel = styled.div`
	position: absolute;
	width: 90%;
	height: 90%;
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


const FretLabel: React.FC<IFretLabelProps> = ({ noteIndex, stringIndex }) => {

	const isVisible = true;
	let bgColor = 'black';
	let fgColor = 'white';

	if (!isVisible) return null;


	const f = TuningUtils.getFrequency(noteIndex);

	return (
		<StyledFretLabel $bgColor={bgColor} $fgColor={fgColor} onClick={() => ToneUtils.playSound(f)}>
			{null}
		</StyledFretLabel>
	);
};

export default FretLabel;
