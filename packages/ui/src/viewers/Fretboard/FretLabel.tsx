
import * as React from "react";
import styled from "styled-components";
import ToneUtils from "../../../../core/src/tone/Tone.utils";
import TuningUtils from "../../../../core/src/tuning/Tuning.utils";
import viewerUtils from "../../../../ui/src/viewers/Viewer.utils";
import { IFretLabelProps } from "./Fretboard.defaults";

const StyledFretLabel = styled.div`
	position: absolute;
	width: 90%;
	height: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
	background-color: ${({ $bgColor }) => $bgColor ? $bgColor : 'transparent'};
	color: ${({ $fgColor }) => $fgColor ? $fgColor : ''};

	cursor: pointer;
	&:hover {
		width: 100%;
		height: 100%;
	}
`;


const FretLabel: React.FC<IFretLabelProps> = ({ noteIndex, labelBy, podType, matchOctave, details, voicing, stringIndex }) => {

	const podOptions = {
		matchOctave,
		podType,
		labelBy
	};

	const podProps = viewerUtils.getPodProps(details, noteIndex, podOptions);

	if (!podProps) return null;

	let { bgColor, fgColor, text, interval } = podProps;

	const hasVoicing = voicing && voicing.value && voicing.value.length;

	const voicingForString = hasVoicing && voicing.value[stringIndex];

	const isNoteInVoicing = hasVoicing && Array.isArray(voicingForString) ?
		voicingForString.some(x => interval[1] + 1 === x) :
		interval[1] + 1 === voicingForString;

	if (hasVoicing && !isNoteInVoicing) bgColor = `${bgColor}33`;

	const f = TuningUtils.getFrequency(noteIndex);

	return (
		<StyledFretLabel $bgColor={bgColor} $fgColor={fgColor} onClick={() => ToneUtils.playSound(f)}>
			{text}
		</StyledFretLabel>
	);
};

export default FretLabel;
