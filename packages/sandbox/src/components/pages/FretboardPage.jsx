import { NOTE, SCALE } from '@pw/core/src/Pod.presets';
import Fretboard from '@pw/react/src/Fretboard/Fretboard';
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledFretboardPage = styled.div`
	
`;

const FretboardPage = () => {
	const [keyCenter, setKeyCenter] = useState(NOTE.C.value)
	const [intervals, setIntervals] = useState(SCALE.Major.value)

	return (
		<StyledFretboardPage>
			<Fretboard keyCenter={keyCenter} intervals={intervals} />
		</StyledFretboardPage>
	);
};

export default FretboardPage;
