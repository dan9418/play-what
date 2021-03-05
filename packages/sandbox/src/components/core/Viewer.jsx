import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React from 'react';
import styled from 'styled-components';
import Fretboard from '../../../../react/src/Fretboard/Fretboard';

const VIEWER_ID = {
	Fretboard: 'fretboard',
	Keyboard: 'keyboard'
}

const VIEWER = {
	[VIEWER_ID.Fretboard]: {
		viewerId: VIEWER_ID.Fretboard,
		name: 'Fretboard',
		component: Fretboard
	}
}

const StyledViewerContainer = styled.div`
    width: 100%;
	max-width: 512px;
	margin-top: 16px;
`;

const viewer = VIEWER[VIEWER_ID.Fretboard];

const getSupersetViewers = (supersets, modelOptions) => {
	return supersets.map((s, i) => {
		const labelProps = {
			modelId: MODEL_ID.RelativeScale,
			modelValue: s.value,
			modelOptions
		};
		return (
			<StyledViewerContainer key={i}>
				<h3>{s.name}</h3>
				<viewer.component labelProps={labelProps} />
			</StyledViewerContainer>
		);
	});
};

const Viewer = ({ labelProps }) => {

	const { modelId, modelValue, modelOptions } = labelProps;

	const model = MODEL[modelId];

	const supersets = model.utils.findSupersets ? model.utils.findSupersets(modelValue, modelOptions) : null;
	const supersetViewers = getSupersetViewers(supersets, modelOptions);

	return (
		<div>
			<h2>Viewer</h2>
			<StyledViewerContainer>
				<viewer.component labelProps={labelProps} />
			</StyledViewerContainer>
			<h2>Supersets</h2>
			{supersetViewers}
		</div>
	);
};

export default Viewer;
