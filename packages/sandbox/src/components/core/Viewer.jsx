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
	const { pathHead } = usePathContext();
	const { modelData } = useDataContext();
	const { modelId, name } = pathHead;

	return (
		<StyledViewerContainer>
			<Fretboard data={modelData} modelId={modelId} />
		</StyledViewerContainer>
	);
};

export default Viewer;
