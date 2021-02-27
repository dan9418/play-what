import React from 'react';
import styled from 'styled-components';
import { usePathNavContext } from '../../contexts/PathNavContext';
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
	const { prev, next } = usePathNavContext();

	return (
		<StyledPlaybackControls>
			{prev && <ButtonInput onClick={prev}>Prev</ButtonInput>}
			{next && <ButtonInput onClick={next}>Next</ButtonInput>}
		</StyledPlaybackControls>
	);
};

export default PlaybackControls;
