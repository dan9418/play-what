import { MODEL_ID } from '@pw/core/src/models/helpers/Model.constants';
import React from 'react';
import styled from 'styled-components';
import Fretboard from '../../../../react/src/Fretboard/Fretboard';
import { useDataContext } from '../../contexts/DataContext';
import { usePathContext } from '../../contexts/PathContext';

const StyledViewerContainer = styled.div`
    width: 100%;
	> .fretboard {
        //width: 100%;
    }
`;

const Viewer = () => {
	const { pathHead, pathParent } = usePathContext();
	const { modelData } = useDataContext();
	const { modelId, name } = pathHead;

	let pitchOffset = 0;
	if(modelId === MODEL_ID.IntervalChord || modelId === MODEL_ID.IntervalScale) {
		pitchOffset = pathParent.modelData.root[0];
	}

	return (
		<StyledViewerContainer>
			<Fretboard data={modelData} modelId={modelId} pitchOffset={pitchOffset} />
		</StyledViewerContainer>
	);
};

export default Viewer;
