import { MODEL, MODEL_ID } from '@pw/core/src/models/helpers/Model.constants';
import React from 'react';
import styled from 'styled-components';
import Fretboard from '../../../../react/src/Fretboard/Fretboard';
import { usePathContext } from '../../contexts/PathContext';

const StyledViewerContainer = styled.div`
    width: 100%;
	> .fretboard {
        //width: 100%;
    }
`;

const findInput = (inputs, pathId) => {
	for (let i = 0; i < inputs.length; i++) {
		if (!inputs[i]) continue;
		for (let j = 0; j < inputs[i].length; j++) {
			if (inputs[i][j].pathId === pathId) {
				return inputs[i][j].childData;
			}
		}
	}
	return null;
};

const Viewer = () => {
	const { pathHead, inputs } = usePathContext();
	const { modelData, modelId } = pathHead;

	if (modelId === MODEL_ID.Group) return null;

	let pitchOffset = 0;
	const root = findInput(inputs, 'root');
	if (root) {
		pitchOffset = root[0];
	}

	return (
		<StyledViewerContainer>
			<Fretboard data={modelData} modelId={modelId} pitchOffset={pitchOffset} />
		</StyledViewerContainer>
	);
};

export default Viewer;
