import { NOTE, SCALE } from '@pw/core/src/Pod.presets';
import React, { useState } from 'react';
import styled from 'styled-components';
import ConceptPanel from '../modules/Concept/ConceptPanel';

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
			<ConceptPanel keyCenter={keyCenter} setIntervals={setIntervals} setKeyCenter={setKeyCenter} intervals={intervals} />
		</StyledConceptPage>
	);
};

export default ConceptPage;
