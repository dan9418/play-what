import ColorUtils from "@pw/core/src/color/Color.utils";
import { MODEL } from "@pw/core/src/models/Model.constants";
import ModelUtils from "@pw/core/src/models/Model.utils";
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

const FretLabel = ({ noteIndex, modelId, modelValue, modelRoot, superset }) => {

	const model = MODEL[modelId];

	const podProps = ModelUtils.getPodProps(modelId, modelValue, modelRoot, noteIndex, superset);

	if (!podProps) return null;

	const { color, label } = podProps;

	return (
		<StyledFretLabel $color={color}>
			{label}
		</StyledFretLabel>
	);
};

export default FretLabel;
