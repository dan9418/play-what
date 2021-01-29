import { NOTE, SCALE } from '@pw/core/src/Pod.presets';
import React, { useState } from 'react';
import styled from 'styled-components';
import Concept from '../modules/Concept/Concept';

const StyledConceptPage = styled.div`
	width: 100%;
    min-height: 100%;
    margin: 24px auto;
    display: flex;
    flex-direction: column;
`;

const ConceptPage = () => {
	const [keyCenter, setKeyCenter] = useState(NOTE.C.value)
	const [intervals, setIntervals] = useState(SCALE.Major.value)

	return (
		<StyledConceptPage>
			<Concept keyCenter={keyCenter} setIntervals={setIntervals} setKeyCenter={setKeyCenter} intervals={intervals} />
		</StyledConceptPage>
	);
};

export default ConceptPage;
