import { NOTE, SCALE } from '@pw/core/src/Pod.presets';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { inputState } from '../../state/state';
import Concept from '../modules/Concept/Concept';

const StyledInputPage = styled.div`
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
		<StyledInputPage>
			<Concept keyCenter={keyCenter} setIntervals={setIntervals} setKeyCenter={setKeyCenter} intervals={intervals} />
		</StyledInputPage>
	);
};

export default ConceptPage;
