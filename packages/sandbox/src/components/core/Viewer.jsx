import React from 'react';
import styled from 'styled-components';
import Fretboard from '../../../../react/src/Fretboard/Fretboard';
import Meter from '../../../../react/src/Meter/Meter';
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
			<Meter data={modelData} modelId={modelId} />
			<Fretboard data={modelData} modelId={modelId} />
		</StyledViewerContainer>
	);
};

export default Viewer;
