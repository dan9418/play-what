import ColorUtils from "@pw/core/src/color/Color.utils";
import { IModelOptions, IModelValue, IPod, ModelId } from "@pw/core/src/models/Model.constants";
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
	${({ $isDimmed }) => $isDimmed ? 'opacity: 0.4;' : ''};
	cursor: pointer;
`;

interface IFretLabelProps {
	noteIndex: number;
	modelId: ModelId;
	modelValue: IPod[];
	range: number[];
	matchOctave: boolean;
}

const FretLabel: React.FC<IFretLabelProps> = ({ noteIndex, modelId, modelValue, matchOctave = false }) => {

	const podProps = ModelUtils.getPodProps(modelValue, noteIndex);

	if (!podProps) return null;

	const { color, label } = podProps;

	return (
		<StyledFretLabel
			$color={color}
		>
			{label}
		</StyledFretLabel>
	);
};

export default FretLabel;
