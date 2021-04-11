import { ModelId } from "@pw/core/src/models/Model.constants";
import React from "react";
import { useRecoilValue } from 'recoil';
import StyledCard from "@pw/sandbox/src/components/ui/layout/StyledCard";
import styled from 'styled-components';
import { matchOctaveState } from '../../../../state/pathState';
import { VIEWER } from "./actions/viewerActions";

const StyledViewerContainer = styled.div`
    width: 100%;
	padding: 16px;
`;

const StyledViewerHelp = styled(StyledCard)`
	margin-top: 16px;
	color: #555;
	font-style: italic;

	p:not(:last-child) {
		margin-bottom: 16px;
	}
`

const Viewer = ({ modelConfig }) => {

	const matchOctave = useRecoilValue(matchOctaveState);

	const { modelId, modelValue, modelOptions } = modelConfig;
	const { viewerId, viewerProps } = modelOptions || { viewerId: VIEWER.fretboard.id, viewerProps: {} };

	const isBlank = modelId === ModelId.Group;

	const labelProps = {
		modelId: isBlank ? ModelId.Chord : modelId,
		modelValue: isBlank ? [] : modelValue,
		modelOptions,
		matchOctave
	};

	const ViewerComponent = VIEWER[viewerId].component;

	return (
		<StyledViewerContainer>
			<ViewerComponent {...viewerProps} labelProps={labelProps} />
			{isBlank && (
				<StyledViewerHelp>
					<p>
						Zoom in to see notes applied to this {VIEWER[viewerId].name}!
					</p>
					<p>
						Any viewer changes made to this group will apply to all subitems
					</p>
				</StyledViewerHelp>
			)}
		</StyledViewerContainer>
	);
};

export default Viewer;
