import { COLOR_SCHEME } from "@pw/core/src/color/Color.constants";
import ColorUtils from "@pw/core/src/color/Color.utils";
import { MODEL, MODEL_ID } from "@pw/core/src/models/helpers/Model.constants";
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
	background-color: ${({ $color }) => $color ? $color : 'transparent'};
	color: ${({ $color }) => ColorUtils.getFgColor($color)};
`;

const FretLabel = ({ stringTuning, stringIndex, fretIndex, data, modelId }) => {
	const noteIndex = stringTuning + fretIndex;

	const model = MODEL[modelId];

	const degree = model.utils.getDegreeAtPitch(data, noteIndex);
	const hasDegree = degree !== null;

	console.log(degree)

	let color = null;
	if (hasDegree) {
		color = COLOR_SCHEME.degree[degree]
	}

	return (
		<StyledFretLabel $color={color}>
			{degree}
		</StyledFretLabel>
	);
};

export default FretLabel;