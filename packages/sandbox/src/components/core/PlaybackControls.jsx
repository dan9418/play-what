import { MODEL } from '@pw/core/src/models/helpers/Model.constants';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { usePathNavContext } from '../../contexts/PathNavContext';
import { pathHeadState } from '../../state/pathState';
import ButtonInput from '../ui/inputs/buttons/ButtonInput';

const StyledPlaybackControls = styled.div`
	padding: 16px;
	background-color: #ddd;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const PlaybackControls = () => {
	const { modelId, modelData } = useRecoilValue(pathHeadState);
	const { prev, next, pop } = usePathNavContext();
	const [isPlaying, setIsPlaying] = useState(false);
	const [tempo, setTempo] = useState(200);
	const numBeats = modelData.t || 1;

	const model = MODEL[modelId];

	// Cancel at end of group
	useEffect(() => {
		if (isPlaying && !next) setIsPlaying(false);
	}, [isPlaying, next]);

	useEffect(() => {
		if (!isPlaying || !model.utils.playSound) return;
		model.utils.playSound(modelData);
	}, [isPlaying, modelData]);

	useEffect(() => {
		if (!isPlaying) return;
		const secondsPerBeat = 60 / tempo;


		const seconds = numBeats * secondsPerBeat;
		console.log(seconds);

		const timer = setTimeout(next, seconds * 1000);

		return () => clearTimeout(timer);
	}, [isPlaying, modelData]);

	return (
		<StyledPlaybackControls>
			<div>Tempo: {tempo}</div>
			<div>Beats: {numBeats}</div>
			<ButtonInput className="start-stop" onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Stop' : 'Start'}</ButtonInput>
		</StyledPlaybackControls>
	);
};

export default PlaybackControls;
