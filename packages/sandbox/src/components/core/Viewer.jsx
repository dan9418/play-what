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

const Viewer = () => {
	const { pathHead } = usePathContext();
	const { modelData, vars, modelId } = pathHead;
	const model = MODEL[modelId];

	if(modelId === MODEL_ID.Group) return null;

	let pitchOffset = 0;
	if(vars && vars.root && model.isRelative) {
		pitchOffset = vars.root.value[0];
	}

	return (
		<StyledViewerContainer>
			<Fretboard data={modelData} modelId={modelId} pitchOffset={pitchOffset} />
		</StyledViewerContainer>
	);
};

export default Viewer;
