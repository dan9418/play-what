import { MODEL } from '@pw/core/src/models/helpers/Model.constants';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { usePathNavContext } from '../../contexts/PathNavContext';
import { pathHeadState } from '../../state/pathState';
import ButtonInput from '../ui/inputs/buttons/ButtonInput';

const StyledPlaybackControls = styled.div`
	height: 89px;
	background-color: #ddd;
	border-radius: 12px;
	display: flex;
	align-items: center;
	justify-content: center;

	& > button {
		margin: 16px;
	}

`;

const PlaybackControls = () => {
	const { modelId, modelData } = useRecoilValue(pathHeadState);
	const { prev, next } = usePathNavContext();

	const model = MODEL[modelId];

	return (
		<StyledPlaybackControls>
			{prev && <ButtonInput onClick={prev}>Prev</ButtonInput>}
			{next && <ButtonInput onClick={next}>Next</ButtonInput>}
			{model.utils.playSound && <ButtonInput onClick={() => model.utils.playSound(modelData)}>Play Sound</ButtonInput>}
		</StyledPlaybackControls>
	);
};

export default PlaybackControls;
