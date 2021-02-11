import { MODEL_ID } from "@pw/core/src/models/helpers/Model.constants";
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

const FretLabel = ({ stringTuning, stringIndex, fretIndex, data, modelId }) => {
	const noteIndex = stringTuning + fretIndex;

	let color = 'white';
	if (modelId === MODEL_ID.Note) {
		if(noteIndex === data[0]) {
			color = 'red';
		}
	}

	return (
		<StyledFretLabel $color={color}>
			{noteIndex}
		</StyledFretLabel>
	);
};

export default FretLabel;
