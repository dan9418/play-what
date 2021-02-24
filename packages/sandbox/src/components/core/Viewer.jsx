import { MODEL_ID } from '@pw/core/src/models/helpers/Model.constants';
import React from 'react';
import styled from 'styled-components';
import Fretboard from '../../../../react/src/Fretboard/Fretboard';
import { usePathContext } from '../../contexts/PathContext';
import ButtonInput from '../ui/inputs/buttons/ButtonInput';

const StyledViewerContainer = styled.div`
    width: 100%;

	h2 {
		color: #555;
		text-align: left;
		width: 100%;
		max-width: 512px;
		text-transform: uppercase;
		margin: 0;
		margin-bottom: 2px;

		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}

	> .fretboard {
        //width: 100%;
    }
`;

const Viewer = () => {
	const { pathHead } = usePathContext();
	const { modelData, modelId } = pathHead;

	if (modelId === MODEL_ID.Group) return null;

	let pitchOffset = 0;
	/*if (root) {
		pitchOffset = root[0];
	}*/

	return (
		<StyledViewerContainer>
			<h2>Fretboard<ButtonInput>Edit</ButtonInput></h2>
			<Fretboard data={modelData} modelId={modelId} pitchOffset={pitchOffset} />
		</StyledViewerContainer>
	);
};

export default Viewer;
