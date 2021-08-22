import ColorUtils from "@pw/core/src/color/Color.utils";
import { IPod } from "@pw/core/src/models/Model.constants";
import * as React from "react";
import styled from "styled-components";
import viewerUtils from "../viewer.utils";

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
	${({ $isDimmed }) => $isDimmed ? 'opacity: 0.4;' : ''};
	cursor: pointer;
`;

interface IFretLabelProps {
	noteIndex: number;
	root: IPod;
	intervals: IPod[];
	notes: IPod[];
	range: number[];
	matchOctave: boolean;
	hideLabel: boolean;
}

const FretLabel: React.FC<IFretLabelProps> = ({ noteIndex, root, intervals, notes, hideLabel = false, matchOctave = false }) => {

	const podProps = viewerUtils.getPodProps(notes, noteIndex);

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
