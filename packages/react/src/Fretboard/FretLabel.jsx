import * as React from "react";
import styled from "styled-components";

const StyledFretLabel = styled.div`
	position: absolute;
	width: 90%;
	height: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
	background-color: ${({ $color }) => $color};
`;

const FretLabel = ({ stringTuning, stringIndex, fretIndex }) => {
	const noteIndex = stringTuning + fretIndex;

	const color = 'white';

	return (
		<StyledFretLabel $color={color}>
			{noteIndex}
		</StyledFretLabel>
	);
};

export default FretLabel;
