import ColorUtils from "@pw/core/src/color/Color.utils";
import { IModelOptions, IModelValue, ModelId, MODEL_MAP } from "@pw/core/src/models/Model.constants";
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
	modelValue: IModelValue;
	modelOptions: IModelOptions;
	range: number[];
	matchOctave: boolean;
	hoveredIndex: number | null;
	setHoveredIndex: any;
}

const FretLabel: React.FC<IFretLabelProps> = ({ noteIndex, modelId, modelValue, modelOptions, matchOctave, hoveredIndex, setHoveredIndex }) => {

	const podProps = ModelUtils.getPodProps(modelId, modelValue, modelOptions, noteIndex, matchOctave);

	if (!podProps) return null;

	const onMouseEnter = () => setHoveredIndex(noteIndex)
	const onMouseLeave = () => setHoveredIndex(null);

	const { color, label } = podProps;

	return (
		<StyledFretLabel
			$color={color}
			$isDimmed={hoveredIndex !== null && hoveredIndex !== noteIndex}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{label}
		</StyledFretLabel>
	);
};

export default FretLabel;
