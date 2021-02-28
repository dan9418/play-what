import { COLOR_SCHEME } from "@pw/core/src/color/Color.constants";
import ColorUtils from "@pw/core/src/color/Color.utils";
import { DEGREE, DEGREE_VALUES } from "@pw/core/src/models/Degree.constants";
import { MODEL, MODEL_ID } from "@pw/core/src/models/helpers/Model.constants";
import IntervalUtils from "@pw/core/src/models/Interval.utils";
import NoteUtils from "@pw/core/src/models/Note.utils";
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

const FretLabel = ({ stringTuning, stringIndex, fretIndex, modelConfig, metaChildren, modelId }) => {
	const model = MODEL[modelId];

	const noteIndex = stringTuning + fretIndex;

	const pod = model.utils.getPodAtPitch ? model.utils.getPodAtPitch(modelConfig, metaChildren, noteIndex) : null;
	const hasDegree = pod !== null;

	let color = null;
	if (hasDegree) {
		color = COLOR_SCHEME.degree[pod[1]]
	}

	let name = null;
	if (hasDegree) {
		if (model.isRelative)
			name = IntervalUtils.getName({ interval: pod });
		else
			name = NoteUtils.getName({ note: pod });
	}

	return (
		<StyledFretLabel $color={color}>
			{name}
		</StyledFretLabel>
	);
};

export default FretLabel;
