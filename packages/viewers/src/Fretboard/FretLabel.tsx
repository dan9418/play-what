import * as React from "react";
import styled from "styled-components";
import { DisplayType } from "../../../core/src/models/Model.constants";
import viewerUtils from "../viewer.utils";
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
`;


const FretLabel: React.FC<IFretLabelProps> = ({ noteIndex, hideLabel, matchOctave, details }) => {

	const podOptions = {
		matchOctave,
		displayType: DisplayType.Degree
	};

	const podProps = viewerUtils.getPodProps(details, noteIndex, podOptions);

	if (!podProps) return null;

	const { bgColor, fgColor, text } = podProps;

	return (
		<StyledFretLabel $bgColor={bgColor} $fgColor={fgColor}>
			{!hideLabel && text}
		</StyledFretLabel>
	);
};

export default FretLabel;
