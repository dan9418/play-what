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
	const { modelData, root } = useDataContext();
	const { modelId, name } = pathHead;

	let pitchOffset = 0;
	if(root && [MODEL_ID.Interval, MODEL_ID.IntervalChord, MODEL_ID.IntervalScale].includes(modelId)) {
		pitchOffset = root[0];
	}

	return (
		<StyledViewerContainer>
			<Fretboard data={modelData} modelId={modelId} pitchOffset={pitchOffset} />
		</StyledViewerContainer>
	);
};

export default Viewer;
