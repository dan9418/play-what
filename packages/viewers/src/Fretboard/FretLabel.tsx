import ColorUtils from "@pw/core/src/color/Color.utils";
import * as React from "react";
import styled from "styled-components";
import { IPod } from "../../../core/src/models/Model.constants";
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
	background-color: ${({ $color }) => $color ? $color : 'transparent'};
	color: ${({ $color }) => ColorUtils.getFgColor($color)};
	cursor: pointer;
`;


const FretLabel: React.FC<IFretLabelProps> = ({ noteIndex, hideLabel, matchOctave, details }) => {

	const notes = details ? details.notes.value : [];

	const podProps = viewerUtils.getPodProps(notes as IPod[], noteIndex);

	if (!podProps) return null;

	const { color, label } = podProps;

	return (
		<StyledFretLabel
			$color={color}
		>
			{!hideLabel && label}
		</StyledFretLabel>
	);
};

export default FretLabel;
