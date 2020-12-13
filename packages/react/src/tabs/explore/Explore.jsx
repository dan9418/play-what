import { SCALE } from '@pw/core/src/Pod.presets';
import React, { useState } from 'react';
import './Explore.css';
import OutputPanel from './panels/OutputPanel';
import Timeline from './Timeline/Timeline';
import styled from 'styled-components';

const DEFAULT_FRAMESET = {
	id: '2-5-1',
	name: '2-5-1',
	frames: [
		{
			pods: SCALE.Major.value
		},
		null,
		{
			pods: SCALE.NaturalMinor.value
		},
		{
			pods: SCALE.Chromatic.value
		},
		{
			pods: SCALE.Major.value
		},
		null,
		{
			pods: SCALE.NaturalMinor.value
		},
		null
	]
};

const StyledExplore = styled.div`
	width: 100%;
    min-height: 100%;
    margin: 24px auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
`;

const Explore = () => {
	const [frames, setFrames] = useState(DEFAULT_FRAMESET.frames);
	const [index, setIndex] = useState(0);

	return (
		<StyledExplore>
			<OutputPanel frame={frames[index]} />
		</StyledExplore>
	);
};

export default Explore;
