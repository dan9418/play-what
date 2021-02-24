import { MODEL_ID } from '@pw/core/src/models/helpers/Model.constants';
import React from 'react';
import styled from 'styled-components';
import Fretboard from '../../../../react/src/Fretboard/Fretboard';
import { usePathContext } from '../../contexts/PathContext';
import ButtonInput from '../ui/inputs/buttons/ButtonInput';

const StyledViewerContainer = styled.div`
    width: 100%;
	max-width: 512px;
	border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f5f5f5;
	padding: 16px;

	> .fretboard {
        //width: 100%;
    }
`;

const StyledViewerHeader = styled.h2`
	color: #555;
	text-align: left;
	width: 100%;
	max-width: 512px;
	text-transform: uppercase;
	margin: 16px 0 8px;

	display: flex;
	align-items: flex-end;
	justify-content: space-between;
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
		<>
			<StyledViewerHeader>Fretboard<ButtonInput>Edit</ButtonInput></StyledViewerHeader>
			<StyledViewerContainer>
				<Fretboard data={modelData} modelId={modelId} pitchOffset={pitchOffset} />
			</StyledViewerContainer>
		</>
	);
};

export default Viewer;
