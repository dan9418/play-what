
import * as React from "react";
import styled from "styled-components";
import { IFretLabelProps } from "./Fretboard.utils";

const StyledFretLabel = styled.div`
	position: absolute;
	width: 16px;
	height: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
	background-color: ${({ $bgColor }) => $bgColor ? $bgColor : 'transparent'};
	color: ${({ $fgColor }) => $fgColor ? $fgColor : ''};

	cursor: pointer;
	&:hover {
		width: 24px;
		height: 24px;
	}
`;


const FretLabel: React.FC<IFretLabelProps> = ({ color, freq }) => {

	let fgColor = 'white';

	return (
		<StyledFretLabel $bgColor={color} $fgColor={fgColor} onClick={null} className="fret-label">
			{null}
		</StyledFretLabel>
	);
};

export default FretLabel;
